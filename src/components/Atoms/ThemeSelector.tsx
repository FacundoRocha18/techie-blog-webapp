import styled from 'styled-components'
import { useThemeContext } from 'contexts/Theme/ThemeContext'
import { IStyledComponent } from 'components.types'
import { ThemeProps } from 'types'

const StyledSelector = styled('select')<IStyledComponent>`
  background-color: var(${({ theme }: ThemeProps) => theme.card});
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  font-size: var(--body-text);
  padding: 8px;
  min-height: 30px;
  width: fit-content;
`

export const ThemeSelector = () => {
  const { theme, themeName, changeTheme } = useThemeContext()

  return (
    <>
      <StyledSelector
        theme={theme}
        name='theme-select'
        id='theme-select'
        defaultValue={themeName}
        onChange={(e) => changeTheme(e.target.value)}
        title='Seleccionar un tema'
      >
        <option value='light' title='Tema claro'>
          &#127774;
        </option>
        <option value='dark' title='Tema oscuro'>
          &#127771;
        </option>
      </StyledSelector>
    </>
  )
}
