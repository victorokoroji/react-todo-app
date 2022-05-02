import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
	const links = [
		{
			id: 1,
			path: '/',
			text: 'Home',
		},
		{
			id: 2,
			path: '/about',
			text: 'About',
		},
	]

  const [navbarOpen, setNavbarOpen] = useState(false)
  
  const handleToggle = () => {
		setNavbarOpen(prevState => !prevState)
	}

	return (
		<nav className='navBar'>
			<Button type='button' onClick={handleToggle}>
				{navbarOpen ? 'Close' : 'Open'}
			</Button>
			<ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
				{links.map(link => {
					return (
						<li key={link.id}>
							<NavLink to={link.path} activeClassName='active-link' exact>
								{link.text}
							</NavLink>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
export default Navbar
