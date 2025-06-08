import { Heading } from 'components/Heading/Heading'
import { Platforms } from 'components/Platforms/Platforms'
import { ProductDetailsItem } from 'components/ProductDetailsItem/ProductDetailsItem'

type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'

export interface ProductDetailsProps {
  developers: string[]
  releaseDate: string
  platforms: string[]
  publishers: string[]
  rating?: Rating
  categories: string[]
}

export const ProductDetails = ({
  developers,
  releaseDate,
  platforms,
  publishers,
  rating,
  categories
}: ProductDetailsProps) => {
  const emptyData = !categories.length && !platforms.length && !releaseDate && !developers && !publishers && !rating

  return (
    <div data-testid='ProductDetailsComponent'>
      <Heading line='left' lineColor='secondary' className='max-md:hidden'>
        Game details
      </Heading>

      {emptyData ? (
        <p className='mt-10 text-zinc-50 text-base'>There are no details to show.</p>
      ) : (
        <div className='grid gap-4 mt-8 md:grid-cols-[repeat(2,_1fr)] lg:grid-cols-[repeat(4,_1fr)] 1xl:grid-cols-[repeat(6,_1fr)]'>
          {categories.length > 0 && <ProductDetailsItem title='Category'>{categories.join(', ')}</ProductDetailsItem>}

          {platforms.length > 0 && (
            <ProductDetailsItem title='Platforms'>
              <Platforms platforms={platforms} />
            </ProductDetailsItem>
          )}

          {releaseDate && (
            <ProductDetailsItem title='Release date'>
              {new Intl.DateTimeFormat('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                timeZone: 'UTC'
              }).format(new Date(releaseDate))}
            </ProductDetailsItem>
          )}

          {developers && <ProductDetailsItem title='Developer'>{developers.join(', ')}</ProductDetailsItem>}
          {publishers && <ProductDetailsItem title='Publisher'>{publishers.join(', ')}</ProductDetailsItem>}

          {rating && (
            <ProductDetailsItem title='Rating'>
              {rating === 'BR0' ? 'FREE' : rating.replace('BR', '') + '+'}
            </ProductDetailsItem>
          )}
        </div>
      )}
    </div>
  )
}
