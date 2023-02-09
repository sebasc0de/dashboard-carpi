import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const Products = Loadable(lazy(() => import('views/business/Products')));
const Orders = Loadable(lazy(() => import('views/business/Orders')));
const Users = Loadable(lazy(() => import('views/business/Users')));
const Roles = Loadable(lazy(() => import('views/business/Roles')));
const Companies = Loadable(lazy(() => import('views/business/Companies')));
const Settings = Loadable(lazy(() => import('views/business/Settings')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'business',
            children: [
                {
                    path: 'products',
                    element: <Products />
                }
            ]
        },

        {
            path: 'business',
            children: [
                {
                    path: 'orders',
                    element: <Orders />
                }
            ]
        },
        {
            path: 'business',
            children: [
                {
                    path: 'companies',
                    element: <Companies />
                }
            ]
        },
        {
            path: 'business',
            children: [
                {
                    path: 'users',
                    element: <Users />
                }
            ]
        },
        {
            path: 'business',
            children: [
                {
                    path: 'roles',
                    element: <Roles />
                }
            ]
        },
        {
            path: 'business',
            children: [
                {
                    path: 'settings',
                    element: <Settings />
                }
            ]
        },
        {
            path: 'users/:id',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
