import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import DockerLogo from '@site/static/img/docker-logo.svg';
import KubernetesLogo from '@site/static/img/kubernetes-logo.svg';
import RancherLogo from '@site/static/img/rancher-logo.svg';
import HelmLogo from '@site/static/img/helm-logo.svg';
import ArgocdLogo from '@site/static/img/argocd-logo.svg';
import CrossplaneLogo from '@site/static/img/crossplane-logo.svg';
import GoogleCloudLogo from '@site/static/img/google-cloud-logo.svg';
import AWSLogo from '@site/static/img/aws-logo.svg';
import TerraformLogo from '@site/static/img/terraform-logo.svg';
import AnsibleLogo from '@site/static/img/ansible-logo.svg';
import GitlabLogo from '@site/static/img/gitlab-logo.svg';
import GithubLogo from '@site/static/img/github-logo.svg';
import LinuxLogo from '@site/static/img/linux-logo.svg';
import PythonLogo from '@site/static/img/python-logo.svg';
import FastAPILogo from '@site/static/img/fastapi-logo.svg';
import GolangLogo from '@site/static/img/golang-logo.svg';
import KafkaLogo from '@site/static/img/kafka-logo.svg';
import PrometheusLogo from '@site/static/img/prometheus-logo.svg';


type TechnologyItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
};

const TechnologyList: TechnologyItem[] = [
  { title: 'Docker', Svg: DockerLogo },
  { title: 'Kubernetes', Svg: KubernetesLogo },
  { title: 'Rancher', Svg: RancherLogo },
  { title: 'Helm', Svg: HelmLogo },
  { title: 'Argocd', Svg: ArgocdLogo },
  { title: 'Crossplane', Svg: CrossplaneLogo },
  { title: 'Google Cloud', Svg: GoogleCloudLogo },
  { title: 'AWS', Svg: AWSLogo },
  { title: 'Terraform', Svg: TerraformLogo },
  { title: 'Ansible', Svg: AnsibleLogo },
  { title: 'Gitlab', Svg: GitlabLogo },
  { title: 'Github', Svg: GithubLogo },
  { title: 'Linux', Svg: LinuxLogo },
  { title: 'Python', Svg: PythonLogo },
  { title: 'FastAPI', Svg: FastAPILogo },
  { title: 'Golang', Svg: GolangLogo },
  { title: 'Kafka', Svg: KafkaLogo },
  { title: 'Prometheus', Svg: PrometheusLogo },
];

function Technology({title, Svg}: TechnologyItem) {
  return (
    <div className={clsx('col col--2')}>
      <div className="text--center">
        <Svg className={styles.technologySvg} role="img" />
      </div>
      <div className={styles.technologyTitle}>
        {title}
      </div>
    </div>
  );
}

export default function HomepageTechnologies(): JSX.Element {
  return (
    <section className={styles.technologies}>
      <div className="container">
        <div className={styles.technologiesHeader}>
          <Heading as="h1">Technologies</Heading>
        </div>
        <div className="row">
          {TechnologyList.map((props, idx) => (
            <Technology key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
