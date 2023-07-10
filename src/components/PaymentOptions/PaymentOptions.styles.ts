import styled, { css } from 'styled-components'
import { cssMediaQuery } from 'utils/tests/helpers'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};

    ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
      padding: ${theme.spacings.small};
    }
  `}
`

export const CreditCards = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
  `}
`

export const CreditCard = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    padding: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.medium};
    display: grid;
    grid-template-columns: 3.6rem auto min-content;
    column-gap: ${theme.spacings.xsmall};
    row-gap: ${theme.spacings.xxsmall};
    align-items: center;

    &:last-child {
      display: flex;

      svg {
        width: 2.4rem;
      }
    }
  `}
`

export const AddCreditCard = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    padding: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.medium};
    display: flex;

    svg {
      width: 2.4rem;
    }
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    grid-column: 1;
    grid-row: 1;
    overflow: hidden;
    height: 2.2rem;
    background-color: ${theme.colors.black};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      height: 2.2rem;
    }
  `}
`

export const Number = styled.div`
  ${({ theme }) => css`
    grid-column: 1/4;
    grid-row: 2;

    ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
      grid-column: 2;
      grid-row: 1;
    }
  `}
`

export const RadioWrapper = styled.div`
  grid-column: 3;
  grid-row: 1;
  display: flex;
  justify-content: end;
`

export const Footer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightBg};
    padding: ${theme.spacings.xsmall};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};

    button {
      padding-left: 0;
      padding-right: 0;
      width: 100%;
    }

    ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
      flex-direction: row;
      gap: 0;
      justify-content: space-between;
      padding: ${theme.spacings.small};

      button {
        width: 50%;
      }
    }
  `}
`
