import Button from 'components/Button/Button'
import * as S from './Highlight.styles'
import Image from 'next/image'

export type HighlightProps = {
  title: string
  description: string
  buttonLabel: string
  buttonLink: string
  backgroundImage: string
  floatImage?: string
  alignment?: 'left' | 'right'
}

const Highlight = ({
  title,
  description,
  buttonLabel,
  buttonLink,
  backgroundImage,
  floatImage,
  alignment = 'right'
}: HighlightProps) => {
  return (
    <S.Wrapper
      backgroundImage={backgroundImage}
      alignment={alignment}
      data-testid='highlightComponent'
    >
      <S.FloatImage>
        {!!floatImage && <Image src={floatImage} alt={title} fill />}
      </S.FloatImage>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <Button as='a' href={buttonLink}>
          {buttonLabel}
        </Button>
      </S.Content>
    </S.Wrapper>
  )
}

export default Highlight
