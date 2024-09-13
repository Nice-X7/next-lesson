import { Question } from "../html/htmlData";

export const JSdata: Question[] = [
    {
        question: "Какое значение будет у переменной `x` после выполнения `let x = 2 + '2';`?",
        options: ["'22'", "NaN", "4", "'4'"],
        correctAnswer: "'22'"
    },
    {
        question: "Какое ключевое слово используется для объявления переменной с блочной областью видимости?",
        options: ["let", "var", "const", "function"],
        correctAnswer: "let"
    },
    {
        question: "Какой оператор используется для строгого сравнения в JavaScript?",
        options: ["==", "!==", "=", "==="],
        correctAnswer: "==="
    },
    {
        question: "Какой метод используется для добавления элемента в конец массива?",
        options: ["push()", "concat()", "pop()", "shift()"],
        correctAnswer: "push()"
    },
    {
        question: "Какое значение будет у переменной `x` после выполнения `typeof null`?",
        options: ["'object'", "'null'", "'undefined'", "'boolean'"],
        correctAnswer: "'object'"
    },
    {
        question: "Какое ключевое слово используется для создания асинхронной функции?",
        options: ["async", "await", "function", "promise"],
        correctAnswer: "async"
    },
    {
        question: "Какой метод преобразует объект в JSON строку?",
        options: ["JSON.parse()", "JSON.stringify()", "toString()", "String()"],
        correctAnswer: "JSON.stringify()"
    },
    {
        question: "Какой метод вызывает функцию для каждого элемента массива?",
        options: ["forEach()", "map()", "filter()", "reduce()"],
        correctAnswer: "forEach()"
    },
    {
        question: "Какой оператор используется для проверки равенства значений с приведением типов?",
        options: ["===", "!=", "==", "="],
        correctAnswer: "=="
    },
    {
        question: "Что вернет `NaN === NaN`?",
        options: ["true", "NaN", "undefined", "false"],
        correctAnswer: "false"
    },
    {
        question: "Какой метод используется для удаления последнего элемента массива?",
        options: ["shift()", "unshift()", "pop()", "slice()"],
        correctAnswer: "pop()"
    },
    {
        question: "Какой результат выполнения выражения `'5' + 3`?",
        options: ["8", "'53'", "'35'", "undefined"],
        correctAnswer: "'53'"
    },
    {
        question: "Что делает метод `Array.prototype.map()`?",
        options: [
            "Преобразует массив в строку",
            "Создает новый массив с результатами вызова функции для каждого элемента",
            "Применяет функцию ко всем элементам и возвращает одно значение",
            "Фильтрует элементы массива"
        ],
        correctAnswer: "Создает новый массив с результатами вызова функции для каждого элемента"
    },
    {
        question: "Как объявить функцию в JavaScript?",
        options: [
            "def myFunction() {}",
            "function myFunction() {}",
            "function:myFunction() {}",
            "func myFunction() {}"
        ],
        correctAnswer: "function myFunction() {}"
    },
    {
        question: "Какое ключевое слово используется для создания объекта-промиса?",
        options: ["await", "promise", "new", "async"],
        correctAnswer: "new"
    },
    {
        question: "Что выведет в консоль `console.log(typeof NaN)`?",
        options: ["'NaN'", "'number'", "'undefined'", "'null'"],
        correctAnswer: "'number'"
    },
    {
        question: "Что делает метод `Array.prototype.filter()`?",
        options: [
            "Добавляет элементы в массив",
            "Проверяет, есть ли элемент в массиве",
            "Создает новый массив, содержащий элементы, соответствующие условию",
            "Удаляет элементы из массива"
        ],
        correctAnswer: "Создает новый массив, содержащий элементы, соответствующие условию"
    },
    {
        question: "Какое ключевое слово используется для выхода из цикла?",
        options: ["break", "return", "exit", "continue"],
        correctAnswer: "break"
    },
    {
        question: "Что делает оператор `typeof`?",
        options: [
            "Проверяет, является ли переменная объектом",
            "Возвращает строку, описывающую тип операнда",
            "Преобразует значение в строку",
            "Проверяет, объявлена ли переменная"
        ],
        correctAnswer: "Возвращает строку, описывающую тип операнда"
    },
    {
        question: "Какой результат выполнения выражения `[1, 2, 3].length`?",
        options: ["0", "2", "4", "3"],
        correctAnswer: "3"
    }
];
