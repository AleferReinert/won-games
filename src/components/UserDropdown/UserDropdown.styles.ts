import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    button {
      display: flex;

      svg {
        width: 2.4rem;
        height: 2.4rem;
        margin-bottom: -0.1rem;
        fill: ${theme.colors.white};
      }
    }

    display: none;
    line-height: 0;

    @media (min-width: ${theme.breakpoint.small}) {
      display: block;
    }
  `}
`

export const Username = styled.div`
  ${() => css`
    margin: 0 1rem;
  `}
`

export const Nav = styled.nav`
  ${({ theme }) => css`
    text-align: left;

    svg {
      width: 2.2rem;
      height: 2.2rem;
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
