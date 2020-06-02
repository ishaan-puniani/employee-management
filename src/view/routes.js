const publicRoutes = [
    {
        path: '/landing',
        loader: () => import('view/landing/Landing'),
    },
];
const privateRoutes = [
    {
        path: '/add',
        loader: () =>
            import('view/employee/AddEmployeePage'),
    },
];
const simpleRoutes = [
    {
        path: '/403',
        loader: () =>
            import('view/shared/errors/Error403Page'),
    },
    {
        path: '/500',
        loader: () =>
            import('view/shared/errors/Error500Page'),
    },
    {
        path: '**',
        loader: () =>
            import('view/shared/errors/Error404Page'),
    },
];

export default {
    publicRoutes,
    privateRoutes,
    simpleRoutes,
};
