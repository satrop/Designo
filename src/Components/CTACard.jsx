const CTACard = (props) => {
	return (
		<a
			href="#nogo"
			className="[ card card--cta ] [ radius--lg ]"
			aria-label={`${props.ariaLabel}`}>
			<picture>
				<source
					srcSet={`./home/desktop/${props.cardImage}${
						props.largeImage == true ? '-large' : ''
					}.jpg`}
					media="(min-width: 60rem)"
				/>
				<source
					srcSet={`./home/tablet/${props.cardImage}.jpg`}
					media="(min-width: 48rem)"
				/>
				<img src={`./home/mobile/${props.cardImage}.jpg`} alt="" />
			</picture>
			<div className="[ card__content ] [ white--fc uppercase flow ]">
				<div className="[ card__title ]">
					<h2>{props.cardTitle}</h2>
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
	);
};

export default CTACard;
