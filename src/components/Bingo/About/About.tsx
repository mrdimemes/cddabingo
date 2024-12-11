
import { useState } from "react";

import { ABOUT } from "src/bingoConfig";

import styles from "./About.module.sass";


const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <section className={styles.About}>
      <h1 onClick={() => setIsVisible(!isVisible)}>Об ивенте</h1>
      {
        isVisible &&
        <p>{ABOUT}</p>
      }
    </section>
  );
};


export default About;
