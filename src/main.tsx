import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { News, Post, Register } from 'components'
import { ThemeProvider } from 'contexts/ThemeContext'
import { Root, ErrorPage } from 'router'

import 'styles/index.css'
import 'styles/variables.css'
import 'styles/input.css'
import 'styles/material-icons-config.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <News />,
      },
      {
        path: '/post/:id',
        element: <Post />,
      },
			{
				path: 'register',
				element: <Register />
			}
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
