import Button from 'components/Button'
import * as S from './styles'

export type EmptyPropsWithoutLink = {
  title: string
  description: string
  link?: undefined
  label?: undefined
}

export type EmptyPropsWithLink = {
  title: string
  description: string
  link: string
  label: string
}

export type EmptyProps = EmptyPropsWithLink | EmptyPropsWithoutLink

const Empty = ({ title, description, link, label }: EmptyProps) => {
  return (
    <S.Wrapper>
      <S.Img
        src='/img/empty.svg'
        fill
        alt='A person on a couch playing video games'
      />
      <S.Title>{title}</S.Title>
      <S.Message>{description}</S.Message>
      {!!link && (
        <Button as='a' href={link}>
          {label}
        </Button>
      )}
    </S.Wrapper>
  )
}

export default Empty
