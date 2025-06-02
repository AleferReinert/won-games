import { BannerSlider } from 'components/BannerSlider/BannerSlider'
import { Container } from 'components/Container/Container'
import { Showcase } from 'components/Showcase/Showcase'
import { Metadata } from 'next'
import { fetchHomePage } from 'utils/fetchHomePage'

export const metadata: Metadata = {
  description: 'Your favorite games are here. Join now and have fun!'
}

export default async function HomePage() {
  const home = await fetchHomePage()

  return (
    <>
      {home.banners.length > 0 && (
        <section className='mb-10 -mx-4 lg:relative lg:z-10'>
          <Container>
            <BannerSlider items={home.banners} />
          </Container>
        </section>
      )}

      {home.newReleasesShowcase.products.length > 0 && (
        <section className='mb-28 xl:pt-44 xl:pb-[100px] xl:bg-theme-gray-100 xl:-mt-36 1xl:-mt-40 xl:mb-0 xl:[clip-path:polygon(0_0,_100%_14%,_100%_100%,_0_86%)]'>
          <Showcase
            data-cy='newReleases'
            {...home.newReleasesShowcase}
            arrowColor='black'
            headingClass='xl:text-black'
          />
        </section>
      )}

      <Showcase data-cy='mostPopular' {...home.mostPopularShowcase} />
      <Showcase data-cy='comingSoon' {...home.comingSoonShowcase} />
      <Showcase data-cy='freeProducts' {...home.freeProductsShowcase} />
    </>
  )
}
