import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';

import CTACard from '../Components/CTACard';
import ItemCard from '../Components/ItemCard';
import WelcomeCard from '../Components/WelcomeCard';

const WebDesign = () => {
	// Class name to body tag for SCSS hooks
	useEffect(() => {
		document.body.classList.add('web-design');
		return () => {
			document.body.classList.remove('web-design');
		};
	}, []);

	const area = "web-design"

	return (
		<HelmetProvider>
			<Helmet>
				<title>Designo | Web Design</title>
				<meta name="author" content="Steve Portas" />
				<meta name="description" content="Our web design" />
			</Helmet>
			<main id="main-content" className="wrapper flow">
				<WelcomeCard title={'Web Design'}>
					<p>
						We build websites that serve as powerful marketing tools
						and bring memorable brand experiences.
					</p>
				</WelcomeCard>
				<section className="card-items-wrapper">
					<ItemCard area={area} img={'image-express'} title={'EXPRESS'}>
						<p>
							A multi-carrier shipping website for ecommerce
							businesses
						</p>
					</ItemCard>
					<ItemCard area={area} img={'image-transfer'} title={'TRANSFER'}>
						<p>
							Site for low-cost money transfers and sending money
							within seconds
						</p>
					</ItemCard>
					<ItemCard area={area} img={'image-photon'} title={'PHOTON'}>
						<p>
							A state-of-the-art music player with high-resolution
							audio and DSP effects
						</p>
					</ItemCard>
					<ItemCard area={area} img={'image-builder'} title={'BUILDER'}>
						<p>
							Connects users with local contractors based on their
							location
						</p>
					</ItemCard>
					<ItemCard area={area} img={'image-blogr'} title={'BLOGR'}>
						<p>
							Blogr is a platform for creating an online blog or
							publication
						</p>
					</ItemCard>
					<ItemCard area={area} img={'image-camp'} title={'CAMP'}>
						<p>
							Get expert training in coding, data, design, and
							digital marketing
						</p>
					</ItemCard>
				</section>
				<section className="cta-card-wrapper">
					<div className="col">
						<CTACard
							link={'/app-design'}
							cardImage={'image-app-design'}
							cardTitle={'App Design'}
							ariaLabel={'Hav a look at all of our Apps'}
						/>
					</div>
					<div className="col">
						<CTACard
							link={'/graphic-design'}
							cardImage={'image-graphic-design'}
							cardTitle={'Graphic Design'}
							ariaLabel={'View our graphic design projects'}
						/>
					</div>
				</section>
			</main>
		</HelmetProvider>
	);
};

export default WebDesign;
