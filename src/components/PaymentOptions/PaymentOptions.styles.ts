import styled, { css } from 'styled-components'

export const Wrapper = styled.form`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}
`

export const CreditCards = styled.div`
  display: flex;
  flex-direction: column;
`

export const RadioWrapper = styled.div`
  grid-column: 3;
  grid-row: 1;
  display: flex;
  justify-content: end;
`

export const Item = styled.label`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    padding: ${theme.spacings.xsmall};
    display: flex;
    justify-content: space-between;
    margin-bottom: ${theme.spacings.xxsmall};
    transition: ${theme.transition.fast};

    &:hover {
      background-color: ${theme.colors.lightGrayHover};
    }
  `}
`

export const AddCreditCard = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    padding: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.medium};
    display: flex;
    width: 100%;

    svg {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`

export const Buttons = styled.div`
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

    @media (min-width: ${theme.breakpoint.small}) {
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
