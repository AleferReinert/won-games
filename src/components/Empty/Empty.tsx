import Button from 'components/Button/Button'
import * as S from './Empty.styles'

export type EmptyCommomProps = {
  title: string
  description: string
  invertedColors?: boolean
  small?: boolean
}

type ConditionalProps =
  | {
      label?: never
      link?: never
    }
  | {
      label: string
      link: string
    }

export type EmptyProps = EmptyCommomProps & ConditionalProps

const Empty = ({
  title,
  description,
  label,
  link,
  invertedColors = false,
  small = false
}: EmptyProps) => {
  return (
    <S.Wrapper
      data-testid='emptyComponent'
      title={title}
      description={description}
      invertedColors={invertedColors}
      small={small}
    >
      <S.Img
        src='/img/empty.svg'
        alt='A person on a couch playing video games'
      />
      <S.Title>{title}</S.Title>
      <S.Message>{description}</S.Message>
      {!!label && (
        <Button as='a' href={link}>
          {label}
        </Button>
      )}
    </S.Wrapper>
  )
}

export default Empty
