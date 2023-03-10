// assets
import { IconBox, IconLine, IconUser, IconCurrencyDollar, IconBuildingStore, IconFileText, IconSettings } from '@tabler/icons';

// constant
const icons = {
    IconUser,
    IconBuildingStore,
    IconFileText,
    IconBox,
    IconCurrencyDollar,
    IconSettings,
    IconLine
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const business = {
    id: 'business',
    title: 'Empresa',
    type: 'group',
    children: [
        {
            id: 'companies',
            title: 'Companias',
            type: 'item',
            url: '/business/companies',
            icon: icons.IconBuildingStore,
            breadcrumbs: false
        },
        {
            id: 'products',
            title: 'Productos',
            type: 'item',
            url: '/business/products',
            icon: icons.IconBox,
            breadcrumbs: false
        },
        {
            id: 'lines',
            title: 'Lineas de productos',
            type: 'item',
            url: '/business/lines',
            icon: icons.IconLine,
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
            id: 'settings',
            title: 'Configuraciones',
            type: 'item',
            url: '/business/settings',
            icon: icons.IconSettings,
            breadcrumbs: false
        }
    ]
};

export default business;
