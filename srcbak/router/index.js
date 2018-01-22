import Vue from 'vue'
import VueRouter from "vue-router";
import commonUtil from "../util/commonUtil.js"

//路由配置
import sysRouter from './sys.js'
import defaultRouter from './default.js'

//路由合并
var routerConfig = commonUtil.merge(defaultRouter,sysRouter);


Vue.use(VueRouter);

// 创建一个路由器实例
const router = new VueRouter({
  mode: 'history',
  // base: __dirname,
  routes: routerConfig
});


export default router;
