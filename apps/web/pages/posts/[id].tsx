import React from 'react';
import { usePost } from '@/api/posts/usePost';
import { GetServerSideProps } from 'next';

const Post = ({ postId }: { postId: string }) => {
    const postQuery = usePost(+postId);

    return <div>1</div>;
};

export default Post;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query } = context;
    const { id } = query;
    return {
        props: {
            postId: id
        }
    };
};
