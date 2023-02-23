import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';

import CTACard from '../Components/CTACard';
import ItemCard from '../Components/ItemCard';
import WelcomeCard from '../Components/WelcomeCard';

const AppDesign = () => {
	// Class name to body tag for SCSS hooks
	useEffect(() => {
		document.body.classList.add('app-design');
		return () => {
			document.body.classList.remove('app-design');
		};
	}, []);

	const area = 'app-design';

	return (
		<HelmetProvider>
			<Helmet>
				<title>Designo | App Design</title>
				<meta name="author" content="Steve Portas" />
				<meta name="description" content="Our app design" />
			</Helmet>
			<main id="main-content" className="wrapper flow">
				<WelcomeCard title={'App Design'}>
					<p>
						Our mobile designs bring intuitive digital solutions to
						your customers right at their fingertips.
					</p>
				</WelcomeCard>
				<section className="card-items-wrapper">
					<ItemCard
						area={area}
						img={'image-airfilter'}
						title={'AIRFILTER'}>
						<p>
							Solving the problem of poor indoor air quality by
							filtering the air
						</p>
					</ItemCard>
					<ItemCard area={area} img={'image-eyecam'} title={'Eyecam'}>
						<p>
							Product that lets you edit your favorite photos and
							videos at any time
						</p>
					</ItemCard>
					<ItemCard area={area} img={'image-faceit'} title={'Faceit'}>
						<p>
							Get to meet your favorite internet superstar with
							the faceit app
						</p>
					</ItemCard>
					<ItemCard area={area} img={'image-todo'} title={'Todo'}>
						<p>
							A todo app that features cloud sync with light and
							dark mode
						</p>
					</ItemCard>
					<ItemCard
						area={area}
						img={'image-loopstudios'}
						title={'Loopstudios'}>
						<p>A VR experience app made for Loopstudios</p>
					</ItemCard>
				</section>
				<section className="cta-card-wrapper">
					<div className="col">
						<CTACard
							link={'/web-design'}
							cardImage={'image-web-design-small'}
							cardTitle={'Web Design'}
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

export default AppDesign;
