import React from 'react'

interface Slug {
    params: {
        page: string;
    }
}

export default function page({ params } : Slug ) {
    const { page } = params;

    return (
        <div>This is {page}</div>
    )
}
