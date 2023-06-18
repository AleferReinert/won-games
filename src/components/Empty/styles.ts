import Image from 'next/image'
import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
    text-align: center;
  `}
`

export const Img = styled(Image)`
  max-width: 38rem;
  width: 100%;
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xlarge};

    ${theme.media().greaterThan('medium')`
        font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const Message = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.xsmall};

    ${theme.media().greaterThan('medium')`
        font-size: ${theme.font.sizes.medium};
    `}
  `}
`
