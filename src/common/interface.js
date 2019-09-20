import axios from "axios";
import Qs from "qs";
const ajax = {
    GET_SALE_LIST: "/web/transferApply/list", //转让列表
    GET_PRIZE_LIST: "/web/stationOnTrial/list", //兑奖人信息列表
    WECHAT_LOGIN: "/login/wx/login", //微信登录
    WECHAT_LOGIN_TEST: "/login/wx/testLogin", //微信登录测试
    GET_PRO_LIST: "/web/station/list", //获取项目列表
    GET_LOGIN_USER: "/web/user/getLoginUser", //获取登录用户信息

    GET_MYPROFIT: "/web/station/getMyProfit", //获取我的收益
    GET_INTERGRALHIS: "/web/station/getIntegralHistoryList", //获取积分收益历史
    GET_MYSTATION_LIST: "/web/station/getMyStationList", //获取我的电站
    GET_STATION_DETAIL: "/web/station/getFull", //获取电站详情
    CREATE_ORDER: "/portal/order/pay/createStationSubscribeOrder", //预创建订单
    GET_ORDER_BYID: "/portal/order/manage/get", //通过订单id获取订单详情
    PREPAY: "/portal/order/pay/prepay", //调微信支付
    GET_ORDER_LIST: "/portal/order/manage/listStationSubscribe", //用户获取订单列表
    PRESENT: "/web/withdrawApply/withdrawApplyForTrial", //试用提现
    DEL_LOGIN: "/login", //开发登录
    PUBLIC_MYSALE: "/web/trade/releaseTradeInfo", //发布我的转让
    GET_MY_SALE: "/web/trade/listByUserId", //获取我的发布
    GET_TRADE_LIST: "/web/trade/list", //获取交易列表
    GET_PLATFORM_STATIONS: "/web/station/getSelectList", //获取交易列表电站选择数据
    TEST_PAY: "/portal/order/pay/prepayFixedAmount", //测试浦发支付
    UPDATE_SHOW_STATUS: "/web/trade/updateShowStatus", //更新交易大厅我的订单状态
    EDIT_TRADE_INFO: "/web/trade/editTradeInfo", //用户修改交易大厅订单
    PUFA_PAY: "/portal/order/pay/prepayFixedAmount", //浦发支付接口
    TRADE_ORDER: "/web/trade/createTradeOrder", //交易下单
    GET_STATION_ANALYSIS: "/web/station/getStationAnalysis", //获取电站信息
    GET_STATION_ARRAYINFO: "/web/station/arrayInfoListByStationId", //获取电站整列信息
    GET_STATION_INFOFULL: "/web/station/getFull", //获取电站完全信息
    GET_STATION_GENERATION: "/web/station/getStationGeneration", //获取电站一般信息
    GET_CODE_LIST_ARRAY: "/web/station/codeListByArrayId", //获取阵列信息
    GET_HIS_TOPINFO: "/web/trade/getTradeTotalNumber", //获取交易记录顶部数据
    GET_LIST_HIS: "/web/trade/getTradeMessage", //获取平台交易记录
    CANCEL_ORDER: "/portal/order/manage/cancel", //用户端取消订单
    CHECK_WITHDRAW_APPLAY_STATUS: "/web/withdrawApply/withdrawApplyStatus", //检查是否需要绑卡，退款时候

    REFUND: "/web/withdrawApply/withdrawApplyForRefund", // 预售电站订金退款
    GET_REFUND_DETAILS: "/web/withdrawApply/getRefundDetails", //获取退订金详情信息
    SET_BANK_CARD_INFO: "/web/withdrawApply/setBankCardInfo", // 设置绑定银行卡信息
    CEHCK_IS_PRIZED: "/web/stationOnTrial/checkStatus2", //检查是否领奖了
    CEHCK_IS_PRIZED_2: "/web/stationOnTrial/checkStatus", //检查是否领奖了,链接带id
    RECIEVE_REWARD: "/web/stationOnTrial/receiveTrial2", //领奖
    RECIEVE_REWARD_2: "/web/stationOnTrial/receiveTrial", //领奖,链接带id
    GET_PRE_CONTRACT: "/portal/order/manage/generateContract", //合同链接
    BUF_PAY: "/portal/order/pay/bufpay", //buf支付测试
    GET_BILLS_LIST: "/bill/manage/listForBill", //获取账单列表信息
    GET_BILL_DETAIL: "/bill/manage/billDetail", //获取账单详情

    GET_TRAIL_ADD: "/web/stationOnTrial/getTrailAdd", //获取体验电站人数
    CEHCK_TRAIL_NUMBER: "/portal/order/pay/checkTrailNumber", //判断库存
    GET_EXAMSTATION_STOCK: "/portal/order/pay/checkTrailNumber", //获取体验电站剩余数量
    GET_EXAMSTATION_BUYNUM: "/admin/config/get_receive_trail_number", //获取体验电站默认购买数量
    GET_TRIAL: "/web/stationOnTrial/getTrial", //获取用户扫码电站是否试用过期信息

    CREAT_TRIAL_COUPON: "/web/stationOnTrial/creatTrialCoupon", //用户生成体验电站优惠券
    GET_COUPON_LIST: "/web/stationOnTrial/couponListForUser", //用户查询拥有优惠券
    GET_USER_INTEGRAL: "/web/integral/integralForUser", //查询积分
    CHANGE_INTEGRAL: "/web/integral/changeIntegral", //转化积分
    HANDLE_INTEGRAL: "/web/integral/userHandleOnIntegral", //是否开启积分转化
    INTEGRAL_LIST: "/web/integral/integralUserLog", //积分明细列表
    VERIFY_LOGIN: "/portal/verify_login", //验证toekn
    PROFIT_RATE: "/web/station/profitRate/listByStationId" //
};
// 提取公共部分
const API_PATH_PRE_FIX = "http://gzh.pvces.com/solar-future"; //正式库
const API_PATH_DEV_FIX = "http://renren.pvces.com/solar-future"; //测试库http://map.pvces.com/solar-future

// 增加接口模块前缀
let INTERFACE = {};
for (let key in ajax) {
    INTERFACE[key] = API_PATH_DEV_FIX + ajax[key];
}

/**
 * 方式1： 多参数情况  获取列表
 * @param data 参数
 * @returns {*}
 */
const requestMethods = {
    profitRate: function(params) {
        return axios
            .get(INTERFACE.PROFIT_RATE, { params: params })
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    renrenUrl: function() {
        var url =
            "http://renren.pvces.com/app/index.php?i=11743&c=entry&m=ewei_shopv2&do=mobile&r=account.login&loginType=sso&backurl=";
        return url;
    },
    verifyLogin: function(params) {
        return axios
            .post(INTERFACE.VERIFY_LOGIN, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    integralUserLog: function(params) {
        return axios
            .post(INTERFACE.INTEGRAL_LIST, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    userHandleOnIntegral: function(params) {
        return axios
            .post(INTERFACE.HANDLE_INTEGRAL, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    changeIntegral: function(params) {
        return axios
            .post(INTERFACE.CHANGE_INTEGRAL, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    integralForUser: function(params) {
        return axios
            .post(INTERFACE.GET_USER_INTEGRAL, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    creatTrialCoupon: function(params) {
        return axios
            .post(INTERFACE.CREAT_TRIAL_COUPON, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    getCouponList: function(params) {
        return axios
            .post(INTERFACE.GET_COUPON_LIST, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    getTrial: function(params) {
        return axios
            .get(INTERFACE.GET_TRIAL, {
                params: params
            })
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    getExamStationBuyNum: function(params) {
        return axios
            .post(INTERFACE.GET_EXAMSTATION_BUYNUM, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    checkTrailNumber: function(params) {
        return axios
            .post(INTERFACE.GET_EXAMSTATION_STOCK, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },

    checkTrailNumber: function(params) {
        return axios
            .post(INTERFACE.CEHCK_TRAIL_NUMBER, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    getTrailAdd: function(params) {
        return axios
            .post(INTERFACE.GET_TRAIL_ADD, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },

    getBillDetail: function(params) {
        return axios
            .get(INTERFACE.GET_BILL_DETAIL, { params: params })
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    getBillsList: function(params) {
        return axios
            .get(INTERFACE.GET_BILLS_LIST, { params: params })
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    bufPay: function(params) {
        return axios
            .post(INTERFACE.BUF_PAY, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    generateContract: function(params) {
        return axios
            .post(INTERFACE.GET_PRE_CONTRACT, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    recieveReward_2: function(params) {
        return axios
            .post(INTERFACE.RECIEVE_REWARD_2, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    recieveReward: function(params) {
        return axios
            .post(INTERFACE.RECIEVE_REWARD, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    checkRewardStatusHaveId: function(params) {
        return axios
            .post(INTERFACE.CEHCK_IS_PRIZED_2, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    checkIsPrized: function(params) {
        return axios
            .post(INTERFACE.CEHCK_IS_PRIZED, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    checkWithdrawApplayStatus: function(params) {
        return axios
            .get(INTERFACE.CHECK_WITHDRAW_APPLAY_STATUS, { params: params })
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    setBankCardInfo: function(params) {
        return axios
            .post(INTERFACE.SET_BANK_CARD_INFO, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    refund: function(params) {
        return axios
            .post(INTERFACE.REFUND, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    getRefundDetails: function(params) {
        return axios
            .get(INTERFACE.GET_REFUND_DETAILS, { params: params })
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    cancelOrder: function(params) {
        return axios
            .post(INTERFACE.CANCEL_ORDER, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    getListHis: function(params) {
        return axios
            .get(INTERFACE.GET_LIST_HIS, { params: params })
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    getHisTopInfo: function(params) {
        return axios
            .get(INTERFACE.GET_HIS_TOPINFO, { params: params })
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    codeListByArrayId: function(params) {
        return axios
            .get(INTERFACE.GET_CODE_LIST_ARRAY, { params: params })
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    getStationGeneration: function(params) {
        return axios
            .get(INTERFACE.GET_STATION_GENERATION, { params: params })
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    getStationInfoFull: function(params) {
        return axios
            .get(INTERFACE.GET_STATION_INFOFULL, { params: params })
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    arrayInfoListByStationId: function(params) {
        return axios
            .get(INTERFACE.GET_STATION_ARRAYINFO, { params: params })
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    getStationAnalysis: function(params) {
        return axios
            .get(INTERFACE.GET_STATION_ANALYSIS, { params: params })
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    tradeOrder: function(params) {
        return axios
            .post(INTERFACE.TRADE_ORDER, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    pufaPay: function(params) {
        return axios
            .post(INTERFACE.PUFA_PAY, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    editTradeInfo: function(params) {
        return axios
            .post(INTERFACE.EDIT_TRADE_INFO, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    updateShowStatus: function(params) {
        return axios
            .post(INTERFACE.UPDATE_SHOW_STATUS, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    testPay: function(params) {
        return axios
            .post(INTERFACE.TEST_PAY, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    getPlatformStations: function(params) {
        return axios
            .get(INTERFACE.GET_PLATFORM_STATIONS, {
                params: params
            })
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    getTradeList: function(params) {
        return axios
            .get(INTERFACE.GET_TRADE_LIST, {
                params: params
            })
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    getMySale: function(params) {
        return axios
            .get(INTERFACE.GET_MY_SALE, {
                params: params
            })
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    publicMySale: function(params) {
        return axios
            .post(INTERFACE.PUBLIC_MYSALE, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    present: function(params) {
        return axios
            .post(INTERFACE.PRESENT, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    getOrderList: function(params) {
        return axios
            .get(INTERFACE.GET_ORDER_LIST, {
                params: params
            })
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    wechatPay: function(params) {
        return axios
            .post(INTERFACE.PREPAY, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    getOrderById: function(params) {
        return axios
            .get(INTERFACE.GET_ORDER_BYID, {
                params: params
            })
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    createStationSubscribeOrder: function(params) {
        return axios
            .post(INTERFACE.CREATE_ORDER, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    getStationDetail: function(params) {
        return axios
            .get(INTERFACE.GET_STATION_DETAIL, {
                params: params
            })
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    getMyStationList: function(params) {
        return axios
            .get(INTERFACE.GET_MYSTATION_LIST, {
                params: params
            })
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    getIntegralHistoryList: function(params) {
        return axios
            .get(INTERFACE.GET_INTERGRALHIS, {
                params: params
            })
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    getMyProfit: function(params) {
        return axios
            .get(INTERFACE.GET_MYPROFIT, {
                params: params
            })
            .catch(function(error) {
                console.info("报错", error);
            });
    },

    getLoginUser: function(params) {
        return axios
            .get(INTERFACE.GET_LOGIN_USER, {
                params: params
            })
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    getProList: function(params) {
        return axios
            .get(INTERFACE.GET_PRO_LIST, {
                params: params
            })
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    wechatLoginTest: function(params) {
        return axios
            .post(INTERFACE.WECHAT_LOGIN_TEST, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    wechatLogin: function(params) {
        return axios
            .post(INTERFACE.WECHAT_LOGIN, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    getPrizeList: function(params) {
        return axios
            .post(INTERFACE.GET_PRIZE_LIST, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    getSaleList: function(params) {
        return axios
            .get(INTERFACE.GET_SALE_LIST, {
                params: params
            })
            .catch(function(error) {
                console.info("报错", error);
            });
    },
    delLogin: function(params) {
        return axios
            .post(INTERFACE.DEL_LOGIN, Qs.stringify(params))
            .catch(function(error) {
                console.info("报错", error);
            });
    }
};

const toolUtils = {
    getDateFormat: oldTime => {
        var date = new Date(oldTime);
        var year = date.getFullYear();
        var month = parseInt(date.getMonth()) + 1;
        if ((month + "").length == 1) {
            month = "0" + month;
        }
        var day = date.getDate();
        if ((day + "").length == 1) {
            day = "0" + day;
        }
        return year + "-" + month + "-" + day;
    },
    getDateFormat2: oldTime => {
        var date = new Date(oldTime);
        var year = date.getFullYear();
        var month = parseInt(date.getMonth()) + 1;
        var day = date.getDate();
        var hour = date.getHours(); //得到小时
        var minu = date.getMinutes(); //得到分钟
        var sec = date.getSeconds(); //得到
        return year + "-" + month + "-" + day + " " + hour + ":" + minu + ":" + sec;
    },
    getUrlParam: name => {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
};

export default {
    requestMethods,
    toolUtils
};