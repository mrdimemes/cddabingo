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
    label: "Мир вашему дому",
    description: "Заварить чефир",
    help: [
      "Заварить любой чай. Делается через крафт.",
    ],
    weigth: 2,
    isCompleted: false,
  },
  {
    id: 6,
    label: "2D forever",
    description: "Поспать с дакемакурой",
    help: [
      "Найти любую дакемакуру. Заснуть с ней на одном тайле. Считается выполненным, когда появится надпись 'Вы засыпаете'",
    ],
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 7,
    label: "Есть пробитие",
    description: "Выпить три литра пива",
    help: [
      "Подойдет любой пивной напиток. За глоток персонаж выпивает 0,25л жидкости, что означает 12 глотков. Все три литра нужно выпить за раз.",
    ],
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 8,
    label: "Каменный век",
    description: "Сделать кострище",
    help: [
      "Делается через меню строительства. Камни в больших количествах можно накопать из земли. Инструмент для копания можно скрафтить из палки.",
    ],
    weigth: 2,
    isCompleted: false,
  },
  {
    id: 9,
    label: "Главный по стволам",
    description: "Почистить оружие",
    help: [
      "Почти все оружие в игре находится грязным и непрестрелянным. На грязных пушках будет висеть статус 'Загрязнение'. Почистить пушку можно действием 'Исправить' (m).",
    ],
    weigth: 3,
    isCompleted: false,
  },
  {
    id: 10,
    label: "Принеси-подай...",
    description: "Выполнить любой квест",
    help: [
      "Слышал, почитать терминал в старотовом убежище бывает полезно...",
    ],
    weigth: 2,
    isCompleted: false,
  },
  {
    id: 11,
    label: "Знания - сила",
    description: "Убить школьника учебником",
    help: [
      "Школьником считается любой зомби-ребенок. Учебником считается любая книга, с категорией 'РУКОВОДСТВО'. Убийством считается добивание с учебником в руках.",
    ],
    weigth: 2,
    isCompleted: false,
  },
  {
    id: 12,
    label: "Искал медь...",
    description: "Найти золото",
    help: [
      "Любая золотая вещь должна попасть в инвентарь",
    ],
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 13,
    label: "Оператор АЗС",
    description: "Слить бензин",
    help: [
      "Перелить любое жидкое топтиво в любую емкость из бензопака любого транспортного средства. Пригодится шланг от холодильника. Слитый на землю бензин не засчитывается.",
    ],
    weigth: 2,
    isCompleted: false,
  },
  {
    id: 14,
    label: "Мир подождет",
    description: "Поиграть в приставку или послушать музыку",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 15,
    label: "Охотник",
    description: "Убить зверя при помощи лука",
    help: [
      "Защитывается любой лук или арбалет. Стрелять, кстати, не обязательно.",
    ],
    weigth: 2,
    isCompleted: false,
  },
  {
    id: 16,
    label: "Мутант",
    description: "Приобрести мутацию",
    help: [
      "Мутацию можно получить использовав мутаген или постояв в радиации. Мутагены относительно безопасны, но гарантированно найти их можно только в правительственных лабораториях. Выживание же после прогулки по воронке от ядерного взрыва не гарантируется...",
    ],
    weigth: 5,
    isCompleted: false,
  },
  {
    id: 17,
    label: "Золотые купола",
    description: "Взломать дверь, сейф или терминал",
    help: [
      "Двери взламываются ломиком, для сейфа пригодится стетаскоп, а терминалы взламываются голыми руками! Просто ножно шарить за компьютеры.",
    ],
    weigth: 3,
    isCompleted: false,
  },
  {
    id: 18,
    label: "Разрывная",
    description: "Убить монстра гранатой",
    help: [
      "Кинуть активированную гранату в противника. Наслаждаться. Будет засчитан любой тип гранат, в том числе молотов.",
    ],
    weigth: 2,
    isCompleted: false,
  },
  {
    id: 19,
    label: "Барыга",
    description: "Поторговать в НПС",
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 20,
    label: "Пушистик",
    description: "Стать фурри",
    help: [
      "Найти и надеть фурсьют или любой тематический предмет одежды",
    ],
    weigth: 2,
    isCompleted: false,
  },
  {
    id: 21,
    label: "Киборг-убийца",
    description: "Установить киберимплант",
    help: [
      "Найти имплант. Найти автодок. Не умереть во время операции. Удачи. Всё это, кстати, гарантированно есть в правительственной лаборатории.",
    ],
    weigth: 10,
    isCompleted: false,
  },
  {
    id: 22,
    label: "Medium rare",
    description: "Приготовить стейк",
    help: [
      "Добыть 'кусок мяса'. Приготовить его любым способом. Мясо не должно быть зараженным.",
    ],
    weigth: 3,
    isCompleted: false,
  },
  {
    id: 23,
    label: "Многа букаф",
    description: "Прочесть книгу",
    help: [
      "Прочитать любую книгу или журнал. Достаточно одной главы.",
    ],
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 24,
    label: "Вандал",
    description: "Оставить граффити",
    help: [
      "На стенах можно рисовать, например, несмываемым маркером",
    ],
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 25,
    label: "Смотри под ноги",
    description: "Взорвать мину",
    help: [
      "Мина должна сделать бум. Не важно, что станет причиной детонации.",
    ],
    weigth: 2,
    isCompleted: false,
  },
  {
    id: 26,
    label: "Нарколыга",
    description: "Заработать зависимость",
    help: [
      "Любую. Опознать зависимость можно по соответствующему статусу персонажа, дебафам к морали от ломки и навязчивым надписям в логах",
    ],
    weigth: 3,
    isCompleted: false,
  },
  {
    id: 27,
    label: "Огнём и мечем",
    description: "Убить матку мутантов",
    help: [
      "Засчитывается матка гигантских ос или муравьев. Осы строят ульи на поверхности, муравьи копают тоннели. Проще всего убить матку ос, так как она периодически вылетает из гнезда.",
    ],
    weigth: 4,
    isCompleted: false,
  },
  {
    id: 28,
    label: "Крупная дичь",
    description: "Убить лося или медведя",
    weigth: 3,
    isCompleted: false,
  },
  {
    id: 29,
    label: "Закаленная сталь",
    description: "Взять в руки настоящий меч",
    help: [
      "Получить любое средневековое режущее оружие из хорошей стали и взять его в руки.",
      "Засчитываются изделия из 'стали', 'среднеуглеродистой стали' и 'высокоуглеродистой стали. Изделия из аллюминия и дешевой стали не засчитываются.",
      "С хорошим шансом можно найти в особнике (берегитесь арбалетов).",
    ],
    weigth: 4,
    isCompleted: false,
  },
  {
    id: 30,
    label: "Годовой запас",
    description: "Проникнуть на склад военной базы",
    help: [
      "Опасайтесь мин у стен и большого количества зомбированных солдат внутри. Склад можно опознать по двум гаражным дверям.",
      "Очень не факт, что двери будут открыты...",
    ],
    weigth: 10,
    isCompleted: false,
  },
  {
    id: 31,
    label: "40%",
    description: "Найти крепкий алкоголь",
    help: [
      "Засчитывается любой алкоголь, что крепче вина.",
    ],
    weigth: 1,
    isCompleted: false,
  },
  {
    id: 32,
    label: "Темные дела",
    description: "Проникнуть в правительственную лабораторию",
    help: [
      "Понадобится либо пропуск ученого, либо вкаченный навык компьютеров. Снаружи лаборатория безопасна, но внутри может ждать охранная система и мутанты. Задание засчитывается после открытия внешней двери в бункер.",
    ],
    weigth: 5,
    isCompleted: false,
  },
  {
    id: 33,
    label: "Дикий запад",
    description: "Убить зомби-корову из револьвера",
    help: [
      "Коровы пасутся на молочной ферме. Вы можете встретить как здоровых, так и зомбированных коров.",
      "При смерти коровы от рук ЛЮБЫХ зараженных существ, она встанет как зомби-корова.",
      "Коровы быстры и ОЧЕНЬ больно бодаются. Не вступайте в бой со всем стадом, если хотите жить.",
    ],
    weigth: 4,
    isCompleted: false,
  },
  {
    id: 34,
    label: "Сладкие сны",
    description: "Поспать на свежем воздухе",
    help: [
      "Засчитывается после засыпания под открытым небом или в палатке.",
    ],
    weigth: 2,
    isCompleted: false,
  },
  {
    id: 35,
    label: "Последний оплот",
    description: "Проникнуть в военный бункер",
    help: [
      "Понадобится либо пропуск военного, либо вкаченный навык компьютеров. Снаружи могут ждать турели и мины, но внутри относительно безопасно. Задание засчитывается после открытия внешней двери в бункер.",
    ],
    weigth: 5,
    isCompleted: false,
  },
  {
    id: 36,
    label: "На широкую ногу",
    description: "Выкурить сигару",
    weigth: 2,
    isCompleted: false,
  },
];
export const SIZE = 6;
export const BINGO_BONUS = 5;
