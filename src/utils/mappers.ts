import { CartItemProps, PaymentProps } from 'components/CartItem/CartItem'
import { HighlightProps } from 'components/Highlight/Highlight'
import {
  BannerEntityResponseCollection,
  ComponentPageHighlight,
  OrderEntityResponseCollection,
  ProductEntity,
  Query
} from 'types/generated'

// Retorna todos dados necessários para o componente Banner
export const bannerMapper = (banners: BannerEntityResponseCollection) => {
  return banners.data.map(({ id, attributes: banner }) => ({
    id,
    img: {
      url: process.env.NEXT_PUBLIC_API_URL + banner.img.data.attributes.url,
      alternativeText: banner.img.data.attributes.alternativeText ?? ''
    },
    title: banner.title ? banner.title : null,
    description: banner.description ? banner.description : null,
    buttonLabel: banner.button?.label ? banner.button.label : null,
    buttonUrl: banner.button?.url ? banner.button.url : null,
    ribbon: banner.ribbon
      ? {
          label: banner.ribbon?.label ? banner.ribbon.label : null,
          color: banner.ribbon?.color ? banner.ribbon.color : null,
          size: banner.ribbon?.size ? banner.ribbon.size : null
        }
      : null
  }))
}

// Retorna os produtos adicionados ao carrinho
export const cartProductsMapper = (products: Query['products']['data']): CartItemProps[] => {
  return products.map((product) => ({
    id: product.id,
    name: product.attributes.name,
    price: product.attributes.price,
    img: product.attributes.cover?.data?.attributes?.url
  }))
}

// Retorna todos dados necessários para o componente Highlight
export const highlightMapper = (
  highlight: ComponentPageHighlight,
  alignment?: HighlightProps['$alignment']
): HighlightProps => {
  return {
    title: highlight.title,
    description: highlight.description,
    buttonLabel: highlight.buttonLabel,
    buttonUrl: highlight.buttonUrl,
    $alignment: alignment ?? highlight.alignment,
    background: {
      url: process.env.NEXT_PUBLIC_API_URL + highlight.background.data.attributes.url,
      alternativeText: highlight.background.data.attributes.alternativeText ?? ''
    },
    floatImg: highlight.floatImg.data && {
      url: process.env.NEXT_PUBLIC_API_URL + highlight.floatImg.data.attributes.url,
      alternativeText: highlight.floatImg.data ? highlight.floatImg.data.attributes.alternativeText : ''
    }
  }
}

// Retorna todos dados necessários para o slider de produtos
export const productMapper = (products: { data: Array<ProductEntity> }) => {
  return products.data
    ? products.data.map(({ id, attributes }) => ({
        id,
        title: attributes.name,
        slug: attributes.slug,
        developer: attributes.developers.data[0]?.attributes.name || '',
        price: attributes.price,
        img: attributes.cover.data ? process.env.NEXT_PUBLIC_API_URL + attributes.cover.data.attributes.url : '' // todo add default image
      }))
    : []
}

// Retornas compras realizadas
export function ordersMapper(response: OrderEntityResponseCollection): CartItemProps[] {
  return response.data.flatMap((orderEntity) => {
    const { card_brand, card_last4, createdAt } = orderEntity.attributes
    const paymentInfo: PaymentProps = {
      creditCardBrand: card_brand || '',
      creditCardNumber: card_last4 ? `**** **** **** ${card_last4}` : '',
      creditCardFlag: card_brand ? `/img/creditCards/${card_brand}.png` : '',
      purchaseDate: `Purchase made on ${new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }).format(new Date(createdAt))}`
    }

    return orderEntity.attributes.products.data.map((productEntity) => {
      const { id, attributes } = productEntity
      const { name, price, cover } = attributes
      const formats = cover.data.attributes.formats
      const img = formats.thumbnail.url

      return {
        id,
        img,
        name: name.trim(),
        price,
        paymentInfo
      }
    })
  })
}
