'use client'

import { reactData } from '@/app/api/react/reactData';
import { PageLayout } from '@/core/layouts/PageLayout/PageLayout'
import { Button, Flex, Radio, Stack, Text } from '@mantine/core';
import React, { useState } from 'react'

export function ReactViews() {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
    const [score, setScore] = useState(0);

    const handleCheckAnswer = () => {
        if (selectedAnswer === reactData[currentQuestion].correctAnswer) {
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
        <PageLayout title='React (Тестовые задания)'>
            <Flex direction="column" gap="sm">
                <Flex justify="center">
                    <Text>{reactData[currentQuestion].question}</Text>
                </Flex>

                <Stack gap='xl'>
                    <Radio.Group
                        value={selectedAnswer}
                        onChange={setSelectedAnswer}
                    >
                        <Flex direction='column' gap='md'>
                            {reactData[currentQuestion].options.map((option, index) => (
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

                    {isAnswerCorrect !== null && currentQuestion < reactData.length - 1 && (
                        <Button onClick={handleNextQuestion}>Следующий вопрос</Button>
                    )}

                    {isAnswerCorrect !== null && currentQuestion === reactData.length - 1 && (
                        <Text>Тест завершен! Ваш результат: {score} из {reactData.length}</Text>
                    )}
                </Stack>
            </Flex>
        </PageLayout>
    )
}
