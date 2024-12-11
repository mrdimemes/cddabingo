import type { Task } from "./types";


export const ABOUT = `
  На сетке слева представлены задания, которые будут выполнять участники в игре 
  «Cataclysm: Dark Days Ahead». Выполнение каждого задания даёт разное 
  количество очков. Помимо этого, каждая полностью закрытая строка или столбец 
  сетки даёт значительное количество бонусных очков. Задача участников: набрать 
  максимальное число очков за отведенное время.
`;
export const RULES = [
  `
  На выполнение заданий даётся до 4-х часов. При этом любой участник может 
  завершить свой забег досрочно или взять перерыв посреди ивента и вернуться к 
  выполнению заданий в любой момент до истечения 4-х часового таймера. По 
  окончанию таймера выполнение заданий не засчитывается.
  `,
  `
  При выполнении заданий желательна фиксация игрового процесса посредством 
  стрима или записи экрана. При невозможности подобной фиксации, можно заверять 
  выполнение задания посредством демонстрации экрана и сохранении скриншотов 
  (особенно важно запечатлить логи). Другие варианты согласуются в 
  индивидуальном порядке. Фиксация служит в первую очередь для предотвращения 
  конфликтных моментов между участниками.
  `,
  `
  Всё участники начинают выполнение заданий одновременно c целью облегчения 
  процесса фиксации. При невозможности участника присутствовать в конкретное 
  время, возможно досрочное выполнение при согласии организатора и остальных 
  участников. При этом набранные досрочно очки не разглашаются до окончания 
  ивента с целью поддержания интереса участников.
  `,
  `
  Участники в праве делать отметки о выполненных заданиях любым удобным им 
  способом: на странице данного приложения, на бумаге, в графическом или 
  текстовом редакторе и т.д.
  `,
  `
  Набранные очки оглашаются в момент завершения забега всеми участниками. 
  Игрок, набравший максимальное среди участников количество очков, признаётся 
  победителем ивента.
  `,
  `
  Победитель ивента получает весь призовой фонд и волен распоряжаться им 
  по своему усмотрению.
  `,
  `
  Задания выполняются в новом мире со стандартными настройками. В случае смерти 
  персонажа, следует создать нового персонажа в этом же мире. Количество 
  персонажей не ограничено.
  `,
  `
  Персонажи должны создаваться в режиме "Несколько пулов". Разрешена только 
  профессия "Выживший". Сценарий и стартовая прокачка может быть любой.
  `
  ,
  `
  Запрещено пользоваться отладочным меню игры, читами; модифицировать файлы 
  игры.
  `,
  `
  Очки за задания, выполненные с нарушениями, вычитаются из итоговой суммы очков
  участника. Бонусные очки за бинго из задания с нарушением также не 
  учитываются.
  `,
  `
  Все спорные ситуации урегулируются организатором.
  `,
];
export const TASKS: Task[] = [
  {
    id: 1,
    label: "Уга Буга",
    description: "Смастерить копьё",
    help: [
      "Необходимо создать ЛЮБОЕ копьё с НАКОНЕЧНИКОМ (заточенная палка не считается) через меню крафта. Получение копья любым другим способом, кроме крафта, не засчитывается. ",
      "Рецепты копий находятся в разделе ОРУЖИЕ > КОЛЮЩЕЕ.",
      "Простейщим для крафта, скорее всего, будет `простое копьё`. Длинную палку можно получить, если сломать молодое дерево. Растительное волокно крафтится из тополиного пуха, который можно в большом количестве собрать с деревьев в лесу. Лоскуты получаются путем разборки тканевых изделий.",
    ],
    weigth: 2,
    isCompleted: false,
  },
  {
    id: 2,
    label: "Выживший",
    description: "Прожить 3 дня",
    help: [
      "Одним персонажем. Ориентироваться исключительно на счетчик дней, игровое время не имеет роли. Если игра начинается в 60-й день, то задание засчитывается на 64-й. Если начало в 67-й, то зачет в 71-й. И т.д.",
    ],
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 3,
    label: "С ветерком",
    description: "Прокатиться на тачке",
    help: [
      "Найти ЛЮБОЕ транспортное средство на ходу или починить сломанное. Для выполнения достаточно проехать хотя бы один тайл. Велосипеды учитываются, да.",
    ],
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 4,
    label: "[Почти] бесплатно",
    description: "Купить еду в торговом автомате",
    help: [
      "Торговые автоматы принимают банковские карты. Сами автоматы можно найти в любых общественных местах. С разбитыми автоматами взаимодействовать не получится :C",
    ],
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
export const SIZE = 6;
export const BINGO_BONUS = 3;