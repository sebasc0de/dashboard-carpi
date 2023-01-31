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
            id: 'prices',
            title: 'Lista de precios',
            type: 'collapse',
            icon: icons.IconCurrencyDollar,
            children: [
                {
                    id: 'prices',
                    title: 'Tabler Icons',
                    type: 'item',
                    url: '/business/prices',
                    breadcrumbs: false
                },
                {
                    id: 'prices',
                    title: 'Material Icons',
                    type: 'item',
                    url: '/business/prices',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default business;
