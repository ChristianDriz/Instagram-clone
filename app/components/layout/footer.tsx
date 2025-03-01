import React from 'react'

export default function Footer() {

    const items = [
        'Meta',
        'About',
        'Blog',
        'Jobs',
        'Help',
        'API',
        'Privacy',
        'Terms',
        'Locations',
        'Instagram Lite',
        'Threads',
        'Contact Uploading & Non-Users',
        'Meta Verified',
        'English',
        '© 2025 Instagram from Meta'
    ]

    return (
        <div className='flex flex-col mb-[52px] px-4 max-md:hidden'>
            <div className='flex flex-wrap gap-4 justify-center my-2.5'>
                {items.slice(0, 13).map((item, idx) => (
                    <a key={idx} className='cursor-pointer text-xs text-[#737373] text-center hover:underline'>{item}</a>
                ))}
            </div>
            <div className='flex gap-4 justify-center my-2.5'>
                {items.slice(13).map((item, idx) => (
                    <a key={idx} className='cursor-pointer text-xs text-[#737373] text-center hover:underline'>{item}</a>
                ))}
            </div>
        </div>
    )
}
