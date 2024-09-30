import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

type Question = {
    question: string;
    options: string[];
    correctAnswer: string;
};
type cssDataMutation = {
    message: string;
    isCorrect: boolean;
    status?: number
}

export function useGetCssDataQuery() {
    return useQuery({
        queryKey: ['cssQuestions'],
        queryFn: () => axios.get<Question[]>('http://localhost:3000/api/css')
    })
}

export function useCheckAnswerMutation() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: {question: string, selectedAnswer: string}) => 
            axios.post<cssDataMutation>('http://localhost:3000/api/css', data),
        onSuccess: async data => {
            console.log('Ответ успешно отправлен', data);
            await queryClient.invalidateQueries({queryKey: ['cssQuestions']})
        },
        onError: error => {
            console.log('Ошибка при отправке ответа', error);
        }
    })
}