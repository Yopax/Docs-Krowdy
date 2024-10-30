import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Orden estructurado",
    Svg: require("@site/static/img/undraw_transparencia.svg").default,
    description: (
      <>
        La documentación organiza cada aprendizaje de forma clara, permitiendo
        una referencia rápida y sencilla.
      </>
    ),
  },
  {
    title: "Herramienta de repaso",
    Svg: require("@site/static/img/undraw_calendar.svg").default,
    description: (
      <>
        Sirve como guía para revisar y perfeccionar habilidades, con notas y
        ejemplos que refuerzan lo aprendido.
      </>
    ),
  },
  {
    title: "Registro de evolución",
    Svg: require("@site/static/img/undraw_personal.svg").default,
    description: (
      <>
        Muestra el progreso personal y profesional, destacando logros y mejoras
        continuas a lo largo del programa.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
