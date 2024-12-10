import styles from "./Card.module.sass";

import type { Props } from "./types";


const Card = ({ task, toggle, select }: Props) => {
  return (
    <div
      className={styles.Card}
      onClick={select}
    >
      <h1>{task.label}</h1>
      <div>{task.description}</div>
      <div>{task.weigth}</div>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={toggle}
      />
    </div>
  );
};


export default Card;
