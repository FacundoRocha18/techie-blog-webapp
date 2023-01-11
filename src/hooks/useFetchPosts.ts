import { useState, useEffect } from 'react'
import { fetchPosts } from 'services/FetchPosts'

export const useFetchPosts = () => {
	const [posts, setPosts] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetchPosts()
			.then((data) => {
				if (!data) throw new Error('No se pudo recuperar los datos')
				setPosts(data)
				setTimeout(() => setLoading(false), 2000)
			})
			.catch((err) => {
				setTimeout(() => {
					alert('Algo parece haber salido mal: \n' + err)
				}, 1000)
			})
	}, [])

	return [posts, loading] as const
}
