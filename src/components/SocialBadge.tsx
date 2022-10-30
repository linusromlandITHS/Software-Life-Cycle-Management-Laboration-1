// Social Icon Import
import GithubLogo from '../assets/github.svg';
import GitLabLogo from '../assets/gitlab.svg';
import LinkedInLogo from '../assets/linkedin.svg';

//Internal imports
import './SocialBadge.css';

type socials = 'github' | 'gitlab' | 'linkedin';

export default function SocialBadge(props: {
	social: socials;
	alt?: string;
	url: string;
	name?: string;
	description?: string;
}) {
	const { social, alt, url, name, description } = props;
	let logo: string = '';

	if (social === 'github') {
		logo = GithubLogo;
	} else if (social === 'gitlab') {
		logo = GitLabLogo;
	} else if (social === 'linkedin') {
		logo = LinkedInLogo;
	}

	return (
		<a href={url} target="_blank" rel="noopener noreferrer">
			<img src={logo} alt={alt ? alt : `Linus ${social} profile`} />
			<div>
				{name ? <p id="name">{name}</p> : null}
				{description ? <p id="desc">{description}</p> : null}
			</div>
		</a>
	);
}
