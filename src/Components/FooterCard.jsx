const FooterCard = () => {
	return (
		<div
			className={`[ card card--footer ] [ peach--bc radius--lg ]`}
			data-background="pattern--cta">
			<div className={`card__content`} data-layout="grid">
				<div className={`[ card__title ] [ white--fc ]`}>
					<h4>Let's talk about your project</h4>
				</div>
				<div className={`[ card__text ] [ white--fc ]`}>
					<p>
						Ready to take it to the next level? Contact us today and
						find out how our expertise can help your business grow.
					</p>
				</div>
				<a
					href="#nogo"
					className={`[ button ] [ white--bc radius--sm ]`}>
					Get in touch
				</a>
			</div>
		</div>
	);
};

export default FooterCard;
