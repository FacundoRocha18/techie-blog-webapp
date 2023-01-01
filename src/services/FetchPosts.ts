export const fetchPosts = async () => {
	const url = 'http://localhost:8000/api/posts'

	const params = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
	}

	const response = await fetch(url, params)

	const { data } = await response.json()

	return data
}