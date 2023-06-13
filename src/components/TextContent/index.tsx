import * as S from './styles'
import Heading from 'components/Heading'

export type TextContentProps = {
  title?: string
  content: string
}

const TextContent = ({ title, content }: TextContentProps) => {
  return (
    <S.Wrapper>
      {!!title && (
        <Heading lineLeft lineColor='secondary'>
          {title}
        </Heading>
      )}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </S.Wrapper>
  )
}

export default TextContent
