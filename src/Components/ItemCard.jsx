const ItemCard = () => {
	return (
		<div className="card-items-wrapper">
			<a
				href="#nogo"
				className={`[ card card--item ] [ peach--very-light--bc radius--lg ]`}>
				<img src="/web-design/desktop/image-blogr.jpg" alt="" />
				<div className={`card__content`} data-layout="grid">
					<div className={`[ card__title ] [ peach--fc ]`}>
						<h3>Camp</h3>
					</div>
					<div className={`[ card__text ]`}>
						<p>
							Get expert training in coding, data, design, and
							digital marketing
						</p>
					</div>
				</div>
			</a>
		</div>
	);
};

export default ItemCard;
