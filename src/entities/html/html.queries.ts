import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

type htmlData = {
    options: string[];
    question: string;
    correctAnswer: string;
};
type htmlDataMutation = {
    message: string;
    isCorrect: boolean;
    status?: number
}

export function useHtmlGetDataQuery() {
    return useQuery({
        queryKey: ['htmlQuestions'],
        queryFn: () => axios.get<htmlData[]>('http://localhost:3000/api/html')
    })
}

export function useCheckAnswerMutation() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: {question: string, selectedAnswer: string}) => 
            axios.post<htmlDataMutation>('http://localhost:3000/api/html', data),
        onSuccess: async data => {
            await queryClient.invalidateQueries({queryKey: ['htmlQuestions']})
        },
        onError: error => {
            console.error('Ошибка при отправке ответа', error);
        }
    })
}