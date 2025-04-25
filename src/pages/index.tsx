import { BannerProps } from 'components/Banner/Banner'
import BannerSlider from 'components/BannerSlider/BannerSlider'
import Container from 'components/Container/Container'
import Showcase, { ShowcaseProps } from 'components/Showcase/Showcase'
import { PAGE_HOME } from 'graphql/queries/pageHome'
import { GetStaticProps } from 'next'
import { ReactElement } from 'react'
import DefaultTemplate from 'templates/Default/Default'
import { PageHomeQuery } from 'types/generated'
import { initializeApollo } from 'utils/apollo'
import { bannerMapper, highlightMapper, productMapper } from 'utils/mappers'
import * as S from './Home.styles'

export interface HomeProps {
	banners: BannerProps[]
	newReleasesShowcase: ShowcaseProps
	mostPopularsShowcase: ShowcaseProps
	comingSoonShowcase: ShowcaseProps
	freeProductsShowcase: ShowcaseProps
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const apolloClient = initializeApollo({})
	const home = await apolloClient.query<PageHomeQuery>({
		query: PAGE_HOME,
		variables: { limit: 9, currentDate: new Date().toISOString().slice(0, 10) },
		fetchPolicy: 'no-cache'
	})
	const { newProducts, popularProducts, comingSoonProducts, freeProducts } = home.data.showcases.data.attributes

	return {
		revalidate: 60,
		props: {
			banners: bannerMapper(home.data.banners),
			newReleasesShowcase: {
				title: newProducts.title,
				products: productMapper(home.data.newProducts)
			},
			mostPopularsShowcase: {
				title: popularProducts.title,
				highlight: highlightMapper(popularProducts.highlight),
				products: productMapper(popularProducts.products)
			},
			comingSoonShowcase: {
				title: comingSoonProducts.title,
				highlight: highlightMapper(comingSoonProducts.highlight),
				products: productMapper(home.data.comingSoonProducts)
			},
			freeProductsShowcase: {
				title: freeProducts.title,
				highlight: highlightMapper(freeProducts.highlight),
				products: productMapper(home.data.freeProducts)
			}
		}
	}
}
export default function Index({
	banners,
	newReleasesShowcase,
	mostPopularsShowcase,
	comingSoonShowcase,
	freeProductsShowcase
}: HomeProps) {
	return (
		<>
			{banners.length > 0 && (
				<Container>
					<S.SectionBanner>
						<BannerSlider items={banners} />
					</S.SectionBanner>
				</Container>
			)}

			<S.SectionNews>
				<Showcase {...newReleasesShowcase} $arrowColor='black' />
			</S.SectionNews>

			<Showcase {...mostPopularsShowcase} />
			<Showcase {...comingSoonShowcase} />
			<Showcase {...freeProductsShowcase} />
		</>
	)
}

Index.getLayout = function getLayout(page: ReactElement) {
	return <DefaultTemplate>{page}</DefaultTemplate>
}
