import { NavLink } from 'react-router-dom';

import logo from '/logo.svg';

const Nav = () => {
	return (
        <nav>
            
			<ul>
				<li>
					<NavLink to="/" aria-label="Company logo">
						<img src={logo} alt="Logo" />
					</NavLink>
				</li>
				<li>
					<NavLink to="/about">Our Company</NavLink>
				</li>
				<li>
					<NavLink to="/locations">Locations</NavLink>
				</li>
				<li>
					<NavLink to="/contact">Contact</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
