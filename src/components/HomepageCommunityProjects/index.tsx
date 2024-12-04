import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type ProjectItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const ProjectList: ProjectItem[] = [
  {
    title: 'Libtado',
    image: 'img/libtado-logo.webp',
    description: (
      <>
        Libtado est une librairie Python qui permet de piloter les thermostats connectés Tado.
      </>
    ),
  },
  {
    title: 'Crossplane Assistant',
    image: 'img/crossplane-assistant-logo.webp',
    description: (
      <>
        Crossplane Assistant est une interface graphique qui aide au debug et au développement de Compositions Crossplane.
      </>
    ),
  },
];

function Project({title, image, description}: ProjectItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} alt={title} className={styles.projectSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
