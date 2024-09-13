'use client'

import { PageLayout } from "@/core/layouts/PageLayout/PageLayout";
import { htmlData } from "@/app/api/html/htmlData";
import { Button, Flex, Text, Stack, Radio } from "@mantine/core";
import { useState } from "react";

export function HtmlViews() {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
    const [score, setScore] = useState(0);

    const handleCheckAnswer = () => {
        if (selectedAnswer === htmlData[currentQuestion].correctAnswer) {
            setIsAnswerCorrect(true);
            setScore(score + 1);
        } else {
            setIsAnswerCorrect(false);
        }
    };

    const handleNextQuestion = () => {
        setSelectedAnswer(null);
        setIsAnswerCorrect(null);
        setCurrentQuestion(currentQuestion + 1);
    };

    return (
        <PageLayout
            title='HTML (теория)'
        >
            <Flex direction="column" gap="sm">
                <Flex justify="center">
                    <Text>{htmlData[currentQuestion].question}</Text>
                </Flex>

                <Stack gap='xl'>
                    <Radio.Group
                        value={selectedAnswer}
                        onChange={setSelectedAnswer}
                    >
                        <Flex direction='column' gap='md'>
                            {htmlData[currentQuestion].options.map((option, index) => (
                                <Radio key={index} value={option} label={option} />
                            ))}
                        </Flex>
                    </Radio.Group>

                    {isAnswerCorrect === null && (
                        <Button onClick={handleCheckAnswer} disabled={!selectedAnswer}>
                            Проверить ответ
                        </Button>
                    )}

                    {isAnswerCorrect !== null && (
                        <Text c={isAnswerCorrect ? 'green' : 'red'}>
                            {isAnswerCorrect ? "Правильный ответ!" : "Неправильный ответ."}
                        </Text>
                    )}

                    {isAnswerCorrect !== null && currentQuestion < htmlData.length - 1 && (
                        <Button onClick={handleNextQuestion}>Следующий вопрос</Button>
                    )}

                    {isAnswerCorrect !== null && currentQuestion === htmlData.length - 1 && (
                        <Text>Тест завершен! Ваш результат: {score} из {htmlData.length}</Text>
                    )}
                </Stack>
            </Flex>
        </PageLayout>
    )
}