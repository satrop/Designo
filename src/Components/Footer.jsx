const Footer = () => {
	return (
		<footer>
			<div className="wrapper flow">
				<div className={`[ card ] [ peach--bc radius--lg ]`}>
                    <div className={`[ card__content ] [ flow ]`} data-layout='grid'>
						<div className={`[ card__title ] [ white--fc ]`}>
							<h4>Card title</h4>
						</div>
						<div className={`[ card__text ] [ white--fc ]`}>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Voluptatibus est velit
								dignissimos.
							</p>
						</div>
						<a
							href="#nogo"
							className={`[ button ] [ white--bc radius--sm ]`}>
							Button
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
