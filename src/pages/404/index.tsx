import Empty from 'components/Empty/Empty'
import * as S from 'pages/404/404.styles'
import type { ReactElement } from 'react'
import DefaultTemplate from 'templates/Default/Default'

const NotFoundPage = () => {
  return (
    <S.Wrapper>
      <Empty
        title='404'
        $description='This page could not be found.'
        buttonText='Go back'
        buttonUrl='/'
      />
    </S.Wrapper>
  )
}

NotFoundPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultTemplate>{page}</DefaultTemplate>
}

export default NotFoundPage
