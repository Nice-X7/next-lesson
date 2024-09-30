'use client'

import { CssData } from '@/app/api/css/cssData';
import { PageLayout } from '@/core/layouts/PageLayout/PageLayout'
import { cssQueries } from '@/entities/css';
import { Button, Flex, Loader, Radio, Stack, Text } from '@mantine/core';
import React, { useState } from 'react'

export function CssViews() {
    const { data: questions } = cssQueries.useGetCssDataQuery()
    const { mutateAsync: checkAnswer } = cssQueries.useCheckAnswerMutation()

    const [score, setScore] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [message, setMessage] = useState<string>('');
    const [isCorrect, setIsCorrect] = useState<boolean | null>(false);

    if (!questions) return <Loader />

    const handleCheckAnswer = async () => {
        if (!selectedAnswer || !questions) return

        try {
            await checkAnswer({
                question: questions.data[currentQuestionIndex].question,
                selectedAnswer: selectedAnswer,
            }).then((x) => {
                setMessage(x.data.message)
                setIsCorrect(x.data.isCorrect)
            })
        } catch (error) {
            console.log(error)
        }
    };

    const handleNextQuestion = () => {
        setSelectedAnswer(null);
        setMessage('');
        setIsCorrect(null);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    return (
        <PageLayout title='CSS (теория)'>
            <Flex direction="column" gap="sm">
                <Flex justify="center">
                    <Text>{questions.data[currentQuestionIndex].question}</Text>
                </Flex>

                <Stack gap='xl'>
                    <Radio.Group
                        value={selectedAnswer}
                        onChange={setSelectedAnswer}
                    >
                        <Flex direction='column' gap='md'>
                            {questions.data[currentQuestionIndex].options.map((option, index) => (
                                <Radio key={index} value={option} label={option} />
                            ))}
                        </Flex>
                    </Radio.Group>
                    {message && (
                        <Text c={isCorrect ? "green" : "red"}>{message}</Text>
                    )}
                    <Button onClick={handleCheckAnswer} disabled={!selectedAnswer}>
                        Проверить ответ
                    </Button>

                    {currentQuestionIndex < questions.data.length - 1 && (
                        <Button onClick={handleNextQuestion} disabled={!isCorrect}>Следующий вопрос</Button>
                    )}

                    {message && currentQuestionIndex === questions.data.length - 1 && (
                        <Text>Тест завершен! Ваш результат: {score} из {questions.data.length}</Text>
                    )}
                </Stack>
            </Flex>
        </PageLayout>
    )
}
