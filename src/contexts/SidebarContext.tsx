import React, { useState } from 'react'
import { createContextCustom } from 'hooks'

interface ISidebarContext {
  isVisible: boolean
  setIsVisible: Function
}

interface Props {
  children: React.ReactNode
}

export const [useSidebarContext, ContextProvider] = createContextCustom<ISidebarContext>()

export const SidebarProvider = ({ children }: Props) => {
  const [isVisible, setIsVisible] = useState(false)

  return <ContextProvider value={{ isVisible, setIsVisible }}>{children}</ContextProvider>
}
