import styled, { css } from 'styled-components'
import { cssMediaQuery } from 'utils/tests/helpers'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};
  `}
`

export const Form = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.xsmall};

    ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
      grid-template-columns: repeat(2, 1fr);
    }
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: ${theme.spacings.xsmall};
    flex-direction: column;

    ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
      flex-direction: row-reverse;
      margin-top: ${theme.spacings.xxlarge};
    }
  `}
`
