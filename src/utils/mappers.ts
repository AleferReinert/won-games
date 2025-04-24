import { BannerProps } from 'components/Banner/Banner'
import { CartItemProps, PaymentProps } from 'components/CartItem/CartItem'
import { HighlightProps } from 'components/Highlight/Highlight'
import { ProductProps } from 'components/Product/Product'
import {
  BannerEntityResponseCollection,
  ComponentPageHighlight,
  OrderEntityResponseCollection,
  ProductEntity,
  Query
} from 'types/generated'
import { getImageUrl } from './getImageUrl'

// Retorna todos dados necessários para o componente Banner
export const bannerMapper = (banners: BannerEntityResponseCollection) => {
  return banners.data.map(
    ({ id, attributes }): BannerProps => ({
      id,
      img: {
        url: getImageUrl(attributes.img.data.attributes.url),
        alternativeText: attributes.img.data.attributes.alternativeText ?? ''
      },
      title: attributes.title,
      ...(attributes.description && {
        description: attributes.description
      }),
      ...(attributes.button && {
        buttonLabel: attributes.button.label,
        buttonUrl: attributes.button?.url
      }),
      ...(attributes.ribbon && {
        ribbon: {
          label: attributes.ribbon.label,
          size: attributes.ribbon.size,
          color: attributes.ribbon.color
        }
      })
    })
  )
}

// Retorna os produtos adicionados ao carrinho
export const cartProductsMapper = (products: Query['products']['data']): CartItemProps[] => {
  return products.map((product) => ({
    id: product.id,
    name: product.attributes.name,
    price: product.attributes.price,
    img: getImageUrl(product.attributes.cover?.data?.attributes?.url)
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
      url: getImageUrl(highlight.background.data.attributes.url),
      alternativeText: highlight.background.data.attributes.alternativeText ?? ''
    },
    floatImg: highlight.floatImg.data && {
      url: getImageUrl(highlight.floatImg.data.attributes.url),
      alternativeText: highlight.floatImg.data ? highlight.floatImg.data.attributes.alternativeText : ''
    }
  }
}

// Retorna todos dados necessários para o slider de produtos
export const productMapper = (products: { data: Array<ProductEntity> }) => {
  return products.data
    ? products.data.map(
        ({ id, attributes }): ProductProps => ({
          id,
          title: attributes.name,
          slug: attributes.slug,
          developer: attributes.developers.data[0]?.attributes.name || '',
          price: attributes.price,
          promotionalPrice: attributes.promotional_price,
          ribbonLabel: attributes.ribbon_label,
          img: attributes.cover.data
            ? getImageUrl(attributes.cover.data.attributes.url)
            : '/img/defaults/product-default.webp'
        })
      )
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
      const img = getImageUrl(formats.thumbnail.url)

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
