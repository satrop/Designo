import { Link } from 'react-router-dom';

import FooterCard from '../Components/FooterCard';

import footerLogo from '/shared/desktop/logo-dark.png';
import socialData from './DataSocialLinks';

const Footer = () => {
	const socialLinks = socialData.map((item, idx) => {
		return (
			<li key={idx}>
				<a href={item.link} aria-label={item.title}>
					{item.icon}
				</a>
			</li>
		);
	});

	return (
		<footer className="black--bc">
			<div className="[ wrapper ] [ flow ]">
				<FooterCard />
				<div className="[ section ] [ flow ]">
					<div className="footer-logo-wrapper">
						<Link to="/" aria-label="To home page">
							<img src={footerLogo} alt="Company logo" />
						</Link>
					</div>
					<nav className="quick-links">
						<ul
							className="[ ul flex uppercase white--fc flow ]"
							data-flex-col="column">
							<li>
								<Link to="/about">Our Company</Link>
							</li>
							<li>
								<Link to="/locations">Locations</Link>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</nav>
				</div>
				<div className="[ section address ] [ flow ]">
					<address>
						<strong>Designo Central Office</strong> <br></br>
						3886 Wellington Street<br></br>
						Toronto, Ontario M9C 3J5
					</address>
					<address>
						<strong>Contact Us (Central Office)</strong>
						<br></br>P : +1 253-863-8967
						<br></br>M :{' '}
						<a href="mailto:contact@designo.co">
							contact@designo.co
						</a>
					</address>
					<nav className="social-links">
						<ul className="[ ul flex ]">{socialLinks}</ul>
					</nav>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
