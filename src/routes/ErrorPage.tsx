import { useRouteError, Link } from 'react-router-dom'

export const ErrorPage = () => {
  const error: any = useRouteError()

  return (
    <div
      id='error-page'
      className='m-auto mt-96 flex w-fit flex-col gap-5 rounded bg-slate-200 p-6 shadow-lg'
    >
      <h1>Oops!</h1>
      <p>Lo sentimos, ocurrio un error inesperado.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link className='rounded bg-emerald-500 p-2 text-center' to={'/'}>
        Volver al inicio
      </Link>
    </div>
  )
}
