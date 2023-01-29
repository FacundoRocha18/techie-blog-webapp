import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMenuContext } from 'contexts/MenuContext'
import { StyledContainer } from 'components/Atoms/Container'
import { useThemeContext } from 'contexts/Theme/ThemeContext'
import { ChildrenProps } from 'types'

export const Overlay = ({ children }: ChildrenProps) => {
	const { isVisible, setIsVisible } = useMenuContext()
	const { theme } = useThemeContext()

	return (
		<>
			<StyledContainer id='overlay' className={`${isVisible ? 'active' : 'inactive'}`}>
				{
					children
				}
			</StyledContainer>
		</>
	)
}
