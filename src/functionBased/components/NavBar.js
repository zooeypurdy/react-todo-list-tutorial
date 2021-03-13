import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

const NavBar = () => {
	
	const links = [
		{
			id: "1",
			path: "/",
			name: "Home"
		},
		{
			id: "2",
			path: "/about",
			name: "About"
		}
	]
	const [NavBarOpen, setNavBarOpen] = useState(false)
	
	const handleToggle = () => {
		setNavBarOpen(prev => !prev)
	}
	
	const closeMenu = () => {
		setNavBarOpen(false)
	}


	return (

		<nav className="navBar">
			<button onClick={handleToggle}>
				{NavBarOpen ? 
					(<MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />) : 
					(<FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />)
				}
			</button>
			<ul className={`menuNav ${NavBarOpen ? " showMenu" : ""}`} >
				{links.map(link => {
					return (
					<li key={link.id}>
						<NavLink to={link.path} onClick={() => closeMenu()} activeClassName="active-link" exact>{link.name}</NavLink>
					</li>
					)
				})}
			</ul>
		</nav>

	)
}

export default NavBar