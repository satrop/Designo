const Home = () => {
	return (
		<main className="flow">
			<div className="wrapper">
				<div className="d-none d-block--md">Show md up</div>
				<div className="d-none d-block--lg">Show lg up</div>
				<div className="d-none--md">Hide from md up</div>
				<div className="d-none--lg">Hide from lg up</div>
			</div>
		</main>
	);
};

export default Home;
