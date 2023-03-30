import styled from 'styled-components'
import { ThemeProps } from 'types'
import { IStyledComponent } from '../../shared/components.types'

export const StyledContainer = styled('div')<IStyledComponent>`
  background-color: var(${({ theme }: ThemeProps) => theme.background});
  color: var(${({ theme }: ThemeProps) => theme.color});
`

export const StyledGridContainer = styled(StyledContainer)<IStyledComponent>`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 32px;
`

export const StyledRegisterContainer = styled(StyledContainer)<IStyledComponent>`
  width: 100%;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    & {
      padding: 32px;
      width: 70%;
    }
  }

  @media only screen and (min-width: 1080px) {
    & {
      padding: 32px;
      width: 70%;
    }
  }

  @media only screen and (min-width: 1440px) {
    & {
      padding: 32px;
      width: 50%;
    }
  }

  @media only screen and (min-width: 1920px) {
    & {
      padding: 32px;
      width: 50%;
    }
  }

  @media only screen and (min-width: 2560px) {
    & {
      width: 40%;
    }
  }
`

export const HeaderButtonContainer = styled(StyledContainer)`
  display: flex;
  grid-column: span 2 / span 2;
  grid-column-start: 3;
  justify-content: flex-end;

  @media only screen and (min-width: 1080px) {
    & {
      display: none;
    }
  }
`
