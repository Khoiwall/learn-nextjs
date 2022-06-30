import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostDetailProps {
}

export default function PostDetail(props: PostDetailProps) {
    const router = useRouter();
    return (
        <div>
            post detail
            <p>{JSON.stringify(router.query)}</p>
        </div>
    );
}
