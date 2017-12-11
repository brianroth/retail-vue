import ItemList from './ItemList.vue';
import LocationList from './LocationList.vue';

export const routes = [
    { path: '', components: { default: ItemList} },
    { path: '/items', component: ItemList },
    { path: '/locations', component: LocationList },
    { path: '*', component: { template: '<h1>Page Not Found!</h1>' } }
];