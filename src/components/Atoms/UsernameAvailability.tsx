import styled from 'styled-components'
import { useCheckUsername } from 'hooks'

const UsernameAvailability = styled('p')`
	color: ${(props) => props.color};
  grid-column: span 2 / span 2;
`

export const CheckUsername = ({ username }: { username: string}) => {
	const usernameIsAvailable = useCheckUsername(username)

	return (
		<UsernameAvailability color={usernameIsAvailable ? '#0fdd5e' : '#c52020'}>
			{
				usernameIsAvailable ?
					''
					:
					'Nombre de usuario no disponible'
			}
		</UsernameAvailability>
	)
}