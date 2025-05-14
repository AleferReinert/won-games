import theme from 'styles/theme'
import * as S from './Loading.styles'

export interface LoadingProps {
  color?: string
  animation?: '3dots' | 'spinner'
  size?: number
  inline?: boolean
}

export const Loading = ({
  color = theme.colors.white,
  animation = '3dots',
  size = 40,
  inline = false
}: LoadingProps) => {
  return (
    <S.Wrapper inline={inline}>
      {animation === '3dots' && (
        <svg
          role='img'
          width={size}
          height={size / 4}
          viewBox='0 0 40 10'
          xmlns='http://www.w3.org/2000/svg'
          fill={color}
          data-testid='3dotsLoadingComponent'
        >
          <title>Loading...</title>
          <circle cx='5' cy='5' r='5'>
            <animate attributeName='r' values='5;3;5' dur='0.8s' repeatCount='indefinite' calcMode='linear' />
            <animate
              attributeName='fill-opacity'
              values='1;.5;1'
              dur='0.8s'
              repeatCount='indefinite'
              calcMode='linear'
            />
          </circle>
          <circle cx='20' cy='5' r='3' fillOpacity='.3'>
            <animate attributeName='r' values='3;5;3' dur='0.8s' repeatCount='indefinite' calcMode='linear' />
            <animate
              attributeName='fill-opacity'
              values='.5;1;.5'
              dur='0.8s'
              repeatCount='indefinite'
              calcMode='linear'
            />
          </circle>
          <circle cx='35' cy='5' r='5'>
            <animate attributeName='r' values='5;3;5' dur='0.8s' repeatCount='indefinite' calcMode='linear' />
            <animate
              attributeName='fill-opacity'
              values='1;.5;1'
              dur='0.8s'
              repeatCount='indefinite'
              calcMode='linear'
            />
          </circle>
        </svg>
      )}
      {animation === 'spinner' && (
        <svg
          width={size}
          height={size}
          viewBox='-3 -3 42 42'
          xmlns='http://www.w3.org/2000/svg'
          stroke={color}
          data-testid='SpinnerLoadingComponent'
        >
          <title>Loading...</title>
          <g fill='none' fillRule='evenodd'>
            <g transform='translate(1 1)' strokeWidth='3'>
              <circle strokeOpacity='0.25' cx='18' cy='18' r='18' />
              <path d='M36 18c0-9.94-8.06-18-18-18'>
                <animateTransform
                  attributeName='transform'
                  type='rotate'
                  from='0 18 18'
                  to='360 18 18'
                  dur='1s'
                  repeatCount='indefinite'
                />
              </path>
            </g>
          </g>
        </svg>
      )}
    </S.Wrapper>
  )
}
