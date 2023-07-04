import { Windows, Linux, Apple } from '@styled-icons/fa-brands'
import Heading from 'components/Heading/Heading'
import * as S from './GameDetails.styles'

type Platform = 'windows' | 'linux' | 'mac'
type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'

export type GameDetailsProps = {
  developer: string
  releaseDate: string
  platforms: Platform[]
  publisher: string
  rating: Rating
  categories: string[]
}

const GameDetails = ({
  developer,
  releaseDate,
  platforms,
  publisher,
  rating,
  categories
}: GameDetailsProps) => {
  const platformIcons = {
    windows: <Windows title='Windows' />,
    linux: <Linux title='Linux' />,
    mac: <Apple title='Mac' />
  }

  return (
    <S.Wrapper data-testid='gameDetailsComponent'>
      <Heading line='left' lineColor='secondary'>
        Game details
      </Heading>

      <S.Content>
        <S.Block>
          <S.Title>Category</S.Title>
          <S.Description>{categories.join(', ')}</S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Platforms</S.Title>
          <S.Description>
            <S.IconsWrapper>
              {platforms.map((icon: Platform, index) => (
                <S.Icon key={index} title={icon}>
                  {platformIcons[icon]}
                </S.Icon>
              ))}
            </S.IconsWrapper>
          </S.Description>
        </S.Block>

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

        <S.Block>
          <S.Title>Developer</S.Title>
          <S.Description>{developer}</S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Publisher</S.Title>
          <S.Description>{publisher}</S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Rating</S.Title>
          <S.Description>
            {rating === 'BR0' ? 'FREE' : rating.replace('BR', '') + '+'}
          </S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameDetails
