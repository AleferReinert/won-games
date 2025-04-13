import Button from 'components/Button/Button'
import * as S from './Empty.styles'

export interface EmptyProps {
  title: string
  $description: string
  $invertedColors?: boolean
  $small?: boolean
  buttonText?: string
  buttonUrl?: string
}

const Empty = ({ title, $description, buttonText, buttonUrl, $invertedColors = false, $small = false }: EmptyProps) => {
  return (
    <S.Wrapper data-testid='EmptyComponent' $invertedColors={$invertedColors} $small={$small}>
      <S.Img
        src='/img/empty.svg'
        alt='Decorative image'
        width={$small ? 140 : 340}
        height={$small ? 72 : 176}
        aria-hidden
      />
      <S.Title>{title}</S.Title>
      <S.Message>{$description}</S.Message>

      {buttonUrl && (
        <Button asLink href={buttonUrl}>
          {buttonText}
        </Button>
      )}
    </S.Wrapper>
  )
}

export default Empty
