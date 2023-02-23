import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import ContentCard from '../Components/ContentCardBlock';

import illustrationUnitedKingdom from '/shared/desktop/illustration-united-kingdom.svg';
import illustrationCanada from '/shared/desktop/illustration-canada.svg';
import illustrationAustralia from '/shared/desktop/illustration-australia.svg';

const About = () => {
	// Class name to body tag for SCSS hooks
	useEffect(() => {
		document.body.classList.add('about');
		return () => {
			document.body.classList.remove('about');
		};
	}, []);

	return (
		<HelmetProvider>
			<Helmet>
				<title>Designo | About</title>
				<meta name="author" content="Steve Portas" />
				<meta
					name="description"
					content="About page for Designo where good design meets you!"
				/>
			</Helmet>
			<main id="main-content" className="wrapper flow">
				<ContentCard
					title="About Us"
					flip={true}
					dark={true}
					welcome={true}
					extraClass={'welcome'}
					cardImage={'image-about-hero'}>
					<p>
						Founded in 2010, we are a creative agency that produces
						lasting results for our clients. We've partnered with
						many startups, corporations, and nonprofits alike to
						craft designs that make real impact. We're always
						looking forward to creating brands, products, and
						digital experiences that connect with our clients'
						audiences.
					</p>
				</ContentCard>
				<ContentCard
					title="World-class talent"
					cardImage={'image-world-class-talent'}>
					<p>
						We are a crew of strategists, problem-solvers, and
						technologists. Every design is thoughtfully crafted from
						concept to launch, ensuring success in its given market.
						We are constantly updating our skills in a myriad of
						platforms.
					</p>
					<p>
						Our team is multi-disciplinary and we are not merely
						interested in form — content and meaning are just as
						important. We give great importance to craftsmanship,
						service, and prompt delivery. Clients have always been
						impressed with our high-quality outcomes that
						encapsulates their brand's story and mission.
					</p>
				</ContentCard>
				<section className="[ card-info--wrapper ] [ flow ]">
					<div className="[ card--info ] [ flow ]">
						<div className="card--info__image">
							<div className="circle" data-rotate="45deg"></div>
							<img src={illustrationCanada} alt="" />
						</div>
						<div className="[ card--info__text ] [ flow ]">
							<h3>Canada</h3>
							<Link
								to="/app-design"
								className="[ button ] [ peach--bc radius--sm white--fc ]">
								See location
							</Link>
						</div>
					</div>
					<div className="[ card--info ] [ flow ]">
						<div className="card--info__image">
							<div className="circle" data-rotate="45deg"></div>
							<img src={illustrationAustralia} alt="" />
						</div>
						<div className="[ card--info__text ] [ flow ]">
							<h3>AUSTRALIA</h3>
							<Link
								to="/app-design"
								className="[ button ] [ peach--bc radius--sm white--fc ]">
								See location
							</Link>
						</div>
					</div>
					<div className="[ card--info ] [ flow ]">
						<div className="card--info__image">
							<div className="circle" data-rotate="45deg"></div>
							<img src={illustrationUnitedKingdom} alt="" />
						</div>
						<div className="[ card--info__text ] [ flow ]">
							<h3>UNITED KINGDOM</h3>
							<Link
								to="/app-design"
								className="[ button ] [ peach--bc radius--sm white--fc ]">
								See location
							</Link>
						</div>
					</div>
				</section>
				<ContentCard
					title="The real deal"
					flip={true}
					cardImage={'image-real-deal'}>
					<p>
						As strategic partners in our clients' businesses, we are
						ready to take on any challenge as our own. Solving real
						problems require empathy and collaboration, and we
						strive to bring a fresh perspective to every
						opportunity. We make design and technology more
						accessible and give you tools to measure success.
					</p>
					<p>
						We are visual storytellers in appealing and captivating
						ways. By combining business and marketing strategies, we
						inspire audiences to take action and drive real results.
					</p>
				</ContentCard>
			</main>
		</HelmetProvider>
	);
};

export default About;
