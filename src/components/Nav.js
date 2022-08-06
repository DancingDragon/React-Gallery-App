import React from 'react';
import {
	NavLink
} from 'react-router-dom'

class Nav extends React.Component {
	render() {
		return (
			<nav className="main-nav">
				<ul>
					<li><NavLink to="/search/cats" activeclassname="active">Cats</NavLink></li>
					<li><NavLink to="/search/dogs" activeclassname="active">Dogs</NavLink></li>
					<li><NavLink to="/search/computers" activeclassname="active">Computers</NavLink></li>
				</ul>
			</nav>
		);
	}
}

export default Nav;