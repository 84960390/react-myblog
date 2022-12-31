import { lazy } from 'react';
import { Redirect } from 'react-router-dom';
const Home = lazy(() => import('../pages/home'));
const Pictures = lazy(() => import('../pages/pictrues'));
const Share = lazy(() => import('../pages/share'));
const Logs = lazy(() => import('../pages/logs'));
const About = lazy(() => import('../pages/about'));
const Message=lazy(() => import('../pages/message'));
const AddArticle=lazy(() => import('../pages/addArticle'));
const AddAlbum=lazy(() => import('../pages/addAlbum'));
const ShowPic=lazy(() => import('../pages/showPic'));
const Article=lazy(() => import('../pages/article'));
const SelectArticle=lazy(() => import('../pages/selectArticle'));
const Login=lazy(() => import('../pages/login'));
const Admin=lazy(() => import('../pages/admin'));
const AdminHome=lazy(() => import('../pages/admin/adminShare'));
const AdminShare=lazy(() => import('../pages/admin/adminShare'));
const AdminLogs=lazy(() => import('../pages/admin/logs'));
const UserPage = lazy(() => import('../pages/userPage'));
const routes = [
    {
        path: '/',
        exact: true,
        render: () => <Redirect to='/userPage' />,
    }, {
        path: '/userPage',
        component: UserPage,
        routes: [
            {
                path: '/userPage',
                exact: true,
                render: () => <Redirect to='userPage/home' />,
            },
            {
                path: '/userPage/home',
                component: Home
            }, {
                path: '/userPage/pictures',
                component: Pictures
            }, {
                path: '/userPage/share',
                component: Share
            }, {
                path: '/userPage/logs',
                component: Logs
            }, {
                path: '/userPage/about',
                component: About
            }, {
                path: '/userPage/message',
                component: Message
            }, {
                path: '/userPage/addArticle',
                component: AddArticle
            }, {
                path: '/userPage/addAlbum',
                component: AddAlbum
            }, {
                path: '/userPage/showPic/:type',
                component: ShowPic
            }, {
                path: '/userPage/article',
                component: Article
            }, {
                path: '/userPage/selectArticle',
                component: SelectArticle
            }
        ]
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/admin',
        component: Admin,
        routes: [
            {
                path: '/admin',
                exact: true,
                render: () => <Redirect to='admin/home' />,
            },
            {
                path: '/admin/home',
                component: AdminHome
            }, {
                path: '/admin/pictures',
                component: Pictures
            }, {
                path: '/admin/share',
                component: AdminShare
            }, {
                path: '/admin/logs',
                component: AdminLogs
            }, {
                path: '/admin/about',
                component: About
            }, {
                path: '/admin/message',
                component: Message
            }, {
                path: '/admin/addArticle',
                component: AddArticle
            }, {
                path: '/admin/addAlbum',
                component: AddAlbum
            }, {
                path: '/admin/article',
                component: Article
            }, {
                path: '/admin/selectArticle',
                component: SelectArticle
            }
        ]
    }

]
export default routes;