import { NextRequest, NextResponse } from "next/server";
import { htmlData } from "./htmlData";

export async function GET(req: NextRequest) {
    return NextResponse.json(htmlData)
}

export async function POST(req: NextRequest) {
    try {
        const {question, selectedAnswer} = await req.json();

        const foundQuestion = htmlData.find(q => q.question === question)

        if (!foundQuestion) {
            return NextResponse.json(
                {message: 'Вопрос не найден'},
                {status: 404}
            )
        }
        const isCorrect = foundQuestion.correctAnswer === selectedAnswer
        const message = isCorrect ? 'Правильный ответ' : 'Неправильный ответ';

        return NextResponse.json({
            message,
            isCorrect
        })

    } catch (error: any) {
        return NextResponse.json({ error: "Неверный формат данных" }, { status: 500 });
    }
}