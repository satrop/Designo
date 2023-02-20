import { Link } from 'react-router-dom';

const FooterCard = () => {
	return (
		<div
			className="[ card card--footer ] [ peach--bc radius--lg ]"
			data-background="pattern--cta">
			<div className="card__content" data-layout="grid">
				<div className="[ card__title ] [ white--fc ]">
					<div className="h4">Let's talk about your project</div>
				</div>
				<div className="[ card__text ] [ white--fc ]">
					<p>
						Ready to take it to the next level? Contact us today and
						find out how our expertise can help your business grow.
					</p>
				</div>
				<Link
					to="/contact"
					className="[ button ] [ white--bc radius--sm ]">
					Get in touch
				</Link>
			</div>
		</div>
	);
};

export default FooterCard;
