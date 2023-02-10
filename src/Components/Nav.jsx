import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

import logo from '/logo.svg';

import '../SCSS/blocks/_nav--mobile.scss';
import '../SCSS/blocks/_nav--desktop.scss';

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const menuToggle = () => {
		setIsOpen(!isOpen);
	};

	const dropIn = {
		hidden: {
			y: '-100%',
		},
		visible: {
			y: '0',
			opacity: 1,
		},
		exit: {
			y: '-100%',
			opacity: 0,
		},
	};

	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		document.addEventListener('scroll', () => {
			const scrollCheck = window.scrollY >= 162;
			if (scrollCheck !== scroll) {
				setScroll(scrollCheck);
			}
		});
	});

	return (
		<nav>
			<div className={`[ mobile-controls ] [ flex d-none--md ]`}>
				<Link to="/" aria-label="Company logo" className="d-none--md">
					<img src={logo} alt="Logo" />
				</Link>
				<button
					className="menu-button"
					aria-controls="main-ul"
					aria-label="Open menu"
					aria-expanded={isOpen ? 'true' : 'false'}
					onClick={menuToggle}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>
			<AnimatePresence initial={false} onExitComplete={() => null}>
				{isOpen && (
					<motion.ul
						class={`[ main-ul--mobile ] [ d-none--md ]`}
						data-state={isOpen ? 'open' : 'closed'}
						variants={dropIn}
						initial="hidden"
						animate="visible"
						exit="exit">
						<li>
							<NavLink to="/about" onClick={menuToggle}>
								Our Company
							</NavLink>
						</li>
						<li>
							<NavLink to="/locations" onClick={menuToggle}>
								Locations
							</NavLink>
						</li>
						<li>
							<NavLink to="/contact" onClick={menuToggle}>
								Contact
							</NavLink>
						</li>
					</motion.ul>
				)}
			</AnimatePresence>
			{isOpen && <div className="fade" onClick={menuToggle}></div>}
			<ul className="main-ul--desktop">
				<div
					className="wrapper flex"
					data-scrolled={`${scroll ? 'scrolled' : ''}`}>
					<li>
						<NavLink to="/" aria-label="Company logo">
							<img src={logo} alt="Logo" />
						</NavLink>
					</li>
					<li>
						<NavLink to="/about" onClick={menuToggle}>
							Our Company
						</NavLink>
					</li>
					<li>
						<NavLink to="/locations" onClick={menuToggle}>
							Locations
						</NavLink>
					</li>
					<li>
						<NavLink to="/contact" onClick={menuToggle}>
							Contact
						</NavLink>
					</li>
				</div>
			</ul>
		</nav>
	);
};

export default Nav;
