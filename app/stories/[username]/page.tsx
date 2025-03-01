

import React from 'react'

interface Props {
    params: {
        username: string;
    }
}

export default function page({ params }: Props ) {

    const { username } = params;

    return (    
        <div>
            this is username: {username}
        </div>
    )
}
