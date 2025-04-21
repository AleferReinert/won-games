import Image from 'next/image'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-align: center;
    margin-bottom: ${theme.spacings.xxlarge};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    a {
      color: ${theme.colors.primary};
      text-decoration: none;
    }
  `}
`

export const Svg = styled(Image)`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} auto;
  `}
`
