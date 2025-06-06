import { BannerProps } from 'components/Banner/Banner'
import { CartItemProps, PaymentProps } from 'components/CartItem/CartItem'
import { HighlightProps } from 'components/Highlight/Highlight'
import { ProductProps } from 'components/Product/Product'
import { BannerFragment, HighlightFragment, OrdersQuery, PageHomeQuery, Query } from 'types/generated'
import { getImageUrl } from './getImageUrl'

// export const companyMapper = (data: CompanyQuery): CompanyProps => {
//   const { logoDark, logoLight, logoIcon } = data.company.data.attributes

//   return {
//     ...data.company.data.attributes,
//     logoIcon: {
//       url: getImageUrl(logoIcon.data.attributes.url),
//       width: logoIcon.data.attributes.width,
//       height: logoIcon.data.attributes.height
//     },
//     logoLight: {
//       url: getImageUrl(logoLight.data.attributes.url),
//       width: logoLight.data.attributes.width,
//       height: logoLight.data.attributes.height
//     },
//     logoDark: {
//       url: getImageUrl(logoDark.data.attributes.url),
//       width: logoDark.data.attributes.width,
//       height: logoDark.data.attributes.height
//     }
//   }
// }

// Retorna todos dados necessários para o componente Banner
export const bannerMapper = (banners: BannerFragment[]) => {
  return banners.map(
    ({ documentId, img, title, description, button, ribbon }): BannerProps => ({
      id: documentId,
      img: {
        url: getImageUrl(img.url),
        alternativeText: img.alternativeText ?? ''
      },
      title,
      ...(description && {
        description
      }),
      ...(button && {
        buttonLabel: button.label,
        buttonUrl: button?.url
      }),
      ...(ribbon && {
        ribbon: {
          label: ribbon.label,
          size: ribbon.size,
          color: ribbon.color
        }
      })
    })
  )
}

// Retorna os produtos adicionados ao carrinho
export const cartProductsMapper = (products: Query['products']): CartItemProps[] => {
  return products.map((product) => ({
    id: product.documentId,
    name: product.name,
    price: product.price,
    img: getImageUrl(product.cover?.url)
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
      url: getImageUrl(highlight.background.url),
      alternativeText: highlight.background.alternativeText ?? ''
    },
    floatImg: highlight.floatImg && {
      url: getImageUrl(highlight.floatImg.url),
      alternativeText: highlight.floatImg.alternativeText ?? ''
    }
  }
}

// Retorna todos dados necessários para o slider de produtos
export const productMapper = (products: PageHomeQuery['newProducts'] | undefined) => {
  return products
    ? products.map(
        ({ documentId, name, slug, developers, price, promotional_price, ribbon_label, cover }): ProductProps => ({
          id: documentId,
          title: name,
          slug,
          developer: developers[0]?.name || '',
          price,
          promotionalPrice: promotional_price,
          ribbonLabel: ribbon_label,
          cover: {
            url: cover ? getImageUrl(cover.url) : '/img/default/product.webp',
            alternativeText: cover.alternativeText || 'Image not found'
          }
        })
      )
    : []
}

// Retornas compras realizadas
export function ordersMapper(response: Pick<OrdersQuery, 'orders'>): CartItemProps[] {
  return response.orders.flatMap((orderEntity) => {
    const orderId = orderEntity.documentId
    const { card_brand, card_last4, createdAt } = orderEntity
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

    return orderEntity.products.map(({ documentId, cover, name, price }) => {
      const key = `${orderId}${documentId}`
      return {
        id: key,
        img: getImageUrl(cover.formats.thumbnail.url),
        name: name.trim(),
        price,
        paymentInfo
      }
    })
  })
}
