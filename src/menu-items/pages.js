// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Autenticacion',
    caption: '',
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: 'Usuarios y roles',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'users',
                    title: 'Usuarios',
                    type: 'item',
                    url: '/business/users',
                    breadcrumbs: false
                },
                {
                    id: 'users',
                    title: 'Roles',
                    type: 'item',
                    url: '/business/users',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default pages;
