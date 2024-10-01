






// 修改标题
document.addEventListener('DOMContentLoaded', (event) => {
    let originalTitle = document.title; // 记录初始标题
    let hasFocus = true;

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            hasFocus = false; // 页面失去焦点
            document.title = '200 OK | 你咋不看了？'; // 更改标题
        } else {
            hasFocus = true; // 页面获得焦点
            document.title = '呀，你回来了~(^_^)#！'; // 更改标题
            Snackbar.show({
                text: '呀，你回来了，继续看吧！',
                pos: 'top-right',
                showAction: false
            });
            setTimeout(() => { 
                if (hasFocus) {
                    document.title = originalTitle; // 恢复原始标题
                }
            }, 2000); // 等待2秒
        }
    });
});
