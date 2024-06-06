export interface ISidebarMenuData {
    label: string,
    path: string,
    icon: string
}

export const sidebarMenu: ISidebarMenuData[] = [
    {
        label: 'Dashboard',
        path: '/admin',
        icon: 'bx-home-alt'
    },
    {
        label: 'Authors',
        path: '/admin/authors',
        icon: 'bx-user'
    },
    {
        label: 'Narrators',
        path: '/admin/narrators',
        icon: 'bx-user-voice'
    },
    {
        label: 'Genres',
        path: '/admin/genres',
        icon: 'bx-mask'
    },
    {
        label: 'Categories',
        path: '/admin/categories',
        icon: 'bx-category'
    },
    {
        label: 'Images',
        path: '/admin/images',
        icon: 'bx-photo-album'
    },
    {
        label: 'Audios',
        path: '/admin/audios',
        icon: 'bx-music'
    },
    {
        label: 'Books',
        path: '/admin/books',
        icon: 'bx-book-alt'
    },
    {
        label: 'Reviews',
        path: '/admin/reviews',
        icon: 'bx-show'
    },
    {
        label: 'Orders',
        path: '/admin/orders',
        icon: 'bx-message-square-edit'
    },
]