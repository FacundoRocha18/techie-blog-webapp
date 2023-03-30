import styled from 'styled-components'
import { ThemeSwitch, Navigation } from 'components'
import { IStyledComponent } from 'components.types'
import { useMenuContext } from 'contexts/MenuContext'
import { useThemeContext } from 'contexts/Theme/ThemeContext'

const StyledMenuContainer = styled('div')<IStyledComponent>`
  align-items: center;
  flex-direction: column;
  display: flex;
  gap: 16px;
  justify-content: space-between;
  height: 100%;
  padding: 16px;
  width: 100%;
  transition: all 0.3s ease;

  &.active .theme-toggle-container {
    opacity: 1;
    transition: all 0.3s ease;
  }

  &.inactive .theme-toggle-container {
    opacity: 0;
    transition: all 0.3s ease;
  }

  @media only screen and (min-width: 768px) {
    & {
      padding: 8px 32px;
    }
  }

  @media only screen and (min-width: 1080px) {
    & {
      display: none;
    }
  }
`

const SwitchContainer = styled('div')<IStyledComponent>`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 6px 12px;
  height: fit-content;
  opacity: 0;
  width: 100%;
  transition: all 0.1s ease;

  ${StyledMenuContainer}.active & {
    opacity: 1;
  }

  @media (min-width: 768px) {
    & {
      width: 100%;
    }
  }

  @media (min-width: 1024px) {
    & {
      display: none;
    }
  }
`

export const Menu = () => {
  const { theme } = useThemeContext()
  const { isVisible } = useMenuContext()

  return (
    <>
      <StyledMenuContainer theme={theme} className={`${isVisible ? 'active' : 'inactive'}`}>
        <Navigation />
        {/* <SwitchContainer >
					<p>Tema: </p>
					<ThemeSwitch />
				</SwitchContainer> */}
      </StyledMenuContainer>
    </>
  )
}
