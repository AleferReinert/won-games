import styled, { css } from 'styled-components'
import { LoadingProps } from './Loading'

export const Wrapper = styled.div<Pick<LoadingProps, 'inline'>>`
  ${({ inline }) => css`
    width: 100%;
    display: flex;
    width: ${inline ? 'fit-content' : '100%'};
    justify-content: center;
    align-items: center;
  `}
`
