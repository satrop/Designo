import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import pin from '/shared/pin.svg';

const Locations = () => {
	// Class name to body tag for SCSS hooks
	useEffect(() => {
		document.body.classList.add('locations');
		return () => {
			document.body.classList.remove('locations');
		};
	}, []);

	//Map Settings
	const defaultZoom = [17];
	const defaultScroll = false;

	const canada = [43.64407062594163, -79.3945447653617];
	const canadaCenter = [43.64407062594163, -79.3945447653617];

	const australia = [-30.329213272592494, 149.78815406848258];
	const australiaCenter = [-30.329213272592494, 149.78815406848258];
	const australiaZoom = [13];

	const england = [51.72794620179462, -3.8604607297099958];
	const englandCenter = [51.72794620179462, -3.8604607297099958];

	const mapPin = new L.Icon({
		iconUrl: `${pin}`,
		iconSize: [30, 30],
	});

	return (
		<HelmetProvider>
			<Helmet>
				<title>Designo | Locations Page</title>
				<meta name="author" content="Steve Portas" />
				<meta name="description" content="Come visit us!" />
			</Helmet>
			<main id="main-content" className="wrapper flow">
				<div className="location">
					<MapContainer
						center={canadaCenter}
						zoom={defaultZoom}
						scrollWheelZoom={defaultScroll}
						className="[ map ] [ radius--lg full-bleed ]">
						<TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}@2x.png?api_key=aedb726c-c2ba-4d30-bc53-dfeac925f76b" />
						<Marker position={canada} icon={mapPin}></Marker>
					</MapContainer>
					<div
						className="[ card location__info ] [ radius--lg full-bleed peach--very-light--bc ]"
						data-background="pattern--three">
						<h2 className="peach--fc">Canada</h2>
						<address className="flow">
							<div className="col">
								<strong>Designo Central Office</strong>
								<br />
								3886 Wellington Street
								<br />
								Toronto, Ontario M9C 3J5
							</div>
							<div className="col">
								<strong>Contact</strong>
								<br />
								P : +1 253-863-8967
								<br />M :{' '}
								<a href="mailto:contact@designo.co">
									{' '}
									contact@designo.co
								</a>
							</div>
						</address>
					</div>
				</div>
				<div className="location flip">
					<MapContainer
						center={australiaCenter}
						zoom={australiaZoom}
						scrollWheelZoom={defaultScroll}
						className="[ map ] [ radius--lg full-bleed ]">
						<TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}@2x.png?api_key=aedb726c-c2ba-4d30-bc53-dfeac925f76b" />
						<Marker position={australia} icon={mapPin}></Marker>
					</MapContainer>
					<div
						className="[ card location__info ] [ radius--lg full-bleed peach--very-light--bc ]"
						data-background="pattern--three">
						<h2 className="peach--fc">Australia</h2>
						<address className="flow">
							<div className="col">
								<strong>Designo AU Office</strong>
								<br />
								19 Balonne Street
								<br />
								New South Wales 2443
							</div>
							<div className="col">
								<strong>Contact</strong>
								<br />
								P : (02) 6720 9092
								<br />M :{' '}
								<a href="mailto:contact@designo.au">
									{' '}
									contact@designo.au
								</a>
							</div>
						</address>
					</div>
				</div>
				<div className="location">
					<MapContainer
						center={englandCenter}
						zoom={defaultZoom}
						scrollWheelZoom={defaultScroll}
						className="[ map ] [ radius--lg full-bleed ]">
						<TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}@2x.png?api_key=aedb726c-c2ba-4d30-bc53-dfeac925f76b" />
						<Marker position={england} icon={mapPin}></Marker>
					</MapContainer>
					<div
						className="[ card location__info ] [ radius--lg full-bleed peach--very-light--bc ]"
						data-background="pattern--three">
						<h2 className="peach--fc">United Kingdom</h2>
						<address className="flow">
							<div className="col">
								<strong>Designo UK Office</strong>
								<br />
								13 Colorado Way
								<br />
								Rhyd-y-fro SA8 9GA
							</div>
							<div className="col">
								<strong>Contact</strong>
								<br />
								P : 078 3115 1400
								<br />M :{' '}
								<a href="mailto:contact@designo.uk">
									{' '}
									contact@designo.uk
								</a>
							</div>
						</address>
					</div>
				</div>
			</main>
		</HelmetProvider>
	);
};

export default Locations;
