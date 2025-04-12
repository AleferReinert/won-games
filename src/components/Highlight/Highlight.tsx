import Button from 'components/Button/Button'
import Image from 'next/image'
import * as S from './Highlight.styles'

export interface HighlightProps {
  title: string
  description: string
  buttonLabel: string
  buttonUrl: string
  background: string
  floatImg?: string
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
    <S.Wrapper background={background} $alignment={$alignment} data-testid='HighlightComponent'>
      <S.FloatImage>
        {floatImg && (
          <Image src={floatImg} alt={title} fill sizes='(max-width: 768px) 100vw, 50vw' /> // todo: check sizes
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
