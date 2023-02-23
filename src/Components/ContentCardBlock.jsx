const ContentCard = (props) => {
	return (
		<div
			className={`
				[ card card--content-block ${props.extraClass} ] [ ${
				props.dark === true ? 'peach--bc' : 'peach--very-light--bc'
			} radius--lg full-bleed ] `}
			data-background={
				props.welcome === true ? 'pattern--welcome' : 'pattern--three'
			}
			data-order={props.flip == true ? 'row-reverse' : ''}>
			<picture>
				<source
					srcSet={`./about/desktop/${props.cardImage}.jpg`}
					media="(min-width: 60rem)"
				/>
				<source
					srcSet={`./about/tablet/${props.cardImage}.jpg`}
					media="(min-width: 48rem)"
				/>
				<img src={`./about/mobile/${props.cardImage}.jpg`} alt="" />
			</picture>

			<div className="card__content" data-layout="grid">
				<div className="[ card__title ] [ peach--fc ]">
					<h2>{props.title}</h2>
				</div>
				<div className="[ card__text ]">{props.children}</div>
			</div>
		</div>
	);
};

export default ContentCard;
