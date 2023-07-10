import styled, { css } from 'styled-components'
import { cssMediaQuery } from 'utils/tests/helpers'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`

export const Children = styled.main`
  ${({ theme }) => css`
    flex: 1 0 auto;
    margin-top: ${theme.spacings.large};

    ${cssMediaQuery.greaterThan(theme.breakpoint.large)} {
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

    ${cssMediaQuery.greaterThan(theme.breakpoint.medium)} {
      padding-top: calc(${theme.spacings.xxlarge} * 2);
      clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
    }
  `}
`
