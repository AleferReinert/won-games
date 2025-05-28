import { BannerProps } from 'components/Banner/Banner'
import { CartItemProps, PaymentProps } from 'components/CartItem/CartItem'
import { HighlightProps } from 'components/Highlight/Highlight'
import { ProductProps } from 'components/Product/Product'
import {
  BannerFragment,
  CompanyQuery,
  HighlightFragment,
  OrdersQuery,
  ProductEntityFragment,
  ProductRelationFragment,
  Query
} from 'types/generated'
import { CompanyProps } from './fetchCompany'
import { getImageUrl } from './getImageUrl'

export const companyMapper = (data: CompanyQuery): CompanyProps => {
  const { logoDark, logoLight, logoIcon } = data.company.data.attributes

  return {
    ...data.company.data.attributes,
    logoIcon: {
      url: getImageUrl(logoIcon.data.attributes.url),
      width: logoIcon.data.attributes.width,
      height: logoIcon.data.attributes.height
    },
    logoLight: {
      url: getImageUrl(logoLight.data.attributes.url),
      width: logoLight.data.attributes.width,
      height: logoLight.data.attributes.height
    },
    logoDark: {
      url: getImageUrl(logoDark.data.attributes.url),
      width: logoDark.data.attributes.width,
      height: logoDark.data.attributes.height
    }
  }
}

// Retorna todos dados necessários para o componente Banner
export const bannerMapper = (banners: BannerFragment) => {
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
  highlight: HighlightFragment,
  alignment?: HighlightProps['alignment']
): HighlightProps => {
  return {
    title: highlight.title,
    description: highlight.description,
    buttonLabel: highlight.buttonLabel,
    buttonUrl: highlight.buttonUrl,
    alignment: alignment ?? highlight.alignment,
    background: {
      url: getImageUrl(highlight.background.data.attributes.url),
      alternativeText: highlight.background.data.attributes.alternativeText ?? ''
    },
    floatImg: highlight.floatImg.data && {
      url: getImageUrl(highlight.floatImg.data.attributes.url),
      alternativeText: highlight.floatImg.data.attributes.alternativeText ?? ''
    }
  }
}

// Retorna todos dados necessários para o slider de produtos
export const productMapper = (products: ProductEntityFragment | ProductRelationFragment) => {
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
          cover: {
            url: attributes.cover.data
              ? getImageUrl(attributes.cover.data.attributes.url)
              : '/img/default/product.webp',
            alternativeText: attributes.cover.data.attributes.alternativeText || 'Image not found'
          }
        })
      )
    : []
}

// Retornas compras realizadas
export function ordersMapper(response: Pick<OrdersQuery, 'orders'>): CartItemProps[] {
  return response.orders.data.flatMap((orderEntity) => {
    const orderId = orderEntity.id
    const { card_brand, card_last4, createdAt } = orderEntity.attributes
    const paymentInfo: PaymentProps = {
      creditCardBrand: card_brand || '',
      creditCardNumber: card_last4 ? `**** **** **** ${card_last4}` : '',
      creditCardFlag: card_brand ? `/img/credit-cards/${card_brand}.png` : '',
      purchaseDate: `Purchase made on ${new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }).format(new Date(createdAt))}`
    }

    return orderEntity.attributes.products.data.map(({ attributes, id }) => {
      const key = `${orderId}${id}`
      return {
        id: key,
        img: getImageUrl(attributes.cover.data.attributes.formats.thumbnail.url),
        name: attributes.name.trim(),
        price: attributes.price,
        paymentInfo
      }
    })
  })
}
