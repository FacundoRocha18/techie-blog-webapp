import { createContextCustom } from 'hooks'
import { SignIn } from 'services/FetchSignIn'
import { ChildrenProps } from 'types'

interface IUserContext {
	signIn: Function
}


export const [useAuthContext, ContextProvider] = createContextCustom<IUserContext>()

export const AuthProvider = ({ children }: ChildrenProps) => {
  
  const providerValue: IUserContext = {
    signIn: SignIn
  }

  return <ContextProvider value={providerValue}>{children}</ContextProvider>
}