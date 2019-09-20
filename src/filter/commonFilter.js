function toMoney(money = 0) {
    return money.toFixed(2);
}

function toNumFixed2(num = 0) {
    return num.toFixed(2);
}

function num100(num = 0) {
    return (num * 100).toFixed(2);
}

function addPreUrl(imgUrl) {
    return "http://static.pvces.com/" + imgUrl;
}

function formatData(date) {
    var date = new Date(date);
    var year = date.getFullYear();
    var month = parseInt(date.getMonth()) + 1;
    if ((month + "").length == 1) {
        month = month;
    }
    var day = date.getDate();
    if ((day + "").length == 1) {
        day = day;
    }
    return month + "月" + day + "日";
}

function formatDate_sec(oldTime) {
    var date = new Date(oldTime);
    var year = date.getFullYear();
    var month = parseInt(date.getMonth()) + 1;
    var day = date.getDate();
    var hour = date.getHours(); //得到小时
    var minu = date.getMinutes(); //得到分钟
    var sec = date.getSeconds(); //得到
    return year + "-" + month + "-" + day + " " + hour + ":" + minu + ":" + sec;
}

function formatData_(oldTime) {
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
}

function setPrice(data) {
    var expireTime = data.expireTime; //折扣过期时间
    if (new Date().getTime() > expireTime) {
        return data.price;
    } else {
        return data.discountPrice;
    }
}
export default {
    toMoney,
    num100,
    toNumFixed2,
    addPreUrl,
    formatData,
    formatData_,
    formatDate_sec,
    setPrice
};