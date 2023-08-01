import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-align: center;
  `}
`

export const CreditCards = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
  `}
`

export const Item = styled.label`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    padding: ${theme.spacings.xsmall};
    display: flex;
    justify-content: space-between;
  `}
`
