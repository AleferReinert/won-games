import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`

export const Main = styled.main`
  ${({ theme }) => css`
    flex: 1 0 auto;
    // margin-top: ${theme.spacings.large};

    @media (min-width: ${theme.breakpoint.large}) {
      margin-top: ${theme.spacings.xxlarge};
    }
  `}
`

export const SectionFooter = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.xxlarge};
    background-color: ${theme.colors.white};
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);

    @media (min-width: ${theme.breakpoint.medium}) {
      padding-top: calc(${theme.spacings.xxlarge} * 2);
      clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
    }
  `}
`
