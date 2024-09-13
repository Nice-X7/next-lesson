import { Question } from "../html/htmlData";

export const TSdata: Question[] = [
    {
        question: "Какое ключевое слово используется для объявления типа в TypeScript?",
        options: ["interface", "type", "declare", "enum"],
        correctAnswer: "type"
    },
    {
        question: "Что возвращает оператор `typeof` в TypeScript?",
        options: ["Тип данных переменной", "Значение переменной", "Массив", "Число"],
        correctAnswer: "Тип данных переменной"
    },
    {
        question: "Какой тип данных используется для представления значения, которое может быть либо числом, либо строкой?",
        options: ["number", "string", "union", "any"],
        correctAnswer: "union"
    },
    {
        question: "Какой тип данных возвращает функция, если она не возвращает значение?",
        options: ["null", "void", "undefined", "never"],
        correctAnswer: "void"
    },
    {
        question: "Какой тип данных используется для представления любого значения?",
        options: ["unknown", "object", "any", "never"],
        correctAnswer: "any"
    },
    {
        question: "Какой модификатор доступа делает свойство доступным только внутри класса?",
        options: ["public", "private", "protected", "readonly"],
        correctAnswer: "private"
    },
    {
        question: "Как в TypeScript называется тип, который никогда не содержит значений?",
        options: ["never", "void", "null", "undefined"],
        correctAnswer: "never"
    },
    {
        question: "Что из этого является расширением TypeScript над JavaScript?",
        options: ["Типизация", "Циклы", "Функции", "Объекты"],
        correctAnswer: "Типизация"
    },
    {
        question: "Какой модификатор указывает, что свойство не может быть изменено после его инициализации?",
        options: ["const", "static", "readonly", "final"],
        correctAnswer: "readonly"
    },
    {
        question: "Какое ключевое слово используется для создания перечисления в TypeScript?",
        options: ["enum", "const", "type", "interface"],
        correctAnswer: "enum"
    },
    {
        question: "Какой из следующих типов допускает значения, которые могут быть любыми значениями, но требует явного приведения типов при использовании?",
        options: ["any", "unknown", "never", "void"],
        correctAnswer: "unknown"
    },
    {
        question: "Что произойдет, если попытаться присвоить `null` переменной с типом `string`?",
        options: ["Произойдет ошибка компиляции", "Значение будет преобразовано в 'null'", "Значение станет undefined", "Переменная станет null"],
        correctAnswer: "Произойдет ошибка компиляции"
    },
    {
        question: "Какой из этих типов данных включает в себя объекты, массивы и функции?",
        options: ["array", "class", "object", "function"],
        correctAnswer: "object"
    },
    {
        question: "Какой тип данных в TypeScript представляет массив строк?",
        options: ["string[]", "Array<string>", "string[] | Array<string>", "any[]"],
        correctAnswer: "string[]"
    },
    {
        question: "Какой оператор используется для приведения типов в TypeScript?",
        options: ["as", "is", "typeof", "instanceof"],
        correctAnswer: "as"
    },
    {
        question: "Что такое 'Generics' в TypeScript?",
        options: [
            "Типы, позволяющие создавать компоненты, работающие с разными типами данных",
            "Методы, возвращающие значения любого типа",
            "Переменные, которые могут принимать любые значения",
            "Специальные типы для объектов"
        ],
        correctAnswer: "Типы, позволяющие создавать компоненты, работающие с разными типами данных"
    },
    {
        question: "Какое расширение файла обычно используется для TypeScript файлов?",
        options: [".ts", ".js", ".tsx", ".jsx"],
        correctAnswer: ".ts"
    },
    {
        question: "Какой тип используется для работы с JavaScript библиотеками, которые не написаны на TypeScript?",
        options: ["declare", "interface", "type", "ambient"],
        correctAnswer: "declare"
    },
    {
        question: "Какой тип данных можно использовать для переменной, если она может содержать строку или число?",
        options: ["number | string", "any", "union", "number[] | string[]"],
        correctAnswer: "number | string"
    },
    {
        question: "Какой тип данных в TypeScript описывает объект с заранее известными ключами и их типами?",
        options: ["interface", "type", "object", "class"],
        correctAnswer: "interface"
    }
];
