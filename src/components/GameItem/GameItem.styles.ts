import styled, { css } from 'styled-components'
import { cssMediaQuery } from 'utils/tests/helpers'

export const Wrapper = styled.li`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.xxsmall};
    display: grid;
    grid-template-columns: min-content auto;
    grid-template-rows: auto auto;
    column-gap: ${theme.spacings.xxsmall};
    border-bottom: 0.1rem solid ${theme.colors.lightGray};

    ${cssMediaQuery.greaterThan(theme.breakpoint.xsmall)} {
      padding: ${theme.spacings.xsmall};
      column-gap: ${theme.spacings.xsmall};
    }

    ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
      grid-template-columns: min-content auto auto;
      grid-template-rows: none;
      padding: ${theme.spacings.small};
      column-gap: ${theme.spacings.small};
    }
  `}
`

export const Img = styled.img`
  max-width: 9.4rem;
  aspect-ratio: 16/9;
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: 2.4rem;
    margin-bottom: 0.2rem;
    transform: translateY(-0.4rem);
    display: flex;
    gap: ${theme.spacings.xxsmall};
    grid: 1;
    justify-content: space-between;

    ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
      justify-content: start;
    }
  `}
`

export const DownloadLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    display: inline-flex;
    width: 2.4rem;
    transform: translateY(0.2rem);
  `}
`

export const PaymentInfo = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    line-height: 1;
    grid-column: 1/3;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
    margin-top: ${theme.spacings.xsmall};

    ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
      margin-top: 0;
      grid-column: 3;
      text-align: right;
      flex-direction: column-reverse;
      gap: 0;
      justify-content: space-between;
    }
  `}
`

export const CreditCard = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};

    ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
      align-self: flex-end;
    }
  `}
`

export const CreditCardNumber = styled.div``

export const CreditCardFlag = styled.img``

export const PurchaseDate = styled.div``
