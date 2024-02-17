import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
        path: '/person', component: () => import('./Components/Person/IndexComponent.vue'),
        name: 'person.index'
    },
    {
        path: '/person/create', component: () => import('./Components/Person/CreateComponent.vue'),
        name: 'person.create'
    },
    {
        path: '/person/:id/edit', component: () => import('./Components/Person/EditComponent.vue'),
        name: 'person.edit'
    },
    {
        path: '/person/:id/show', component: () => import('./Components/Person/ShowComponent.vue'),
        name: 'person.show'
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
