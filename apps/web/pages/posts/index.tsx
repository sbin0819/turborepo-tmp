import React from 'react';
import Link from 'next/link';
import { useQueryClient } from 'react-query';
import { usePosts } from '@/api/posts/usePosts';

const Posts = () => {
    const queryClient = useQueryClient();
    const { status, data, error, isFetching } = usePosts();

    return (
        <div>
            <div>
                {Array.isArray(data) &&
                    data.map((post) => (
                        <div key={post.id}>
                            <Link
                                href={`/posts/${post.id}`}
                                style={
                                    // We can access the query data here to show bold links for
                                    // ones that are cached
                                    queryClient.getQueryData(['post', post.id])
                                        ? {
                                              fontWeight: 'bold',
                                              color: 'green'
                                          }
                                        : {
                                              color: '#000'
                                          }
                                }
                            >
                                {post.title}
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Posts;
