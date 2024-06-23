setTimeout(function () {
    Snackbar.show({
        text: '正在加载文件...',
        pos: 'top-center',
        actionText: "",
        onActionClick: function (element) {
            window.open("")
        },
    })
}, 2500)
//首次访问弹窗
if (localStorage.getItem("popWelcomeWindow") != "0") {
    if(document.referrer==undefined||document.referrer.indexOf("blog.admincmd.xyz")!=-1||document.referrer.indexOf("blog.admincmd.xyz")!=-1){ //改成自己域名，注意是referrer!!! qwq
        Snackbar.show({
            pos: "top-right",
            showAction: false,
            text: '欢迎访问本站！ 您正在使用 默认 部署源，如速度不合适，请 线路 > 切源'
        })
    }else{
        if(document.referrer==undefined||document.referrer.indexOf("vercel-blog.admincmd.xyz")!=-1){
            Snackbar.show({
                pos: "top-right",
                showAction: false,
                text: '欢迎访问本站！ 您正在使用 Vercel 部署源，如速度不合适，请 线路 > 切源'
            })
        }else{
            if(document.referrer==undefined||document.referrer.indexOf("netlify-blog.admincmd.xyz")!=-1){
                Snackbar.show({
                    pos: "top-right",
                    showAction: false,
                    text: '欢迎访问本站！ 您正在使用 Netlify 部署源，如速度不合适，请 线路 > 切源'
                })
            }else{
                if(document.referrer==undefined||document.referrer.indexOf("localhost:4000")!=-1){
                    Snackbar.show({
                        pos: "top-right",
                        showAction: false,
                        text: '您正在使用调试环境'
                    })
                }else{
                    Snackbar.show({
                            pos: "top-right",
                            showAction: false,
                            // text: `欢迎访问本站！`
                            text: `欢迎从来自${document.referrer.split("://")[1].split("/")[0]}的访问本站！`
                        })
    localStorage.setItem("popWelcomeWindow", "0");
        }
    }
}
if (sessionStorage.getItem("popCookieWindow") != "0") {
    setTimeout(function () {
        Snackbar.show({
            text: 'INFO 本站使用 Cookie 和本地 会话存储 保证浏览体验和网站统计',
            pos: 'top-right',
            actionText: "查看博客声明",
            onActionClick: function (element) {
                window.open("/license")
            },
        })
    }, 3500)
    // setTimeout(function () {
        // Snackbar.show({
            // text: '控制面板位于 杂项 > 控制面板',
            // pos: 'top-right',
           //- // pos: 'bottom-right',
            // actionText: "单击此处打开控制面板",
            // onActionClick: function (element) {
                // window.open("javascript:toggleWinbox()")
            // },
        // })
    // }, 7500)
    // setTimeout(function () {
        // Snackbar.show({
            // text: '控制面板位于 杂项 > 控制面板',
            // pos: 'top-right',
            // actionText: "单击此处打开控制面板",
            // onActionClick: function (element) {
                // window.open("javascript:toggleWinbox();")
            // },
        // })
    // }, 7500)
}
//不在弹出Cookie提醒
sessionStorage.setItem("popCookieWindow", "0");

setTimeout(function () {
    Snackbar.show({
        text: '作者从不更新！',
        pos: 'top-center',
        actionText: "",
        onActionClick: function (element) {
            window.open("")
        },
    })
}, 2500)
//自带上文浏览器提示

function browserTC() {
    btf.snackbarShow("");
    Snackbar.show({
        text: '浏览器版本较低，网站样式可能错乱',
        actionText: 'OK',
        duration: '16000',
        pos: 'bottom-right'
    });
    Snackbar.show({
        text: '调用失败',
        actionText: '',
        duration: '999999999',
        pos: 'bottom-right'
    });
}
function browserVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //Edge浏览器
    var isFirefox = userAgent.indexOf("Firefox") > -1; //Firefox浏览器
    var isOpera = userAgent.indexOf("Opera")>-1 || userAgent.indexOf("OPR")>-1 ; //Opera浏览器
    var isChrome = userAgent.indexOf("Chrome")>-1 && userAgent.indexOf("Safari")>-1 && userAgent.indexOf("Edge")==-1 && userAgent.indexOf("OPR")==-1; //Chrome浏览器
    var isSafari = userAgent.indexOf("Safari")>-1 && userAgent.indexOf("Chrome")==-1 && userAgent.indexOf("Edge")==-1 && userAgent.indexOf("OPR")==-1; //Safari浏览器
    if(isEdge) {
        if(userAgent.split('Edge/')[1].split('.')[0]<90){
            browserTC()
        }
    } else if(isFirefox) {
        if(userAgent.split('Firefox/')[1].split('.')[0]<90){
            browserTC()
        }
    } else if(isOpera) {
        if(userAgent.split('OPR/')[1].split('.')[0]<80){
            browserTC()
        }
    } else if(isChrome) {
        if(userAgent.split('Chrome/')[1].split('.')[0]<90){
            browserTC()
        }
    } else if(isSafari) {
        //不知道Safari哪个版本是该淘汰的老旧版本
    }
}
//2022-10-29修正了一个错误：过期时间应使用toGMTString()，而不是toUTCString()，否则实际过期时间在中国差了8小时
function setCookies(obj, limitTime) {
    let data = new Date(new Date().getTime() + limitTime * 24 * 60 * 60 * 1000).toGMTString()
    for (let i in obj) {
        document.cookie = i + '=' + obj[i] + ';expires=' + data
    }
}
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
if(getCookie('browsertc')!=1){
    setCookies({
        browsertc: 1,
    }, 1);
    browserVersion();
}