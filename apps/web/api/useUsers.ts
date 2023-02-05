import { useQuery } from 'react-query';
import fetcher from './fetcher';

interface User {
    id: number;
    name: string;
    [x: string]: any;
}

const fetchUsers = () => {
    return fetcher('https://jsonplaceholder.typicode.com/users');
};

const useUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: async (): Promise<Array<User>> => {
            return await fetchUsers();
        }
    });
};

export { fetchUsers, useUsers };
