import theme from 'styles/theme'
import * as S from './Loading.styles'

interface LoadingProps {
  color?: 'light' | 'dark'
}

export const Loading = ({ color = 'light' }: LoadingProps) => {
  const conditionalColor = color === 'light' ? theme.colors.white : theme.colors.black

  return (
    <S.Wrapper>
      <svg role='img' width='40' height='10' xmlns='http://www.w3.org/2000/svg' fill={conditionalColor}>
        <title>Carregando...</title>
        <circle cx='5' cy='5' r='5'>
          <animate
            attributeName='r'
            from='5'
            to='5'
            begin='0s'
            dur='0.8s'
            values='5;3;5'
            calcMode='linear'
            repeatCount='indefinite'
          />
          <animate
            attributeName='fill-opacity'
            from='1'
            to='1'
            begin='0s'
            dur='0.8s'
            values='1;.5;1'
            calcMode='linear'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='20' cy='5' r='3' fillOpacity='.3'>
          <animate
            attributeName='r'
            from='3'
            to='3'
            begin='0s'
            dur='0.8s'
            values='3;5;3'
            calcMode='linear'
            repeatCount='indefinite'
          />
          <animate
            attributeName='fill-opacity'
            from='.5'
            to='.5'
            begin='0s'
            dur='0.8s'
            values='.5;1;.5'
            calcMode='linear'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='35' cy='5' r='5'>
          <animate
            attributeName='r'
            from='5'
            to='5'
            begin='0s'
            dur='0.8s'
            values='5;3;5'
            calcMode='linear'
            repeatCount='indefinite'
          />
          <animate
            attributeName='fill-opacity'
            from='1'
            to='1'
            begin='0s'
            dur='0.8s'
            values='1;.5;1'
            calcMode='linear'
            repeatCount='indefinite'
          />
        </circle>
      </svg>
    </S.Wrapper>
  )
}
