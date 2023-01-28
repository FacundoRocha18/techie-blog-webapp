import React, { useState } from 'react'
import { createContextCustom } from 'hooks'

interface IMenuContext {
  isVisible: boolean
  setIsVisible: Function
}

interface Props {
  children: React.ReactNode
}

export const [useMenuContext, ContextProvider] = createContextCustom<IMenuContext>()

export const MenuProvider = ({ children }: Props) => {
  const [isVisible, setIsVisible] = useState(false)

  return <ContextProvider value={{ isVisible, setIsVisible }}>{children}</ContextProvider>
}
