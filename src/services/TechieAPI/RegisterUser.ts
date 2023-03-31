export const RegisterUser = async (
  name: string,
  username: string | null,
  email: string,
  password: string,
) => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')

  const user = JSON.stringify({
    name: name,
    email: email,
    password: password,
    address: '',
    phone: '',
    username: username,
  })

  const requestOptions = {
    method: 'POST',
    headers: headers,
    body: user,
  }

  const response = await fetch('http://localhost:8000/api/users/', requestOptions)
  console.log(await response)
}
