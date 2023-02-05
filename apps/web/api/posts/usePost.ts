import { useQuery } from 'react-query';
import fetcher from '@/api/fetcher';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const getPostById = (id: number) => {
    return fetcher(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

const usePost = (postId: number) => {
    return useQuery({
        queryKey: ['post', postId],
        queryFn: async (): Promise<Post> => await getPostById(postId),
        enabled: !!postId
    });
};

export { getPostById, usePost };
