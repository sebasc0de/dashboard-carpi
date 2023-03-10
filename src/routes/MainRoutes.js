import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const Products = Loadable(lazy(() => import('views/business/Products')));
const Orders = Loadable(lazy(() => import('views/business/Orders')));
const Lines = Loadable(lazy(() => import('views/business/Lines')));
const Users = Loadable(lazy(() => import('views/business/Users')));
const Roles = Loadable(lazy(() => import('views/business/Roles')));
const Companies = Loadable(lazy(() => import('views/business/Companies')));
const Settings = Loadable(lazy(() => import('views/business/Settings')));

// sample page routing
const SingleUser = Loadable(lazy(() => import('views/single-user-page')));
const SingleProduct = Loadable(lazy(() => import('views/single-product-page')));
const SingleOrder = Loadable(lazy(() => import('views/single-order-page')));
const SingleCompany = Loadable(lazy(() => import('views/single-company-page')));
const SingleLine = Loadable(lazy(() => import('views/single-line-page')));

const CreateCompany = Loadable(lazy(() => import('views/pages/create-company')));
const CreateLine = Loadable(lazy(() => import('views/pages/create-line')));
const CreateUser = Loadable(lazy(() => import('views/pages/create-line')));
const CreateRole = Loadable(lazy(() => import('views/pages/create-line')));
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
                    path: 'lines',
                    element: <Lines />
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
        // Create product page
        {
            path: 'create-company',
            element: <CreateCompany />
        },

        {
            path: 'create-user',
            element: <CreateUser />
        },

        {
            path: 'create-role',
            element: <CreateRole />
        },

        {
            path: 'create-line',
            element: <CreateLine />
        },

        // Single products page
        {
            path: 'users/:id',
            element: <SingleUser />
        },
        {
            path: 'orders/:id',
            element: <SingleOrder />
        },
        {
            path: 'products/:id',
            element: <SingleProduct />
        },
        {
            path: 'companies/:id',
            element: <SingleCompany />
        },
        {
            path: 'lines/:id',
            element: <SingleLine />
        }
    ]
};

export default MainRoutes;
