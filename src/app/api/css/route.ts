import { NextRequest, NextResponse } from "next/server";
import { CssData } from "./cssData";


export async function GET(req: NextRequest) {
    return NextResponse.json(CssData)
}

export async function POST(req: NextRequest) {
    try {
        const {question, selectAnswer} = await req.json();

        const foundQuestion = CssData.find(q => q.question === question)

        if (!foundQuestion) {
            return NextResponse.json(
                {message: 'Вопрос не найден'},
                {status: 404}
            )
        }
        const isCorrect = foundQuestion.correctAnswer === selectAnswer

        return NextResponse.json({
            message: isCorrect ? 'Правильный ответ' : 'Неправильный ответ'
        })

    } catch (error: any) {
        return NextResponse.json({ error: "Неверный формат данных" }, { status: 500 });
    }
}