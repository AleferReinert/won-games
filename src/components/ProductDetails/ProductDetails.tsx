import Heading from 'components/Heading/Heading'
import Platforms from 'components/Platforms/Platforms'
import * as S from './ProductDetails.styles'

type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18' | '' // todo: remove ''

export interface ProductDetailsProps {
  developer: string
  releaseDate: string
  platforms: string[]
  publisher: string
  rating: Rating
  categories: string[]
}

const ProductDetails = ({ developer, releaseDate, platforms, publisher, rating, categories }: ProductDetailsProps) => {
  const emptyData = !categories.length && !platforms.length && !releaseDate && !developer && !publisher && rating === ''

  return (
    <S.Wrapper data-testid='ProductDetailsComponent'>
      <Heading $line='left' $lineColor='secondary'>
        Game details
      </Heading>

      {emptyData ? (
        <S.Empty>There are no details to show.</S.Empty>
      ) : (
        <>
          <S.Content>
            {categories.length > 0 && (
              <S.Block>
                <S.Title>Category</S.Title>
                <S.Description>{categories.join(', ')}</S.Description>
              </S.Block>
            )}

            {platforms.length > 0 && (
              <S.Block>
                <S.Title>Platforms</S.Title>
                <Platforms platforms={platforms} />
              </S.Block>
            )}

            {releaseDate && (
              <S.Block>
                <S.Title>Release date</S.Title>
                <S.Description>
                  {new Intl.DateTimeFormat('en-US', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  }).format(new Date(releaseDate))}
                </S.Description>
              </S.Block>
            )}

            {developer && (
              <S.Block>
                <S.Title>Developer</S.Title>
                <S.Description>{developer}</S.Description>
              </S.Block>
            )}

            {publisher && (
              <S.Block>
                <S.Title>Publisher</S.Title>
                <S.Description>{publisher}</S.Description>
              </S.Block>
            )}

            {rating && (
              <S.Block>
                <S.Title>Rating</S.Title>
                <S.Description>{rating === 'BR0' ? 'FREE' : rating.replace('BR', '') + '+'}</S.Description>
              </S.Block>
            )}
          </S.Content>
        </>
      )}
    </S.Wrapper>
  )
}

export default ProductDetails
