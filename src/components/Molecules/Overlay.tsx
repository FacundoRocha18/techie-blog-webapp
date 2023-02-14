import { useMenuContext } from 'contexts/MenuContext'
import { ChildrenProps } from 'types'
import styled from 'styled-components'

const StyledOverlay = styled('div')`
	backdrop-filter: blur(0px);
	-webkit-backdrop-filter: blur(0px);
	height: 0px;
	position: fixed;
	top: 48px;
	overflow: hidden;
	width: 100vw;
	transition: all .5s ease;
	z-index: 100;

	&.active {
		backdrop-filter: blur(15px);
		-webkit-backdrop-filter: blur(15px);
		height: calc(100vh - 48px);
	}

	&.inactive {
		backdrop-filter: blur(0px);
		-webkit-backdrop-filter: blur(0px);
		height: 0px;
	}
`

export const Overlay = ({ children }: ChildrenProps) => {
	const { isVisible } = useMenuContext()

	return (
		<>
			<StyledOverlay className={`${isVisible ? 'active' : 'inactive'}`}>
				{
					children
				}
			</StyledOverlay>
		</>
	)
}
