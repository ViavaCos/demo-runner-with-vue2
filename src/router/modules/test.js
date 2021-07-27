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
    }
]