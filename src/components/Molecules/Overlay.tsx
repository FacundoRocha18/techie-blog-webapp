import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMenuContext } from 'contexts/MenuContext'
import { StyledContainer } from 'components/Atoms/Container'
import { useThemeContext } from 'contexts/Theme/ThemeContext'
import { ChildrenProps } from 'types'
import styled from 'styled-components'

const StyledOverlay = styled('div')`
	height: 0px;
	position: fixed;
	top: 48px;
	overflow: hidden;
	width: 100vw;
	transition: height .5s ease;
	z-index: 100;

	&.active {
		height: calc(100vh - 48px);
	}

	&.inactive {
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
