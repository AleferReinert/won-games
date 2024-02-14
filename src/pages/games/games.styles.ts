import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoint.medium}) {
      display: grid;
      gap: ${theme.grid.gutter};
      grid-template-columns: 22rem auto;
    }
  `}
`

export const Games = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.small};
    grid-auto-rows: max-content;

    @media (min-width: ${theme.breakpoint.small}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: ${theme.breakpoint.medium}) {
      grid-template-columns: repeat(3, 1fr);
    }
  `}
`

export const ShowMore = styled.button`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} auto;
    background: transparent;
    display: block;

    span {
      text-transform: uppercase;
      display: block;
      color: ${theme.colors.white};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.medium};
    }

    svg {
      color: ${theme.colors.primary};
      width: 3.6rem;
      margin-top: -0.3rem;
      transition: ${theme.transition.fast};
    }

    &:hover svg {
      margin-top: 0;
    }
  `}
`
