import styled, { css } from 'styled-components'

export const Wrapper = styled.form`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    max-height: min-content;
  `}
`

export const CardWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: ${theme.spacings.xsmall};
    border: 0.1rem solid ${theme.colors.lightGray};
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
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
