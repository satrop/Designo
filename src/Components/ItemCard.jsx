const ItemCard = (props) => {
	return (
		<a
			href="#nogo"
			className={`[ card card--item ] [ peach--very-light--bc radius--lg ]`}>
			<img src={`./${props.area}/desktop/${props.img}.jpg`} alt="" />
			<div className={`card__content`} data-layout="grid">
				<div className={`[ card__title ] [ peach--fc ]`}>
					<h3>{props.title}</h3>
				</div>
				<div className={`[ card__text ]`}>{props.children}</div>
			</div>
		</a>
	);
};

export default ItemCard;
