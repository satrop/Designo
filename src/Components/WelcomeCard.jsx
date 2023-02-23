const WelcomeCard = (props) => {
	return (
		<div
			className="[ card welcome-card ] [ peach--bc white--fc center--text radius--lg flow full-bleed ]"
			data-background="pattern--welcome">
			<h1>{props.title}</h1>
			{props.children}
		</div>
	);
};

export default WelcomeCard;
