import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

type reactData = {
    options: string[];
    question: string;
    correctAnswer: string;
};
type reactDataMutation = {
    message: string;
    isCorrect: boolean;
    status?: number
}

export function useHtmlGetDataQuery() {
    return useQuery({
        queryKey: ['reactQuestions'],
        queryFn: () => axios.get<reactData[]>('http://localhost:3000/api/react')
    })
}

export function useCheckAnswerMutation() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: {question: string, selectedAnswer: string}) => 
            axios.post<reactDataMutation>('http://localhost:3000/api/react', data),
        onSuccess: async data => {
            await queryClient.invalidateQueries({queryKey: ['reactQuestions']})
        },
        onError: error => {
            console.error('Ошибка при отправке ответа', error);
        }
    })
}