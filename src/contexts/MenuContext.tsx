/* eslint-disable @typescript-eslint/ban-types */
import { useState } from 'react'
import { createContextCustom } from 'hooks'
import { ChildrenProps } from 'shared'

interface IMenuContext {
  isVisible: boolean
  isActiveClass: string
  setIsVisible: Function
}

export const [useMenuContext, ContextProvider] = createContextCustom<IMenuContext>()

export const MenuProvider = ({ children }: ChildrenProps) => {
  const [isVisible, setIsVisible] = useState(false)

  const isActiveClass = isVisible === true ? 'active' : 'inactive'

  return (
    <ContextProvider value={{ isVisible, isActiveClass, setIsVisible }}>{children}</ContextProvider>
  )
}
