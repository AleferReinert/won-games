import { Container } from 'components/Container/Container'
import { Divider } from 'components/Divider/Divider'
import { Gallery } from 'components/Gallery/Gallery'
import { Heading } from 'components/Heading/Heading'
import { ProductDetails } from 'components/ProductDetails/ProductDetails'
import { ProductHeader } from 'components/ProductHeader/ProductHeader'
import { Showcase } from 'components/Showcase/Showcase'
import { Metadata } from 'next'
import Image from 'next/image'
import { fetchProductBySlug } from 'utils/fetchProductBySlug'
import styles from './ProductPage.module.css'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const { productHeader, cover } = await fetchProductBySlug(slug)
  return {
    title: productHeader.title,
    description: productHeader.description,
    openGraph: {
      type: 'article',
      url: process.env.NEXTAUTH_URL + `/game/${slug}`,
      title: productHeader.title,
      description: productHeader.description,
      images: [{ url: cover.url }]
    },
    twitter: {
      card: 'summary_large_image',
      title: productHeader.title,
      description: productHeader.description,
      images: [{ url: cover.url }]
    }
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const { cover, productHeader, gallery, description, details, comingSoon, recommended } =
    await fetchProductBySlug(slug)

  return (
    <div data-testid='ProductPage'>
      <div
        data-testid='cover'
        className='w-full overflow-hidden h-[240px] md:h-[400px] lg:h-[340px] xl:h-[440px] 1xl:h-[380px] 2xl:h-[580px] absolute top-0'
      >
        <Image
          priority
          src={cover.url}
          alt={cover.alternativeText}
          fill
          aria-hidden={!cover.alternativeText}
          className='object-cover'
        />
        <div className='absolute inset-0 bg-black/70'></div>
      </div>

      <Container className='mt-[130px] md:mt-[290px] lg:mt-[240px] xl:mt-[330px] 1xl:mt-[230px] 2xl:mt-[390px]'>
        <ProductHeader {...productHeader} />
      </Container>

      {gallery && (
        <div className='overflow-hidden mt-10  mx-auto max-w-[calc(theme(--max-w-container-default)-16px)] 2xl:max-w-[calc(theme(--max-w-container-large)-16px)]'>
          <Gallery items={gallery} />
        </div>
      )}

      <div className='py-10 text-zinc-50 md:text-theme-gray-950 md:bg-zinc-50 md:mt-10'>
        <Container>
          <Heading line='left' lineColor='secondary' className='md:text-black'>
            About game
          </Heading>
          <div className={styles.content} data-testid='description' dangerouslySetInnerHTML={{ __html: description }} />
        </Container>
      </div>

      <Container>
        <div className='mt-14 md:mt-16'>
          <ProductDetails {...details} />
        </div>
        <Divider />
      </Container>

      <Showcase data-cy='comingSoon' {...comingSoon} />
      <Showcase data-cy='recommendedProducts' {...recommended} />
    </div>
  )
}
