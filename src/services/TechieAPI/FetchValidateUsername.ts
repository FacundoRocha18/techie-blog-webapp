export const fetchValidateUsername = async (username: string) => {
  const url = `http://localhost:8001/api/users/validateUsername?username=${username}`

  const params = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  }

  const response = await fetch(url, params)

  const { available } = await response.json()

  return available
}
