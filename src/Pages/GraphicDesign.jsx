import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';

import CTACard from '../Components/CTACard';
import ItemCard from '../Components/ItemCard';
import WelcomeCard from '../Components/WelcomeCard';

const GraphicDesign = () => {
	// Class name to body tag for SCSS hooks
	useEffect(() => {
		document.body.classList.add('graphic-design');
		return () => {
			document.body.classList.remove('graphic-design');
		};
	}, []);

	const area = 'graphic-design';

	return (
		<HelmetProvider>
			<Helmet>
				<title>Designo | App Design</title>
				<meta name="author" content="Steve Portas" />
				<meta name="description" content="Our graphic design" />
			</Helmet>
			<main id="main-content" className="wrapper flow">
				<WelcomeCard title={'Graphic Design'}>
					<p>
						We deliver eye-catching branding materials that are
						tailored to meet your business objectives.
					</p>
				</WelcomeCard>
				<section className="card-items-wrapper">
					<ItemCard
						area={area}
						img={'image-change'}
						title={'TIM BROWN'}>
						<p>
							A book cover designed for Tim Brown's new release,
							'Change'
						</p>
					</ItemCard>
					<ItemCard
						area={area}
						img={'image-boxed-water'}
						title={'BOXED WATER'}>
						<p>A simple packaging concept made for Boxed Water</p>
					</ItemCard>
					<ItemCard
						area={area}
						img={'image-science'}
						title={'SCIENCE!'}>
						<p>
							A poster made in collaboration with the Federal Art
							Project
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
							link={'/web-design'}
							cardImage={'image-web-design-small'}
							cardTitle={'Web Design'}
							ariaLabel={'Hav a look at all of our Apps'}
						/>
					</div>
				</section>
			</main>
		</HelmetProvider>
	);
};

export default GraphicDesign;
