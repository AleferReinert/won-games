import { CartItemProps } from 'components/CartItem/CartItem'
import { HighlightProps } from 'components/Highlight/Highlight'
import {
  BannerEntityResponseCollection,
  ComponentPageHighlight,
  GameEntityResponseCollection,
  GameRelationResponseCollection,
  Query
} from 'types/generated'

// Retorna todos dados necessários para o componente Banner
export const bannerMapper = (banners: BannerEntityResponseCollection) => {
  return banners.data.map(({ attributes: banner }) => ({
    img: process.env.NEXT_PUBLIC_API_URL + banner.img.data.attributes.url,
    title: banner.title,
    description: banner.description,
    buttonLabel: banner.button.label,
    buttonLink: banner.button.link,
    ribbon: {
      text: banner.ribbon.text,
      color: banner.ribbon.color,
      size: banner.ribbon.size
    }
  }))
}

// Retorna os produtos adicionados ao carrinho
export const cartProductsMapper = (products: Query['games']['data']): CartItemProps[] => {
  return products.map((product) => ({
    id: product.id,
    name: product.attributes.name,
    price: product.attributes.price,
    img: product.attributes.cover?.data?.attributes?.url
  }))
}

// Retorna todos dados necessários para o componente Highlight
export const highlightMapper = (highlight: ComponentPageHighlight, alignment?: HighlightProps['$alignment']) => {
  return {
    title: highlight.title,
    description: highlight.description,
    buttonLabel: highlight.buttonLabel,
    buttonLink: highlight.buttonLink,
    alignment: alignment ?? highlight.alignment,
    background: process.env.NEXT_PUBLIC_API_URL + highlight.background.data.attributes.url,
    float: process.env.NEXT_PUBLIC_API_URL + highlight.float.data.attributes.url
  }
}

// Retorna todos dados necessários para o slider de produtos
export const productMapper = (products: GameEntityResponseCollection | GameRelationResponseCollection) => {
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
