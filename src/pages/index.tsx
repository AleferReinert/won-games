import { BannerProps } from 'components/Banner/Banner'
import BannerSlider from 'components/BannerSlider/BannerSlider'
import Container from 'components/Container/Container'
import { HighlightProps } from 'components/Highlight/Highlight'
import { ProductProps } from 'components/Product/Product'
import Showcase from 'components/Showcase/Showcase'
import { GET_PAGE_HOME } from 'graphql/queries/getPageHome'
import {
  BannerEntityResponseCollection,
  ComponentPageHighlight,
  GameEntity,
  GameEntityResponseCollection,
  GameRelationResponseCollection,
  HomeEntity
} from 'graphql/types'
import { ReactElement } from 'react'
import DefaultTemplate from 'templates/Default/Default'
import { initializeApollo } from 'utils/apollo'
import * as S from './Home.styles'

interface SectionProps {
  title: string
  highlight?: HighlightProps
  games?: ProductProps[]
}

interface GetSectionProps {
  title: string
  highlight?: ComponentPageHighlight
  alignment?: HighlightProps['alignment']
  games?: GameEntityResponseCollection | GameRelationResponseCollection
}

export interface HomeTemplateProps {
  banners: BannerProps[]
  newsSection: SectionProps
  mostPopularsSection: SectionProps
  comingSoonSection: SectionProps
  freeSection: SectionProps
}

interface HomeProps {
  banners: BannerEntityResponseCollection
  newGames: GameEntityResponseCollection
  comingSoonGames: GameEntityResponseCollection
  mostPopularGames: GameRelationResponseCollection
  freeGames: GameEntityResponseCollection
  sections: { data: HomeEntity }
}

export const getStaticProps = async () => {
  const apolloClient = initializeApollo()
  const urlBase = 'http://localhost:1337'
  const currentDate = new Date().toISOString().slice(0, 10)
  const {
    data: { banners, newGames, comingSoonGames, freeGames, sections }
  } = await apolloClient.query<HomeProps>({
    query: GET_PAGE_HOME,
    variables: { limit: 9, currentDate }
  })

  const getBannersData = (banners: BannerEntityResponseCollection) =>
    banners.data.map(({ attributes: banner }) => ({
      img: urlBase + banner.img.data.attributes.url,
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

  // Retorna todas informações necessárias para a seção
  const getSection = ({
    title,
    highlight,
    alignment = 'right',
    games
  }: GetSectionProps) => ({
    title,
    highlight: !!highlight && {
      title: highlight.title,
      description: highlight.description,
      buttonLabel: highlight.buttonLabel,
      buttonLink: highlight.buttonLink,
      alignment,
      backgroundImage: urlBase + highlight.background.data.attributes.url,
      floatImage: urlBase + highlight.float.data.attributes.url
    },
    games:
      games &&
      games.data.map(({ attributes: game }: GameEntity) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers.data[0]?.attributes.name || '',
        price: game.price,
        img: game.cover.data ? urlBase + game.cover.data.attributes.url : '' // todo add default image
      }))
  })

  return {
    props: {
      revalidate: 60,
      banners: getBannersData(banners),
      newsSection: getSection({
        title: sections.data.attributes.newGames.title,
        games: newGames
      }),
      mostPopularsSection: getSection({
        title: sections.data.attributes.mostPopularGames.title,
        highlight: sections.data.attributes.mostPopularGames.highlight,
        games: sections.data.attributes.mostPopularGames.games
      }),
      comingSoonSection: getSection({
        title: sections.data.attributes.comingSoonGames.title,
        highlight: sections.data.attributes.comingSoonGames.highlight,
        alignment: 'left',
        games: comingSoonGames
      }),
      freeSection: getSection({
        title: sections.data.attributes.freeGames.title,
        highlight: sections.data.attributes.freeGames.highlight,
        games: freeGames
      })
    }
  }
}
export default function Index({
  banners,
  newsSection,
  mostPopularsSection,
  comingSoonSection,
  freeSection
}: HomeTemplateProps) {
  return (
    <>
      <Container>
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Showcase
          title={newsSection.title}
          games={newsSection.games}
          arrowColor='black'
        />
      </S.SectionNews>

      <Showcase
        title={mostPopularsSection.title}
        highlight={mostPopularsSection.highlight}
        games={mostPopularsSection.games}
      />

      <Showcase
        title={comingSoonSection.title}
        highlight={comingSoonSection.highlight}
        games={comingSoonSection.games}
      />

      <Showcase
        title={freeSection.title}
        highlight={freeSection.highlight}
        games={freeSection.games}
      />
    </>
  )
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <DefaultTemplate>{page}</DefaultTemplate>
}
