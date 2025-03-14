import Button from 'components/Button/Button'
import Image from 'next/image'
import * as S from './Highlight.styles'

export interface HighlightProps {
  title: string
  description: string
  buttonLabel: string
  buttonLink: string
  background: string
  float?: string
  $alignment?: 'left' | 'right'
}

const Highlight = ({
  title,
  description,
  buttonLabel,
  buttonLink,
  background,
  float,
  $alignment = 'right'
}: HighlightProps) => {
  return (
    <S.Wrapper
      background={background}
      $alignment={$alignment}
      data-testid='highlightComponent'
    >
      <S.FloatImage>
        {float && (
          <Image
            src={float}
            alt={title}
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
          /> // todo: check sizes
        )}
      </S.FloatImage>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <Button asLink href={buttonLink}>
          {buttonLabel}
        </Button>
      </S.Content>
    </S.Wrapper>
  )
}

export default Highlight
