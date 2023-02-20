const ContentCard = (props) => {
	return (
		<>
			<div
				className="[ card card--content-block ] [ peach--very-light--bc radius--lg full-bleed ]"
				data-background="pattern--three"
				data-order={props.flip == true ? 'row-reverse' : ''}>
				{/* <picture>
					<source
						srcSet="/about/desktop/image-world-class-talent.jpg"
						media="(min-width: 60rem)"
					/>
					<source
						srcSet="/about/tablet/image-world-class-talent.jpg"
						media="(min-width: 48rem)"
					/>
					<img
						src="/about/mobile/image-world-class-talent.jpg"
						alt=""
					/>
				</picture> */}

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

			{/* <div
				className="[ card card--content-block ] [ peach--very-light--bc radius--lg full-bleed ]"
				data-order="row-reverse"
				data-background="pattern--three">
				<picture>
					<source
						srcSet="/about/desktop/image-world-class-talent.jpg"
						media="(min-width: 60rem)"
					/>
					<source
						srcSet="/about/tablet/image-world-class-talent.jpg"
						media="(min-width: 48rem)"
					/>
					<img
						src="/about/mobile/image-world-class-talent.jpg"
						alt=""
					/>
				</picture>

				<div className="card__content" data-layout="grid">
					<div className="[ card__title ] [ peach--fc ]">
						<h2>World-class talent</h2>
					</div>
					<div className="[ card__text ]">
						<p>
							We are a crew of strategists, problem-solvers, and
							technologists. Every design is thoughtfully crafted
							from concept to launch, ensuring success in its
							given market. We are constantly updating our skills
							in a myriad of platforms.
						</p>
						<p>
							Our team is multi-disciplinary and we are not merely
							interested in form — content and meaning are just as
							important. We give great importance to
							craftsmanship, service, and prompt delivery. Clients
							have always been impressed with our high-quality
							outcomes that encapsulates their brand's story and
							mission.
						</p>
					</div>
				</div>
			</div> */}
		</>
	);
};

export default ContentCard;
