import styled from 'styled-components'
import { PrimaryLink, HeaderOuterArea, SecondaryLink, ThemeSelector } from 'components'
import { useMenuContext } from 'contexts/MenuContext'
import { useThemeContext } from 'contexts/Theme/ThemeContext'
import { ThemeProps, IStyledComponent } from 'shared'

const StyledListItem = styled('li')`
  align-items: center;
  display: flex;
  gap: 16px;

  &:last-child {
    border-bottom: none;
    margin-top: 16px;
  }
`

const StyledUList = styled('ul')<IStyledComponent>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  @media only screen and (min-width: 1080px) {
    & {
      align-items: center;
      flex-direction: row;
      gap: 8px;
      justify-content: flex-end;
      width: 100%;
    }
  }
`

const StyledNav = styled('nav')<IStyledComponent>`
  color: var(${({ theme }: ThemeProps) => theme.color});
  display: flex;
  min-height: 100%;
  overflow: hidden;
  width: 100%;
  transition: all 0.5s ease;

  ${StyledUList} ${StyledListItem} {
    border-bottom: 1px solid var(${({ theme }: ThemeProps) => theme.color});
  }

  ${StyledUList} ${StyledListItem}:last-child {
    border-bottom: none;
  }

  ${StyledUList} ${StyledListItem}:nth-child(3) {
    border: none;
    padding: 6px 12px;
  }

  ${HeaderOuterArea} & ${StyledUList} ${StyledListItem}:last-child {
    margin-top: 0px;
  }

  @media only screen and (min-width: 1080px) {
    ${HeaderOuterArea} & {
      display: flex;
      grid-column: span 6 / span 6;
      grid-column-start: 7;
      width: 100%;
    }

    ${HeaderOuterArea} & ${StyledUList} ${StyledListItem},
			${StyledUList} ${StyledListItem}:nth-child(3) {
      border: none;
    }

    ${HeaderOuterArea} & ${StyledUList} ${StyledListItem}:last-child {
      margin-top: 0px;
      margin-left: 12px;
    }
  }
`

export const Navigation = () => {
  const { theme } = useThemeContext()
  const { setIsVisible } = useMenuContext()

  return (
    <>
      <StyledNav className='navigation' theme={theme}>
        <StyledUList>
          <StyledListItem>
            <SecondaryLink to={'/'} onClick={() => setIsVisible(false)}>
              Inicio
            </SecondaryLink>
          </StyledListItem>
          <StyledListItem>
            <SecondaryLink to={'#'} onClick={() => setIsVisible(false)}>
              Noticias
            </SecondaryLink>
          </StyledListItem>
          <StyledListItem>
            <p>Tema: </p>
            <ThemeSelector />
          </StyledListItem>
          <StyledListItem>
            <PrimaryLink theme={theme} to={'register'} onClick={() => setIsVisible(false)}>
              Crear una cuenta
            </PrimaryLink>
          </StyledListItem>
        </StyledUList>
      </StyledNav>
    </>
  )
}
