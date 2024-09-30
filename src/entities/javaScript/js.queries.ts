import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

type jsData = {
    options: string[];
    question: string;
    correctAnswer: string;
};
type jsDataMutation = {
    message: string;
    isCorrect: boolean;
    status?: number
}

export function useGetJSDataQuery () {
    return useQuery({
        queryKey: ['JSQuestions'],
        queryFn: () => axios.get<jsData[]>('http://localhost:3000/api/JavaScript')
    })
}

export function useCheckAnswerMutation() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: {question: string, selectedAnswer: string}) => 
            axios.post<jsDataMutation>('http://localhost:3000/api/JavaScript', data),
        onSuccess: async data => {
            await queryClient.invalidateQueries({queryKey: ['JSQuestions']})
        },
        onError: error => {
            console.error('Ошибка при отправке ответа', error);
        }
    })
}