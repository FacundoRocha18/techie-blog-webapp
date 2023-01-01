import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Toggle } from './ToggleTheme'

export const Header = () => {
	return (
		<div className='bg-neutral-900 border-b-2 border-solid border-pink-500 flex items-center justify-between px-10 fixed top-0 left-0 w-screen max-w-full h-24'>
			<h1 className='font-medium'><Link to={'/'}>Techie</Link></h1>
			{/* <button>
				<span className='material-icons md-48'>
					menu
				</span>
			</button> */}
      <Toggle />
		</div>
	)
}

Header.propTypes = {}
