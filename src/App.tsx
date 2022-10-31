//Internal imports
import './App.css';
import iSocials from './interfaces/Socials';
import SocialBadge from './components/SocialBadge';
import { version } from '../package.json';

function App() {
	const socials: iSocials[] = [
		{
			social: 'github',
			alt: 'Linus Github profile',
			url: 'https://github.com/linusromland',
			name: 'Github profile',
			description: 'My personal Github profile. Here you can find all projects that i work on or are semi-active on.'
		},
		{
			social: 'github',
			alt: "Linus IT-Högskolan's Github profile",
			url: 'https://github.com/linusromlandITHS',
			name: 'Github profile for IT-Högskolan',
			description: 'This is my Github profile for IT-Högskolan projects. Everything i have done for school is here.'
		},
		{
			social: 'github',
			alt: 'Linus Archives Github profile',
			url: 'https://github.com/linusromlandArchives',
			name: 'Github profile for my archived projects',
			description:
				'This is my Github profile for my archived projects. Here you can find projects that are no longer maintained, projects that i did not finish or projects that i have decided to archive for any other reason.'
		},
		{
			social: 'gitlab',
			alt: 'Linus GitLab profile',
			url: 'https://gitlab.com/linusromland',
			name: 'GitLab profile',
			description: 'This is primarily used for work in private repositories. Therefor it is pretty empty.'
		},
		{
			social: 'linkedin',
			alt: 'Linus LinkedIn profile',
			url: 'https://www.linkedin.com/in/linusromland/',
			name: 'LinkedIn profile',
			description: 'Feel free to connect with me!'
		}
	];

	return (
		<>
			<h1>
				Hi there
				<span role="img" aria-label="waving hand">
					👋
				</span>
			</h1>
			<p>I am Linus Romland, a JavaScript student at IT-Högskolan and a full-stack developer at Plejd AB.</p>
			<p id="socials">Check out my socials:</p>
			<div className="socials">
				{socials.map((social: iSocials, index: number) => (
					<SocialBadge
						key={index}
						social={social.social}
						alt={social.alt}
						url={social.url}
						name={social.name}
						description={social.description}
					/>
				))}
			</div>
			<p id="version">Version {version}</p>
		</>
	);
}

export default App;
