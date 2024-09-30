import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

type TSData = {
    options: string[];
    question: string;
    correctAnswer: string;
};
type TSDataMutation = {
    message: string;
    isCorrect: boolean;
    status?: number
}

export function useGetTypeScriptQueries() {
    return useQuery({
        queryKey: ['TSQuestion'],
        queryFn: () => axios.get<TSData[]>('http://localhost:3000/api/typeScript')
    })
}

export function useCheckAnswerMutation() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: {question: string, selectedAnswer: string}) => 
            axios.post<TSDataMutation>('http://localhost:3000/api/typeScript', data),
        onSuccess: async data => {
            await queryClient.invalidateQueries({queryKey: ['TSQuestion']})
        },
        onError: error => {
            console.error('Ошибка при отправке ответа', error);
        }
    })
}