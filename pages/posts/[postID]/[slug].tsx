import { useRouter } from 'next/router';
import { json } from 'node:stream/consumers';
import * as React from 'react';

export interface SlugProps {
}

export default function Slug(props: SlugProps) {
    const router = useRouter();

    return (
        <div>
            post detail
            <p>{JSON.stringify(router.query)}</p>
        </div>
    );
}
