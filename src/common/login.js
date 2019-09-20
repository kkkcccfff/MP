import store from "@/common/store";
import INTERFACE from "./interface.js";

const whiteListRouter = [];
const APPID = "wx3653e6b0d718a815";

// 判断用户是否已经在当前页面进行微信授权
function getUrlParam(name) {
    var reg = new RegExp(name + "=([^&]*)(&|$)");
    var r = window.location.href.match(reg);
    //var r = "http://localhost:8080/#/?state=123a&code=123adafa".match(reg);
    if (r != null) return r[1];
    return null;
}

// 进行过微信授权之后，重定向回来的url中包含了微信的授权信息，可以将url上截取的参数发送到服务器，换取用户的token，随后进入上述有token时候的步骤
function getWechatUserInfo() {
    return new Promise(function(resolve, reject) {
        resolve();
    });
}
// 用户尚未进行微信授权，则调用微信授权的方法，进行授权登录scope为 snsapi_base)。
function getWechatAuth() {
    const localUrl = window.location.href;
    console.info("重定向链接redirect_uri：", localUrl);
    window.location.href =
        "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
        APPID +
        "&redirect_uri=" +
        encodeURIComponent(localUrl) +
        "&response_type=code&scope=snsapi_base&state=123#wechat_redirect";
}
// 用户尚未进行微信授权，则调用微信授权的方法，进行授权登录,测试scope为 snsapi_userinfo)。
function getWechatAuthTest() {
    const localUrl = window.location.href;
    console.info("重定向链接redirect_uri：", localUrl);
    var url =
        "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
        APPID +
        "&redirect_uri=" +
        encodeURIComponent(localUrl) +
        "&response_type=code&scope=snsapi_base&state=123#wechat_redirect";
    window.open(url);
    //window.location.href = url;
}

function wechatLoginTest(code) {
    return new Promise(function(resolve, reject) {
        var params = {
            code: code
        };
        var that = this;
        INTERFACE.requestMethods.wechatLoginTest(params).then(response => {
            console.info("登录成功", response);
            resolve();
        });
    });
}

function wechatLogin(code) {
    return new Promise(function(resolve, reject) {
        var params = {
            code: code
        };
        var that = this;
        INTERFACE.requestMethods.wechatLogin(params).then(response => {
            console.info("登录成功", response);
            resolve();
        });
    });
}
export default {
    whiteListRouter,
    getWechatUserInfo,
    getWechatAuth,
    getWechatAuthTest,
    getUrlParam,
    wechatLogin,
    wechatLoginTest
};