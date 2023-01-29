import { useRouteError } from 'react-router-dom'
import { StyledPrimLink } from 'components'
import { useThemeContext } from 'contexts/Theme/ThemeContext'

export const ErrorPage = () => {
  const error: any = useRouteError()

  const { theme } = useThemeContext()

  return (
    <div
      id='error-page'
      className={`${theme.background} ${theme.fontColor} m-auto mt-96 flex w-fit flex-col gap-5 rounded border-2 border-solid border-gray-800 p-4`}
    >
      <h1>Oops!</h1>
      <p>Lo sentimos, ocurrio un error inesperado.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <StyledPrimLink path='/' text='Volver al inicio' />
    </div>
  )
}
