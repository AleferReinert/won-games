import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Form = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.xsmall};

    @media (min-width: ${theme.breakpoint.small}) {
      grid-template-columns: repeat(2, 1fr);
    }
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: ${theme.spacings.xsmall};
    flex-direction: column;

    @media (min-width: ${theme.breakpoint.small}) {
      flex-direction: row-reverse;
      margin-top: ${theme.spacings.xxlarge};
    }
  `}
`
