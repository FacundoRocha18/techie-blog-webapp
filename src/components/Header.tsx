import { Toggle } from 'components'

export const Header = () => {
  return (
    <div className='fixed top-0 left-0 z-50 flex h-20 w-full items-center justify-end bg-indigo-500 p-4'>
      <Toggle />
    </div>
  )
}
