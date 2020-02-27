import Vue from 'vue'
import Router from 'vue-router'
import Home from "./Home";
import Consommation from "./views/Consomme";
import Fabrication from "./views/Fabrication";
import Utilisation from "./views/Utilisation";
import Practices from "./views/Practices";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/consommation',
            name: 'consommation',
            component: Consommation
        },
        {
            path: '/practices',
            name: 'practices',
            component: Practices
        },
        {
            path: '/consommation/utilisation',
            name: 'utilisation',
            component: Utilisation
        },
        {
            path: '/consommation/fabrication',
            name: 'fabrication',
            component: Fabrication
        },
    ]
})
