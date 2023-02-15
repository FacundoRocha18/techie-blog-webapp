import styled from "styled-components"
import { StyledContainer } from "components"
import { useMenuContext } from 'contexts/MenuContext'
import { useThemeContext } from "contexts/Theme/ThemeContext"
import { IStyledComponent } from 'components/components.types'


const StyledSpan = styled('span') <IStyledComponent>`
	background-color: var(${(props) => props.color});
	border-radius: 10px;
	display: inline-block;
	height: 2px;
	width: 20px;
`

const StyledMenuButton = styled('button') <IStyledComponent>`
	align-items: center;
	background-color: transparent;
	border: none;
	display: flex;
	flex-direction: column;
	grid-column: span 1 / span 1;
	justify-content: center;
	gap: 8px;
	height: 28px;
	width: 28px;

	@media only screen and (min-width: 768px) {
			& {
				right: 32px;
			}
		}

	&.active span:first-child {
		transform: rotateZ(-45deg) scaleX(1) translate(-2px, 4px);
		transition: all .3s ease;
	}

	&.active span:last-child {
		transform: rotateZ(45deg) scaleX(1) translate(-2px, -4px);
		transition: all .3s ease;
	}

	&.inactive span:first-child {
		transform: rotateZ(0deg) scaleX(1) translate(0px, 0px);
		transition: all .3s ease;
	}

	&.inactive span:last-child {
		transform: rotateZ(0deg) scaleX(1) translate(0px, 0px);
		transition: all .3s ease;
	}
`

export const MenuToggle = () => {

	const { theme } = useThemeContext()
	const { isVisible, setIsVisible } = useMenuContext()

	return (
		<>
			<StyledMenuButton className={isVisible ? 'active' : 'inactive'} onClick={() => setIsVisible(!isVisible)}>
				<StyledSpan color={theme.color} />
				<StyledSpan color={theme.color} />
			</StyledMenuButton>
		</>
	)
}