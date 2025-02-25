export interface Icon {
    name: string;
    icon: string;
    isActive?: boolean;
}

export const NavIcons: Icon[] = [
    { 
        name: 'home',
        icon: '/icons/light home active.svg',
        isActive: true,
    },
    { 
        name: 'search',
        icon: '/icons/light search.svg',
        isActive: false
    },
    { 
        name: 'explore',
        icon: '/icons/light explore.svg',
        isActive: false
    },
    { 
        name: 'reels',
        icon: '/icons/light reels.svg',
        isActive: false
    },
    { 
        name: 'messages',
        icon: '/icons/light messages.svg',
        isActive: false
    },
    { 
        name: 'notifications',
        icon: '/icons/light heart.svg',
        isActive: false
    },
    { 
        name: 'create',
        icon: '/icons/light create.svg',
        isActive: false
    },
    { 
        name: 'profile',
        icon: '/icons/user.svg',
    }
]

export const Mobile_NavIcons: Icon[] = [
    { 
        name: 'home',
        icon: '/icons/light home active.svg',
        isActive: true,
    },
    { 
        name: 'explore',
        icon: '/icons/light explore.svg',
        isActive: false
    },
    { 
        name: 'reels',
        icon: '/icons/light reels.svg',
        isActive: false
    },
    { 
        name: 'create',
        icon: '/icons/light create.svg',
        isActive: false
    },
    { 
        name: 'messages',
        icon: '/icons/light messages.svg',
        isActive: false
    },
    { 
        name: 'profile',
        icon: '/icons/user.svg',
    }
]

export const Logo: Icon[] = [
    { 
        name: 'ig_big',
        icon: '/icons/instagram big.svg',
    },
    { 
        name: 'ig_mini',
        icon: '/icons/instagram mini.svg',
    }
]

export const More: Icon[] = [
    { 
        name: 'threads',
        icon: '/icons/light threads.svg',
    },
    { 
        name: 'more',
        icon: '/icons/light more.svg',
    },
]

export const Feed_Icons: Icon[] = [
    { 
        name: 'heart',
        icon: '/icons/light heart.svg',
    },
    { 
        name: 'comment',
        icon: '/icons/comment.svg',
    },
    { 
        name: 'share',
        icon: '/icons/share.svg',
    },
    { 
        name: 'save',
        icon: '/icons/save.svg',
    },
    {
        name: 'options',
        icon: '/icons/More options.svg',
    },
    {
        name: 'emoji',
        icon: '/icons/emoji.svg',
    }
]

