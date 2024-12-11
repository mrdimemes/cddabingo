import { useState, useEffect } from "react";

import { TASKS, SIZE, BINGO_BONUS } from "src/bingoConfig";

import styles from "./Bingo.module.sass";
import { Card } from "./Card";
import { About } from "./About";
import { Rules } from "./Rules";
import { Score } from "./Score";
import { TaskOverview } from "./TaskOverview";

import type { Task } from "src/types";


const Bingo = () => {
  if (TASKS.length !== SIZE ** 2) {
    throw Error("Некорректная размерность поля!");
  };

  const [tasks, setTasks] = useState<Task[]>(TASKS);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setScore(0);
    // raw score
    tasks.forEach(x => {
      if (x.isCompleted) setScore(prevoius => prevoius + x.weigth);
    });
    for (let i = 0; i < SIZE; i++) {
      // row bingo bonus
      if (
        tasks
          .slice(i, i + SIZE)
          .every(x => x.isCompleted)
      ) {
        setScore(previous => previous + BINGO_BONUS);
      };
      // column bingo bonus
      if (
        tasks
          .filter((_, index) => index % SIZE === i)
          .every(x => x.isCompleted)
      ) {
        setScore(previous => previous + BINGO_BONUS);
      };
    };
  }, [tasks]);

  const fieldSide = SIZE * 125 - 5;

  return (
    <div className={styles.Bingo}>
      <div
        className={styles.playfield}
        style={{
          minHeight: fieldSide,
          maxHeight: fieldSide,
          minWidth: fieldSide,
          maxWidth: fieldSide,
        }}
      >
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
      <div className={styles.side}>
        <Score score={score} />
        <About />
        <Rules />
        <TaskOverview task={selectedTask} />
      </div>
    </div>
  );
};


export default Bingo;
