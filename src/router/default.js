import Login from '../components/Login.vue'
import NotFound from '../components/404.vue'

let defaultRouter = [{
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    }];

export default defaultRouter
