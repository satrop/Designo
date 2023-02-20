import { HashLink } from 'react-router-hash-link';
const SkipTo = () => {
	return (
		<HashLink
			className="[ skip-to button ] [ peach--bc white--fc radius--sm ]"
			to="#main-content">
			Skip to main content
		</HashLink>
	);
};

export default SkipTo;
