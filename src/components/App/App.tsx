
import { Bingo } from "src/components/Bingo";

import styles from "./App.module.sass";

import type { Task } from "src/types";



const TASKS: Task[] = [
  {
    id: 1,
    label: "Сделать копьё",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 2,
    label: "Выжить 3 дня",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 3,
    label: "Прокатиться на тачке",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 4,
    label: "Купить еду в автомате",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 5,
    label: "Заварить чефир",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 6,
    label: "Поспать с дакемакурой",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 7,
    label: "Выпить три литра пива",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 8,
    label: "Сделать кострище",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 9,
    label: "Почистить ствол",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 10,
    label: "Выполнить любой квест",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 11,
    label: "Убить школьника учебником",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 12,
    label: "Найти золото",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 13,
    label: "Слить бензин",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 14,
    label: "Приставка или музыка",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 15,
    label: "Охота из лука",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 16,
    label: "Мутировать",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 17,
    label: "Взлом",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 18,
    label: "Убийство гранатой",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 19,
    label: "Торговля с НПС",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 20,
    label: "Стать фурри",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 21,
    label: "Стать киборгом",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 22,
    label: "Разделать и пожарить",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 23,
    label: "Прочесть книгу",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 24,
    label: "Граффити",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 25,
    label: "Взорвать мину",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 26,
    label: "Зависимость",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 27,
    label: "Охота на мутантов",
    description: "матка ос",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 28,
    label: "Лось или медведь",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 29,
    label: "Ностоящий меч",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 30,
    label: "Склад военной базы",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 31,
    label: "Крепкий алкоголь",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 32,
    label: "Лаборатория",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 33,
    label: "Зомби-корова",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 34,
    label: "Сон на свежем воздухе",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 35,
    label: "Попасть в военный бункер",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 36,
    label: "Выкурить сигару",
    description: "",
    weigth: 1,
    isCompleted: false,
  },
];
const SIZE = 6;
const BINGO_BONUS = 3;


const App = () => {
  return (
    <div className={styles.App}>
      <Bingo
        initialTasks={TASKS}
        size={SIZE}
        bingoBonus={BINGO_BONUS}
      />
    </div>
  );
};


export default App;
