import { NextRequest, NextResponse } from "next/server";
import { htmlData } from "./htmlData";

export async function GET(req: NextRequest) {
    return NextResponse.json(htmlData)
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        if (!body.question || !body.options || !body.correctAnswer) {
            return NextResponse.json({ error: "Все поля обязательны" }, { status: 400 });
        }

        const newQuestion = {
            question: body.question,
            options: body.options,
            correctAnswer: body.correctAnswer
        };

        htmlData.push(newQuestion);

        return NextResponse.json({ message: "Вопрос успешно добавлен", data: newQuestion }, { status: 201 });

    } catch (error) {
        return NextResponse.json({ error: "Неверный формат данных" }, { status: 400 });
    }
}