import Button from 'components/Button/Button'
import Image from 'next/image'
import * as S from './Highlight.styles'

export interface HighlightProps {
  title: string
  description: string
  buttonLabel: string
  buttonUrl: string
  background: {
    url: string
    alternativeText: string
  }
  floatImg?: {
    url: string
    alternativeText: string
  }
  $alignment?: 'left' | 'right'
}

const Highlight = ({
  title,
  description,
  buttonLabel,
  buttonUrl,
  background,
  floatImg,
  $alignment = 'right'
}: HighlightProps) => {
  return (
    <S.Wrapper $alignment={$alignment} data-testid='HighlightComponent'>
      <Image
        src={background.url}
        alt={background.alternativeText}
        aria-hidden={background.alternativeText ? false : true}
        fill
      />
      <S.FloatImage>
        {floatImg && (
          <Image
            src={floatImg.url}
            alt={floatImg.alternativeText}
            fill
            aria-hidden={floatImg.alternativeText ? false : true}
            sizes='(max-width: 768px) 100vw, 50vw'
          />
        )}
      </S.FloatImage>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <Button asLink href={buttonUrl}>
          {buttonLabel}
        </Button>
      </S.Content>
    </S.Wrapper>
  )
}

export default Highlight
