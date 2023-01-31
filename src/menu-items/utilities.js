// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill, IconBuildingStore, IconFileText } from '@tabler/icons';

// constant
const icons = {
    IconShadow,
    IconWindmill,
    IconBuildingStore,
    IconFileText
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
            icon: icons.IconBuildingStore,
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
            id: 'util-shadow',
            title: 'Companias',
            type: 'item',
            url: '/utils/util-shadow',
            icon: icons.IconShadow,
            breadcrumbs: false
        },
        {
            id: 'icons',
            title: 'Lista de precios',
            type: 'collapse',
            icon: icons.IconWindmill,
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
