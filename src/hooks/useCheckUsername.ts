import { useState, useEffect } from 'react'
import { fetchValidateUsername } from 'services/TechieAPI/FetchValidateUsername'


export const useCheckUsername = (username: string) => {

		const [usernameIsAvailable, setUsernameIsAvailable] = useState(true)
	
		useEffect(() => {
	
			handleUsernameChanged()
	
		}, [username])

		const handleUsernameChanged = async () => {

			const result = await fetchValidateUsername(username)
		
			setUsernameIsAvailable(result)
		}

		return usernameIsAvailable
	}
