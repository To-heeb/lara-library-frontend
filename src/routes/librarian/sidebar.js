/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
    {
        path: '/librarian/dashboard', // the url
        icon: 'HomeIcon', // the component being exported from icons/index.js
        name: 'Dashboard', // name that appear in Sidebar
    },
    {
        path: '/librarian/forms',
        icon: 'FormsIcon',
        name: 'Forms',
    },
    {
        path: '/librarian/cards',
        icon: 'CardsIcon',
        name: 'Cards',
    },
    {
        path: '/librarian/charts',
        icon: 'ChartsIcon',
        name: 'Charts',
    },
    {
        path: '/librarian/buttons',
        icon: 'ButtonsIcon',
        name: 'Buttons',
    },
    {
        path: '/librarian/modals',
        icon: 'ModalsIcon',
        name: 'Modals',
    },
    {
        path: '/librarian/tables',
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
                path: '/librarian/404',
                name: '404',
            },
            {
                path: '/librarian/blank',
                name: 'Blank',
            },
        ],
    },
]

export default routes
