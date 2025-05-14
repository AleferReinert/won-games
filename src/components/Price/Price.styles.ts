import styled, { css, DefaultTheme } from 'styled-components'
import { PriceProps } from './Price'

export const priceModifiers = {
  small: (theme: DefaultTheme) => css`
    gap: ${theme.spacings.xxsmall};

    > div {
      font-size: ${theme.font.sizes.small};
      height: 2.2rem;
      line-height: 2.2rem;
      &:last-child {
        padding: 0 ${theme.spacings.xxsmall};
      }
    }
  `,
  medium: (theme: DefaultTheme) => css`
    gap: ${theme.spacings.xsmall};

    > div {
      font-size: ${theme.font.sizes.medium};
      height: 3.3rem;
      line-height: 3.3rem;
      &:last-child {
        padding: 0 ${theme.spacings.xsmall};
      }
    }
  `,
  large: (theme: DefaultTheme) => css`
    gap: ${theme.spacings.small};

    > div {
      font-size: ${theme.font.sizes.xlarge};
      height: 3.8rem;
      line-height: 3.8rem;
      &:last-child {
        padding: 0 ${theme.spacings.medium};
      }
    }
  `
}

export const Wrapper = styled.div<Pick<PriceProps, 'size'>>`
  ${({ theme, size }) => css`
    display: flex;
    ${!!size && priceModifiers[size](theme)}

    > div {
      display: inline-flex;
      font-weight: ${theme.font.bold};

      &${OldPrice} {
        padding: 0;
      }

      &:first-child {
        margin-left: ${theme.spacings.xsmall};
      }
    }
  `}
`

export const Price = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.border.radius};
  `}
`

export const OldPrice = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    text-decoration: line-through;
  `}
`
