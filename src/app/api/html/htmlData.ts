export type Question = {
    question: string;
    options: string[];
    correctAnswer: string;
};

export const htmlData: Question[] = [
    {
        question: "Какой тег используется для придания жирности тексту?",
        options: ["<b>", "<em>", "<i>", "<strong>"],
        correctAnswer: "<strong>"
    },
    {
        question: "Какой тег используется для создания гиперссылки?",
        options: ["<link>", "<url>", "<a>", "<href>"],
        correctAnswer: "<a>"
    },
    {
        question: "Какой атрибут тега <img> используется для указания альтернативного текста?",
        options: ["title", "src", "href", "alt"],
        correctAnswer: "alt"
    },
    {
        question: "Какой тег используется для создания нумерованного списка?",
        options: ["<ul>", "<li>", "<ol>", "<dl>"],
        correctAnswer: "<ol>"
    },
    {
        question: "Какой тег используется для создания строки в таблице?",
        options: ["<td>", "<th>", "<tr>", "<table>"],
        correctAnswer: "<tr>"
    },
    {
        question: "Какой тег используется для вставки изображения на страницу?",
        options: ["<link>", "<img>", "<src>", "<picture>"],
        correctAnswer: "<img>"
    },
    {
        question: "Какой атрибут используется для указания пути к изображению в теге <img>?",
        options: ["alt", "title", "src", "href"],
        correctAnswer: "src"
    },
    {
        question: "Какой тег используется для создания абзаца?",
        options: ["<p>", "<div>", "<section>", "<span>"],
        correctAnswer: "<p>"
    },
    {
        question: "Какой тег используется для создания самой крупной заголовочной строки?",
        options: ["<h6>", "<h1>", "<h3>", "<h2>"],
        correctAnswer: "<h1>"
    },
    {
        question: "Какой тег используется для создания ненумерованного списка?",
        options: ["<li>", "<ul>", "<dl>", "<ol>"],
        correctAnswer: "<ul>"
    },
    {
        question: "Какой атрибут тега <a> используется для указания ссылки?",
        options: ["src", "href", "title", "link"],
        correctAnswer: "href"
    },
    {
        question: "Какой тег используется для выделения текста курсивом?",
        options: ["<em>", "<b>", "<i>", "<u>"],
        correctAnswer: "<i>"
    },
    {
        question: "Какой тег используется для создания ячейки таблицы?",
        options: ["<tr>", "<td>", "<table>", "<th>"],
        correctAnswer: "<td>"
    },
    {
        question: "Какой тег используется для создания горизонтальной линии?",
        options: ["<br>", "<hr>", "<line>", "<div>"],
        correctAnswer: "<hr>"
    },
    {
        question: "Какой тег используется для вставки многострочного текстового поля?",
        options: ["<input>", "<textarea>", "<text>", "<form>"],
        correctAnswer: "<textarea>"
    },
    {
        question: "Какой тег используется для создания формы?",
        options: ["<input>", "<form>", "<fieldset>", "<button>"],
        correctAnswer: "<form>"
    },
    {
        question: "Какой атрибут тега <input> используется для указания текстовой подсказки внутри поля?",
        options: ["placeholder", "value", "title", "name"],
        correctAnswer: "placeholder"
    },
    {
        question: "Какой атрибут используется для объединения ячеек таблицы по горизонтали?",
        options: ["colspan", "rowspan", "width", "align"],
        correctAnswer: "colspan"
    },
    {
        question: "Какой тег используется для создания всплывающей подсказки при наведении на элемент?",
        options: ["title", "alt", "tooltip", "hover"],
        correctAnswer: "title"
    },
    {
        question: "Какой тег используется для определения заголовка документа в браузере?",
        options: ["<head>", "<title>", "<meta>", "<header>"],
        correctAnswer: "<title>"
    }
];
