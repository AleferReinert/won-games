import Button from 'components/Button/Button'
import * as S from './Empty.styles'

type CommomProps = {
  title: string
  description: string
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

export type EmptyProps = CommomProps & ConditionalProps

const Empty = ({ title, description, label, link }: EmptyProps) => {
  return (
    <S.Wrapper data-testid='emptyComponent'>
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
