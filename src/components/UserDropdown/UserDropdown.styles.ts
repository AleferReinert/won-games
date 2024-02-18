import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${() => css`
    button {
      display: flex;

      svg {
        width: 2.4rem;
      }
    }
  `}
`

export const Username = styled.div`
  ${() => css`
    margin: 0 1rem;
  `}
`

export const Nav = styled.div`
  ${({ theme }) => css`
    text-align: left;

    svg {
      width: 2rem;
      margin-right: 1.4rem;
    }

    a {
      display: flex;
      padding: 2rem;
      color: ${theme.colors.black};
      text-decoration: none;
      line-height: 2rem;

      + a {
        border-top: 0.1rem solid ${theme.colors.lightGray};
      }
    }
  `}
`
