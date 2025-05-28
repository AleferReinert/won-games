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
        <Container>
          <section className='mb-10 -mx-4 lg:relative lg:z-10'>
            <BannerSlider items={home.banners} />
          </section>
        </Container>
      )}

      {home.newReleasesShowcase.products.length > 0 && (
        <section className='mb-28 lg:mt-0 lg:pt-[140px] lg:pb-[100px] lg:bg-theme-gray-100 1xl:-mt-[130px]'>
          <Showcase
            data-cy='newReleases'
            {...home.newReleasesShowcase}
            arrowColor='black'
            headingClass='lg:text-black'
          />
        </section>
      )}

      <Showcase data-cy='mostPopular' {...home.mostPopularShowcase} />
      <Showcase data-cy='comingSoon' {...home.comingSoonShowcase} />
      <Showcase data-cy='freeProducts' {...home.freeProductsShowcase} />
    </>
  )
}
