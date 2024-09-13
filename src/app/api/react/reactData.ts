import { Question } from "../html/htmlData";

export const reactData: Question[] = [
    {
        question: "Какое ключевое слово используется для создания компонента в классовом стиле?",
        options: ["extends", "class", "constructor", "super"],
        correctAnswer: "extends"
    },
    {
        question: "Как называется функция, которая позволяет создавать элементы React?",
        options: ["React.createElement", "React.render", "React.component", "React.makeElement"],
        correctAnswer: "React.createElement"
    },
    {
        question: "Какое свойство компонентов используется для передачи данных от родителя к дочернему компоненту?",
        options: ["props", "state", "context", "refs"],
        correctAnswer: "props"
    },
    {
        question: "Какой хук используется для управления состоянием в функциональных компонентах?",
        options: ["useState", "useEffect", "useReducer", "useContext"],
        correctAnswer: "useState"
    },
    {
        question: "Какой метод жизненного цикла вызывается сразу после монтирования компонента?",
        options: ["componentDidMount", "componentWillMount", "componentDidUpdate", "shouldComponentUpdate"],
        correctAnswer: "componentDidMount"
    },
    {
        question: "Какой хук используется для выполнения побочных эффектов в функциональных компонентах?",
        options: ["useEffect", "useContext", "useState", "useCallback"],
        correctAnswer: "useEffect"
    },
    {
        question: "Какое свойство компонента используется для сохранения локального состояния в классовом компоненте?",
        options: ["this.state", "this.props", "this.context", "this.localState"],
        correctAnswer: "this.state"
    },
    {
        question: "Какое свойство в React используется для обращения к элементам напрямую?",
        options: ["ref", "key", "id", "name"],
        correctAnswer: "ref"
    },
    {
        question: "Что делает метод `setState` в классовом компоненте?",
        options: [
            "Обновляет состояние компонента и перерисовывает его",
            "Очищает состояние компонента",
            "Удаляет компонент",
            "Отменяет обновление компонента"
        ],
        correctAnswer: "Обновляет состояние компонента и перерисовывает его"
    },
    {
        question: "Какой метод используется для преобразования JSX в реальный DOM?",
        options: ["ReactDOM.render", "React.render", "React.createElement", "ReactDOM.createRoot"],
        correctAnswer: "ReactDOM.render"
    },
    {
        question: "Какой хук используется для работы с контекстом в функциональных компонентах?",
        options: ["useContext", "useState", "useRef", "useEffect"],
        correctAnswer: "useContext"
    },
    {
        question: "Что такое JSX?",
        options: [
            "Расширение синтаксиса JavaScript для описания UI компонентов",
            "Тип компонента в React",
            "JavaScript-функция",
            "Модуль в React"
        ],
        correctAnswer: "Расширение синтаксиса JavaScript для описания UI компонентов"
    },
    {
        question: "Какой атрибут используется для уникальной идентификации элементов в списке React?",
        options: ["key", "id", "ref", "className"],
        correctAnswer: "key"
    },
    {
        question: "Какой хук возвращает мемоизированное значение?",
        options: ["useMemo", "useCallback", "useReducer", "useEffect"],
        correctAnswer: "useMemo"
    },
    {
        question: "Что такое `useReducer` в React?",
        options: [
            "Хук для управления более сложным состоянием",
            "Хук для работы с контекстом",
            "Функция для обработки событий",
            "Метод для обновления DOM"
        ],
        correctAnswer: "Хук для управления более сложным состоянием"
    },
    {
        question: "Какой метод используется для преобразования списка элементов в React?",
        options: ["map", "forEach", "reduce", "filter"],
        correctAnswer: "map"
    },
    {
        question: "Какой атрибут в React используется для передачи значения по умолчанию в контекст?",
        options: ["defaultValue", "value", "initialValue", "startValue"],
        correctAnswer: "defaultValue"
    },
    {
        question: "Что возвращает компонент React?",
        options: ["JSX элемент", "DOM элемент", "JavaScript объект", "HTML элемент"],
        correctAnswer: "JSX элемент"
    },
    {
        question: "Как можно предотвратить повторный рендер компонента в React?",
        options: ["shouldComponentUpdate", "componentDidMount", "componentWillUpdate", "useEffect"],
        correctAnswer: "shouldComponentUpdate"
    },
    {
        question: "Какой хук используется для создания и сохранения mutable значений в функциональных компонентах?",
        options: ["useRef", "useState", "useContext", "useMemo"],
        correctAnswer: "useRef"
    }
];
