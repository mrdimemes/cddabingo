import styles from "./Score.module.sass";

import type { Props } from "./types";


const Score = ({ score }: Props) => {
  return (
    <div className={styles.Score}>
      {`Заработано очков: ${score}!`}
    </div>
  );
};


export default Score;
