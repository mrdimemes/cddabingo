import { useState, useEffect } from "react";

import styles from "./Bingo.module.sass";
import { Card } from "./Card";

import type { Task } from "src/types";

import type { Props } from "./types";


const Bingo = ({ initialTasks, size, bingoBonus }: Props) => {
  if (initialTasks.length !== size ** 2) {
    throw Error("Некорректная размерность поля!");
  };

  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setScore(0);
    // raw score
    tasks.forEach(x => {
      if (x.isCompleted) setScore(prevoius => prevoius + x.weigth);
    });
    for (let i = 0; i < size; i++) {
      // row bingo bonus
      if (
        tasks
          .slice(i, i + size)
          .every(x => x.isCompleted)
      ) {
        setScore(previous => previous + bingoBonus);
      };
      // column bingo bonus
      if (
        tasks
          .filter((_, index) => index % size === i)
          .every(x => x.isCompleted)
      ) {
        setScore(previous => previous + bingoBonus);
      };
    };
  }, [tasks, bingoBonus, size]);

  return (
    <div className={styles.Bingo}>
      <div className={styles.playfield}>
        {
          tasks.map(task => (
            <Card
              key={task.id}
              task={task}
              select={() => setSelectedTask(task)}
              toggle={() => {
                setTasks(tasks.map(x => {
                  if (x.id === task.id) {
                    return { ...x, isCompleted: !x.isCompleted };
                  }
                  return x;
                }));
              }}
            />
          ))
        }
      </div>
      <div>
        <h1>Заработано очков: {score}</h1>
        <div>
          <h2>Правила:</h2>
          <ul>
            <li>Первое</li>
            <li>Второе</li>
            <li>Третье</li>
          </ul>
        </div>
        <div>
          {
            selectedTask === null
              ? <h2>Нажми на задание, для получания пояснений...</h2>
              : (
                <>
                  <h2>Задача «{selectedTask.label}»</h2>
                  <div>{selectedTask.help ?? "Ну тут всё и так понятно."}</div>
                </>
              )
          }
        </div>
      </div>
    </div>
  );
};


export default Bingo;
