import { useQuery } from 'react-query';
import fetcher from '@/api/fetcher';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const fetchPosts = () => {
    return fetcher('https://jsonplaceholder.typicode.com/posts');
};

const usePosts = () => {
    return useQuery({
        queryKey: ['posts'],
        queryFn: async (): Promise<Array<Post>> => await fetchPosts()
    });
};

export { fetchPosts, usePosts };
