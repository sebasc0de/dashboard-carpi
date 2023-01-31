// assets
import { IconBox, IconUser, IconCurrencyDollar, IconBuildingStore, IconFileText } from '@tabler/icons';

// constant
const icons = {
    IconUser,
    IconBuildingStore,
    IconFileText,
    IconBox,
    IconCurrencyDollar
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const business = {
    id: 'business',
    title: 'Empresa',
    type: 'group',
    children: [
        {
            id: 'products',
            title: 'Productos',
            type: 'item',
            url: '/business/products',
            icon: icons.IconBox,
            breadcrumbs: false
        },
        {
            id: 'orders',
            title: 'Pedidos',
            type: 'item',
            url: '/business/orders',
            icon: icons.IconFileText,
            breadcrumbs: false
        },
        {
            id: 'users',
            title: 'Usuarios',
            type: 'item',
            url: '/business/users',
            icon: icons.IconUser,
            breadcrumbs: false
        },
        {
            id: 'companies',
            title: 'Companias',
            type: 'item',
            url: '/business/companies',
            icon: icons.IconBuildingStore,
            breadcrumbs: false
        },
        {
            id: 'icons',
            title: 'Lista de precios',
            type: 'collapse',
            icon: icons.IconCurrencyDollar,
            children: [
                {
                    id: 'tabler-icons',
                    title: 'Tabler Icons',
                    type: 'item',
                    url: '/icons/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'material-icons',
                    title: 'Material Icons',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default business;
