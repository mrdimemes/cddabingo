
import { useState } from "react";

import { RULES } from "src/bingoConfig";

import styles from "./Rules.module.sass";


const Rules = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <section className={styles.Rules}>
      <h1 onClick={() => setIsVisible(!isVisible)}>Правила</h1>
      {
        isVisible &&
        <ul>
          {
            RULES.map(rule => <li>{rule}</li>)
          }
        </ul>
      }
    </section>
  );
};


export default Rules;
