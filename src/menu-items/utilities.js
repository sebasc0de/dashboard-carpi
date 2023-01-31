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

const utilities = {
    id: 'utilities',
    title: 'Empresa',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'Productos',
            type: 'item',
            url: '/utils/util-typography',
            icon: icons.IconBox,
            breadcrumbs: false
        },
        {
            id: 'util-color',
            title: 'Pedidos',
            type: 'item',
            url: '/utils/util-color',
            icon: icons.IconFileText,
            breadcrumbs: false
        },
        {
            id: 'util-user',
            title: 'Usuarios',
            type: 'item',
            url: '/utils/util-user',
            icon: icons.IconUser,
            breadcrumbs: false
        },
        {
            id: 'util-shadow',
            title: 'Companias',
            type: 'item',
            url: '/utils/util-shadow',
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

export default utilities;
