import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;

    img {
      width: 4rem;
    }
  `}
`
