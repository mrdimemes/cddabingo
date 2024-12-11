import styles from "./TaskOverview.module.sass";

import type { Props } from "./types";


const TaskOverview = ({ task }: Props) => {
  return (
    <div className={styles.TaskOverview}>
      <h1>
        {
          task === null
            ? "Нажми на задачу для дополнительной информации..."
            : task.label
        }
      </h1>

      {
        task &&
        <>
          <div className={styles.description}>
            {task.description}
          </div>
          <div>
            {
              task.help !== undefined
                ? task.help.map(x => <p>{x}</p>)
                : "Заметок по квесту не найдено :C"
            }
          </div>
        </>
      }
    </div>
  );
};


export default TaskOverview;
