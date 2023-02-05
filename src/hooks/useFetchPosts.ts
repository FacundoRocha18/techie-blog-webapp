import { useState, useEffect, useRef } from 'react'
import { fetchPosts } from 'services/TechieAPI/FetchPosts'
import { fetchPostsFromSupabase } from 'services/SupabaseAPI/FetchPostsFromSupabase'
import { IPost } from 'types'

export const useFetchPosts = () => {
	const [posts, setPosts] = useState<IPost[]>([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('Sin errores')

	const getPosts = async () => {
		try {
			setLoading(true)
			const data = await fetchPostsFromSupabase()
			
			if (!data) throw new Error('No se pudo recuperar los datos')

			setPosts(data)
		} catch (err: any) {
			setError(err.message)
			alert('Algo parece haber salido mal: \n' + err)
		} finally {
			setLoading(false)
		}
	}

	const shouldFetch = useRef(true)
	useEffect(() => {
		if (shouldFetch.current) {
			getPosts()
		}
	}, [])

	return [posts, loading] as const
} 
