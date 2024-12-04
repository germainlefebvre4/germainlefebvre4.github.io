import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import GithubLogo from '@site/static/img/github-logo.svg';
import ReadthedocsLogo from '@site/static/img/readthedocs-logo.svg';

type ProjectItem = {
  title: string;
  image: string;
  description: JSX.Element;
  github: string;
  docs: string;
};

const ProjectList: ProjectItem[] = [
  {
    title: 'Libtado',
    image: 'img/libtado-logo.webp',
    description: (
      <>
        Libtado est une librairie Python qui permet de piloter les thermostats connectés Tado depuis le code ou en CLI.
      </>
    ),
    github: 'https://github.com/germainlefebvre4/libtado',
    docs: 'https://libtado.readthedocs.io',
  },
  {
    title: 'Crossplane Assistant',
    image: 'img/crossplane-assistant-logo.webp',
    description: (
      <>
        Crossplane Assistant est une interface graphique qui aide au debug et au développement de Compositions Crossplane.
      </>
    ),
    github: 'https://github.com/crossplane-assistant/crossplane-assistant',
    docs: 'https://crossplane-assistant.readthedocs.io',
  },
];

function Project({title, image, description, github, docs}: ProjectItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <img src={image} alt={title} className={styles.projectSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>

      <div className={styles.projectLinkContainer}>
        <div className={clsx('col col--4')}>
        <a href={github} target="_blank" className={styles.projectLink}>
        <GithubLogo className={styles.projectLinkSvg} />
            Github
          </a>
        </div>
        <div className={clsx('col col--4')}>
          <a href={docs} target="_blank" className={styles.projectLink}>
            <ReadthedocsLogo className={styles.projectLinkSvg} />
            Docs
          </a>
        </div>
      </div>
    </div>
  );
}

export default function HomepageProjects(): JSX.Element {
  return (
    <section className={styles.projects}>
      <div className="container">
        <div className={styles.projectsHeader}>
          <Heading as="h1">Open Source Projects</Heading>
        </div>
        <div className="row">
          {ProjectList.map((props, idx) => (
            <Project key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
