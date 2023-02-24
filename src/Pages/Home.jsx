import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import CTACard from '../Components/CTACard';

import heroImage from '/home/desktop/image-hero-phone.png';
import illustrationFriendly from '/home/desktop/illustration-friendly.svg';
import illustrationPassionate from '/home/desktop/illustration-passionate.svg';
import illustrationResourceful from '/home/desktop/illustration-resourceful.svg';

const Home = () => {
	// Class name to body tag for SCSS hooks
	useEffect(() => {
		document.body.classList.add('home');
		return () => {
			document.body.classList.remove('home');
		};
	}, []);

	return (
		<HelmetProvider>
			<Helmet>
				<title>Designo | Home Page</title>
				<meta name="author" content="Steve Portas" />
				<meta
					name="description"
					content="Home page for Designo where good design meets you!"
				/>
			</Helmet>
			<main id="main-content" className="wrapper flow">
				<div className="[ card card--hero ] [ radius--lg peach--bc white--fc full-bleed ]">
					<motion.div
						className="[ text ] [ center--text ]"
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							ease: 'easeInOut',
							duration: 1,
						}}>
						<h1>
							Award-winning custom designs and digital branding
							solutions
						</h1>
						<p>
							With over 10 years in the industry, we are
							experienced in creating fully responsive websites,
							app design, and engaging brand experiences. Find out
							more about our services.
						</p>
						<Link
							to="/app-design"
							className="[ button ] [ white--bc radius--sm black--fc ]">
							Learn More
						</Link>
					</motion.div>
					<motion.img
						src={heroImage}
						alt="Hero image of phone"
						initial={{ opacity: 0, y: 100, x: -310 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							ease: 'easeInOut',
							duration: 1,
						}}
					/>
					<svg
						width="640"
						height="639"
						xmlns="http://www.w3.org/2000/svg">
						<defs>
							<linearGradient
								x1="0%"
								y1="50%"
								x2="100%"
								y2="50%"
								id="a">
								<stop
									stopColor="#5D0202"
									stopOpacity="0"
									offset="0%"
								/>
								<stop
									stopColor="#5D0202"
									stopOpacity=".498"
									offset="100%"
								/>
							</linearGradient>
						</defs>
						<circle
							fill="url(#a)"
							transform="matrix(0 -1 -1 0 640 640)"
							cx="320"
							cy="320"
							r="320"
							fillRule="evenodd"
							opacity=".309"
						/>
					</svg>
				</div>
				<motion.section
					className="cta-card-wrapper"
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						ease: 'easeInOut',
						delay: 0.75,
						duration: 1,
					}}>
					<div className="col">
						<CTACard
							link={'web-design'}
							largeImage={true}
							cardImage={'image-web-design'}
							cardTitle={'Web Design'}
							ariaLabel={'View our web design projects'}
						/>
					</div>
					<div className="col">
						<CTACard
							link={'app-design'}
							cardImage={'image-app-design'}
							cardTitle={'App Design'}
							ariaLabel={'Hav a look at all of our Apps'}
						/>
						<CTACard
							link={'/graphic-design'}
							cardImage={'image-graphic-design'}
							cardTitle={'Graphic Design'}
							ariaLabel={'View our graphic design projects'}
						/>
					</div>
				</motion.section>
				<motion.section
					className="[ card-info--wrapper ] [ flow ]"
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						ease: 'easeInOut',
						delay: 1.5,
						duration: 1,
					}}>
					<div className="[ card--info ] [ flow ]">
						<div className="card--info__image">
							<div className="circle" data-rotate="45deg"></div>
							<img src={illustrationPassionate} alt="" />
						</div>
						<div className="[ card--info__text ] [ flow ]">
							<h3>Passionate</h3>
							<p>
								Each project starts with an in-depth brand
								research to ensure we only create products that
								serve a purpose. We merge art, design, and
								technology into exciting new solutions.
							</p>
						</div>
					</div>

					<div className="[ card--info ] [ flow ]">
						<div className="card--info__image">
							<div className="circle" data-rotate="45deg"></div>
							<img src={illustrationResourceful} alt="" />
						</div>
						<div className="[ card--info__text ] [ flow ]">
							<h3>RESOURCEFUL</h3>
							<p>
								Everything that we do has a strategic purpose.
								We use an agile approach in all of our projects
								and value customer collaboration. It guarantees
								superior results that fulfill our clients'
								needs.
							</p>
						</div>
					</div>

					<div className="[ card--info ] [ flow ]">
						<div className="card--info__image">
							<div className="circle" data-rotate="45deg"></div>
							<img src={illustrationFriendly} alt="" />
						</div>
						<div className="[ card--info__text ] [ flow ]">
							<h3>FRIENDLY</h3>
							<p>
								We are a group of enthusiastic folks who know
								how to put people first. Our success depends on
								our customers, and we strive to give them the
								best experience a company can provide.
							</p>
						</div>
					</div>
				</motion.section>
			</main>
		</HelmetProvider>
	);
};

export default Home;
