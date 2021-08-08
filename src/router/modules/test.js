export default  [
    {
        path: '/virtual-list',
        name: 'virtual-list',
        component: () => import('../../views/virtual-list/index.vue')
    },
    {
        path: '/traversal',
        name: 'traversal',
        component: () => import('../../views/traversal/index.vue')
    },
    {
        path: '/lazy-img',
        name: 'lazy-img',
        component: () => import('../../views/lazy-img/index.vue')
    }
]