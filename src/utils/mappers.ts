import { HighlightProps } from 'components/Highlight/Highlight'
import {
  BannerEntityResponseCollection,
  ComponentPageHighlight,
  GameEntityResponseCollection,
  GameRelationResponseCollection
} from 'graphql/types'

export const baseUrl = 'http://localhost:1337'

// Retorna todos dados necessários para o componente Banner
export const bannerMapper = (banners: BannerEntityResponseCollection) => {
  return banners.data.map(({ attributes: banner }) => ({
    img: baseUrl + banner.img.data.attributes.url,
    title: banner.title,
    description: banner.description,
    buttonLabel: banner.button.label,
    buttonLink: banner.button.link,
    ...(banner.ribbon && {
      ribbon: banner.ribbon.text,
      ribbonSize: banner.ribbon.size,
      ribbonColor: banner.ribbon.color
    })
  }))
}

// Retorna todos dados necessários para o componente Highlight
export const highlightMapper = (
  highlight: ComponentPageHighlight,
  alignment?: HighlightProps['alignment']
) => {
  return {
    title: highlight.title,
    description: highlight.description,
    buttonLabel: highlight.buttonLabel,
    buttonLink: highlight.buttonLink,
    alignment: alignment ?? highlight.alignment,
    background: baseUrl + highlight.background.data.attributes.url,
    float: baseUrl + highlight.float.data.attributes.url
  }
}

// Retorna todos dados necessários para o slider de produtos
export const productMapper = (
  products: GameEntityResponseCollection | GameRelationResponseCollection
) => {
  return products.data.map(({ attributes: product }) => ({
    title: product.name,
    slug: product.slug,
    developer: product.developers.data[0]?.attributes.name || '',
    price: product.price,
    img: product.cover.data ? baseUrl + product.cover.data.attributes.url : '' // todo add default image
  }))
}
