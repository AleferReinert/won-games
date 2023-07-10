import Heading from 'components/Heading/Heading'
import * as S from './TextContent.styles'

export type TextContentProps = {
  title?: string
  content: string
}

const TextContent = ({ title, content }: TextContentProps) => {
  return (
    <S.Wrapper data-testid='textContentComponent'>
      {!!title && (
        <Heading line='left' lineColor='secondary'>
          {title}
        </Heading>
      )}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </S.Wrapper>
  )
}

export default TextContent
