import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./common/store";

import loginUtils from "@/common/login.js";
// import $ from "jquery";

import {
    Button,
    Row,
    Col,
    Tabbar,
    TabbarItem,
    Icon,
    PullRefresh,
    Toast,
    Tab,
    Tabs,
    List,
    Swipe,
    SwipeItem,
    Lazyload,
    Sku,
    SubmitBar,
    Step,
    Steps,
    Loading,
    Dialog,
    Field,
    NumberKeyboard,
    NavBar,
    DatetimePicker,
    ImagePreview,
    Image,
    Popup,
    Switch,
    RadioGroup,
    Radio,
    Cell,
    Search 
} from "vant";
import 'vant/lib/index.css'
import VueCookies from "vue-cookies";
Vue.use(Button)
    .use(Row)
    .use(Col)
    .use(Tabbar)
    .use(TabbarItem)
    .use(Icon)
    .use(PullRefresh)
    .use(Toast)
    .use(Tab)
    .use(Tabs)
    .use(List)
    .use(Swipe)
    .use(SwipeItem)
    .use(Lazyload)
    .use(Sku)
    .use(SubmitBar)
    .use(Step)
    .use(Steps)
    .use(Loading)
    .use(Dialog)
    .use(Field)
    .use(NumberKeyboard)
    .use(NavBar)
    .use(DatetimePicker)
    .use(ImagePreview)
    .use(Popup)
    .use(Switch)
    .use(RadioGroup)
    .use(Radio)
    .use(Cell)
    .use(Search);
Vue.use(VueCookies);
// import 'vant/packages/vant-css/src/base.css';
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    store, //此处需加入store
    render: h => h(App)
});
router.beforeEach((to, from, next) => {
    console.log(to); //即将要进入的路由对象
    console.log(from); //当前导航要离开的路由对象
    next();
    // if (store.state.isLogin) {
    //     next();
    // } else {
    //     new Promise((resolve, rejects) => {
    //         if (loginUtils.whiteListRouter.indexOf(to.path) !== -1) {
    //             resolve();
    //         }
    //         //判断用户是否已经进行页面微信授权回调code
    //         var code = loginUtils.getUrlParam('code');
    //         if (code == null || code === '') {
    //             // 用户尚未进行微信授权，则调用微信授权的方法，进行授权登录。
    //             //loginUtils.getWechatAuth();
    //             // rejects();
    //         }
    //         // 进行过微信授权之后，重定向回来的url中包含了微信的授权信息，进行服务器登录
    //         loginUtils.wechatLogin(code).then(res => {
    //             store.state.isLogin = true;
    //             store.state.code = code;
    //             resolve()
    //         })
    //     }).then(res => {

    //     })
    // }
});