import { createContextCustom } from 'hooks'
import { RegisterUser } from 'services/TechieAPI/RegisterUser'
import { ChildrenProps } from 'types'

interface IUserContext {
  signIn: Function
}

export const [useAuthContext, ContextProvider] = createContextCustom<IUserContext>()

export const AuthProvider = ({ children }: ChildrenProps) => {
  const providerValue: IUserContext = {
    signIn: RegisterUser,
  }

  return <ContextProvider value={providerValue}>{children}</ContextProvider>
}
