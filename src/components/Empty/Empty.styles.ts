import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium};
    text-align: center;
  `}
`

export const Img = styled.img`
  ${({ theme }) => css`
    max-width: 34rem;
    width: 100%;
    margin-bottom: ${theme.spacings.small};
    margin-right: -0.3rem;
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xlarge};

    @media (min-width: ${theme.breakpoint.medium}) {
      font-size: ${theme.font.sizes.xxlarge};
    }
  `}
`

export const Message = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.small};

    @media (min-width: ${theme.breakpoint.medium}) {
      font-size: ${theme.font.sizes.medium};
    }
  `}
`
