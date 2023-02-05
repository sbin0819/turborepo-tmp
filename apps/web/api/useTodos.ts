import { useQuery } from 'react-query';
import fetcher from './fetcher';

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchTodos = () => {
    return fetcher('https://jsonplaceholder.typicode.com/todos');
};

const useTodos = () => {
    return useQuery({
        queryKey: ['todos'],
        queryFn: async (): Promise<Array<Todo>> => await fetchTodos()
    });
};

export { fetchTodos, useTodos };
