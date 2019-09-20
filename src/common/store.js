import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    prizeId: "",
    count: 3,
    code: "",
    isLogin: false,
    loginToUrl: "",
    pro: {},
    datas: {},
    isChooseCouponCFlag: false,
    viewUrl: "https://testapi.fadada.com:8443/api//viewContract.action?app_id=401760&v=2.0&timestamp=20190717135726&contract_id=FLFS-1907171357002797&msg_digest=QkYzNEIzMDE2NTI2MDVDQTM2RjVFRUMwMjk0MUE2Qjc3QTAxMDI2NA==",
    //viewUrl: "https://testapi.fadada.com:8443/api//viewContract.action?app_id=401760&v=2.0&timestamp=20190216105625&contract_id=FLFS-1902161056000493&msg_digest=NzI0NTk4MzBBQjgyM0JFMzVCMUM3MUIyMTYyMDcxQTRBM0Q0QzdDQQ=="
}
const mutations = {

}
const getters = {

}
export default new Vuex.Store({
    state,
    mutations,
    getters
})