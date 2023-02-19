const CTACard = () => {
	return (
		<>
			<a href="#nogo" className="[ card card--cta ] [ radius--lg ]">
				<picture>
					<source
						srcSet="/home/desktop/image-web-design-large.jpg"
						media="(min-width: 60rem)"
					/>
					<source
						srcSet="/home/tablet/image-web-design.jpg"
						media="(min-width: 48rem)"
					/>
					<img src="/home/mobile/image-web-design.jpg" alt="" />
				</picture>
				<div className="[ card__content ] [ white--fc uppercase flow ]">
					<div className="[ card__title ]">
						<h2>Card Title</h2>
					</div>
					<div className="card__text">
						<h3>View Projects</h3>
						<svg
							width="5"
							height="10"
							viewBox="0 0 5 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								id="Path 5"
								d="M1 1L5 5L1 9"
								stroke="#E7816B"
								strokeWidth="2"
							/>
						</svg>
					</div>
				</div>
			</a>

			<a href="#nogo" className="[ card card--cta ] [ radius--lg ]">
				<picture>
					<source
						srcSet="/home/desktop/image-app-design.jpg"
						media="(min-width: 60rem)"
					/>
					<source
						srcSet="/home/tablet/image-app-design.jpg"
						media="(min-width: 48rem)"
					/>
					<img src="/home/mobile/image-app-design.jpg" alt="" />
				</picture>
				<div className="[ card__content ] [ white--fc uppercase flow ]">
					<div className="[ card__title ]">
						<h2>Card Title</h2>
					</div>
					<div className="card__text">
						<h3>View Projects</h3>
						<svg
							width="5"
							height="10"
							viewBox="0 0 5 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								id="Path 5"
								d="M1 1L5 5L1 9"
								stroke="#E7816B"
								strokeWidth="2"
							/>
						</svg>
					</div>
				</div>
			</a>
		</>
	);
};

export default CTACard;
