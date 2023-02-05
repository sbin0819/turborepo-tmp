import { useQuery } from 'react-query';
import fetcher from './fetcher';

interface User {
    id: number;
    name: string;
    [x: string]: any;
}

const fetchUser = (id: number) => {
    return fetcher(`https://jsonplaceholder.typicode.com/users/${id}`);
};

const useUser = (userId: number) => {
    return useQuery({
        queryKey: ['user', userId],
        queryFn: () => fetchUser(userId),
        enabled: !!userId
    });
};

export { fetchUser, useUser };
