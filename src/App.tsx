import reactLogo from './assets/react.svg'
import tailwindLogo from './assets/tailwindcss.svg'
import reactRouterLogo from './assets/react-router-mark-color.svg'
import typescriptLogo from './assets/typescript.svg'
import prettierLogo from './assets/prettier.svg'
import eslintLogo from './assets/eslint-icon.svg'
import jestLogo from './assets/jest-svgrepo-com.svg'
import netlifyLogo from './assets/netlify-icon.svg'
import githubLogoWhite from './assets/github-mark-white.svg'
import githubLogoDark from './assets/github-mark.svg'
import './App.css'

import { useThemeContext } from 'contexts'

export const App = () => {
  const { theme, themeName } = useThemeContext()

  return (
    <div className={`${theme.background} ${theme.fontColor}`} id='container'>
      <div className='mt-20 flex flex-col gap-20'>
        <h1>
          This is a React template created by{' '}
          <a
            className='text-yellow-400 hover:text-yellow-500'
            href='https://github.com/FacundoRocha18'
            target='_blank'
            rel='noreferrer'
            title='Go to Facundo´s GitHub'
          >
            Facundo Rocha
          </a>
        </h1>
        <div className='flex justify-around' id='icons-grid'>
          <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
            <img src='/vite.svg' className='logo' id='vite' alt='Vite logo' />
          </a>
          <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
            <img src={reactLogo} className='logo' id='react' alt='React logo' />
          </a>
          <a href='https://www.typescriptlang.org/' target='_blank' rel='noreferrer'>
            <img src={typescriptLogo} className='logo' id='ts' alt='TypeScript logo' />
          </a>
          <a href='https://tailwindcss.com' target='_blank' rel='noreferrer'>
            <img src={tailwindLogo} className='logo' id='tailwind' alt='TailwindCSS logo' />
          </a>
          <a href='https://reactrouter.com' target='_blank' rel='noreferrer'>
            <img src={reactRouterLogo} className='logo' id='router' alt='React Router logo' />
          </a>
          <a href='https://prettier.io/' target='_blank' rel='noreferrer'>
            <img src={prettierLogo} className='logo' id='prettier' alt='Prettier logo' />
          </a>
          <a href='https://eslint.org/' target='_blank' rel='noreferrer'>
            <img src={eslintLogo} className='logo' id='eslint' alt='ESLint logo' />
          </a>
          <a href='https://jestjs.io/' target='_blank' rel='noreferrer'>
            <img src={jestLogo} className='logo' id='jest' alt='Jest logo' />
          </a>
          <a href='https://docs.netlify.com/cli/get-started/' target='_blank' rel='noreferrer'>
            <img src={netlifyLogo} className='logo' id='netlify' alt='Netlify logo' />
          </a>
        </div>
        <div className='flex flex-col items-center justify-center gap-12'>
          <h2>
            Vite + React + TypeScript + TailwindCSS + React Router + Prettier + ESLint + Jest +
            Netlify
          </h2>

          <p
            className={`read-the-docs ${theme.fontColor} transition-colors duration-150 ease-linear`}
          >
            Click on the icons to learn more in the official docs
          </p>
          <img
            className='transition-all duration-150 ease-linear'
            src={themeName === 'light' ? githubLogoDark : githubLogoWhite}
            alt='Github logo'
          />
          <a
            className='w-fit rounded bg-yellow-400 p-2 font-medium text-slate-800 transition-colors duration-300 ease-linear hover:bg-yellow-500'
            href='https://github.com/FacundoRocha18/app-template'
            target='_blank'
          >
            Check the GitHub repo :)
          </a>
        </div>
      </div>
    </div>
  )
}
