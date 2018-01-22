import Home from '../components/Home.vue'
// import Main from '../views/Main.vue'
// import Table from '../views/nav1/Table.vue'
// import Form from '../views/nav1/Form.vue'
// import user from '../views/nav1/user.vue'
import SysUser from "../components/sysuser"


let userRouter = [
    {
        path: '/',
        component: Home,
        name: '系统管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            // { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/sys/user', component: SysUser, name: '用户管理' },
            // { path: '/form', component: Form, name: 'Form' },
            // { path: '/user', component: user, name: '列表' },
        ]
    }
];

export default userRouter;
