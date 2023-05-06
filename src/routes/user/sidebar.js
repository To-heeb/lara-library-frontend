/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
    {
        path: '/user/dashboard', // the url
        icon: 'HomeIcon', // the component being exported from icons/index.js
        name: 'Dashboard', // name that appear in Sidebar
    },
    {
        path: '/user/forms',
        icon: 'FormsIcon',
        name: 'Forms',
    },
    {
        path: '/user/cards',
        icon: 'CardsIcon',
        name: 'Cards',
    },
    {
        path: '/user/charts',
        icon: 'ChartsIcon',
        name: 'User',
    },
    {
        path: '/user/buttons',
        icon: 'ButtonsIcon',
        name: 'Buttons',
    },
    {
        path: '/user/modals',
        icon: 'ModalsIcon',
        name: 'Modals',
    },
    {
        path: '/user/tables',
        icon: 'TablesIcon',
        name: 'Tables',
    },
    {
        icon: 'PagesIcon',
        name: 'Pages',
        routes: [
            // submenu
            {
                path: '/login',
                name: 'Login',
            },
            {
                path: '/create-account',
                name: 'Create account',
            },
            {
                path: '/forgot-password',
                name: 'Forgot password',
            },
            {
                path: '/user/404',
                name: '404',
            },
            {
                path: '/user/blank',
                name: 'Blank',
            },
        ],
    },
]

export default routes
