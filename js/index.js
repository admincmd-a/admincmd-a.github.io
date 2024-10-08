// 主 JS 文件

// 往控制台里写点东西
console.log('Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,');

console.log(`
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
.....................@@@@..................@@@..........................@@@@..............................@@@@@..................................@@@...............
.....................@@@@..................@@@..........................@@@@............................@@@@@@@@@................................@@@...............
.....................@@@@..................@@@..........................@@@@...........................@@@@@@@@@@@...............................@@@...............
....................@@@@@@.................@@@..........................@@@@...........................@@@@@.@@@@@...............................@@@...............
....................@@@@@@.................@@@..........................@@@@..........................@@@@.....@@@@..............................@@@...............
....................@@@@@@.................@@@........................................................@@@@.....@@@@..............................@@@...............
...................@@@@@@@@................@@@........................................................@@@@.....@@@@..............................@@@...............
...................@@@@@@@@.........@@@@@@.@@@...@@@@@@@@@.@@@@.........@@@@.........@@@.@@@@@@......@@@@......@@@@..@@@@@@@@@.@@@@.......@@@@@@.@@@...............
...................@@@@.@@@........@@@@@@@@@@@...@@@@@@@@@@@@@@@........@@@@.........@@@@@@@@@@@.....@@@@......@@@@..@@@@@@@@@@@@@@@.....@@@@@@@@@@@...............
...................@@@..@@@.......@@@@@@@@@@@@...@@@@@@@@@@@@@@@........@@@@.........@@@@@@@@@@@@....@@@@............@@@@@@@@@@@@@@@....@@@@@@@@@@@@...............
..................@@@@..@@@@......@@@@...@@@@@...@@@@@.@@@@@.@@@@.......@@@@.........@@@@@...@@@@....@@@@............@@@@@.@@@@@.@@@@...@@@@...@@@@@...............
..................@@@@..@@@@.....@@@@.....@@@@...@@@@..@@@@..@@@@.......@@@@.........@@@@.....@@@....@@@@............@@@@..@@@@..@@@@..@@@@.....@@@@...............
..................@@@@@@@@@@.....@@@@.....@@@@...@@@@..@@@@..@@@@.......@@@@.........@@@@.....@@@....@@@@......@@@@..@@@@..@@@@..@@@@..@@@@.....@@@@...............
.................@@@@@@@@@@@@....@@@@......@@@...@@@@..@@@@..@@@@.......@@@@.........@@@......@@@....@@@@......@@@@..@@@@..@@@@..@@@@..@@@@......@@@...............
.................@@@@@@@@@@@@....@@@@......@@@...@@@@..@@@@..@@@@.......@@@@.........@@@......@@@....@@@@......@@@@..@@@@..@@@@..@@@@..@@@@......@@@...............
.................@@@@....@@@@....@@@@.....@@@@...@@@@..@@@@..@@@@.......@@@@.........@@@......@@@....@@@@@.....@@@@..@@@@..@@@@..@@@@..@@@@.....@@@@...............
.................@@@@....@@@@....@@@@.....@@@@...@@@@..@@@@..@@@@.......@@@@.........@@@......@@@.....@@@@.....@@@@..@@@@..@@@@..@@@@..@@@@.....@@@@...............
................@@@@......@@@@....@@@@...@@@@@...@@@@..@@@@..@@@@.......@@@@.........@@@......@@@.....@@@@@...@@@@...@@@@..@@@@..@@@@...@@@@...@@@@@...............
................@@@@......@@@@....@@@@@@@@@@@@...@@@@..@@@@..@@@@.......@@@@.........@@@......@@@......@@@@@@@@@@@...@@@@..@@@@..@@@@...@@@@@@@@@@@@...............
................@@@@......@@@@.....@@@@@@@@@@@...@@@@..@@@@..@@@@.......@@@@.........@@@......@@@......@@@@@@@@@@....@@@@..@@@@..@@@@....@@@@@@@@@@@...............
...............@@@@@.......@@@@.....@@@@@@@@@@...@@@@..@@@@..@@@@.......@@@@.........@@@......@@@........@@@@@@@.....@@@@..@@@@..@@@@.....@@@@@@@@@@...............
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
`)
   


// 用户跳过来弄过去改下标题
// 修改标题
document.addEventListener('DOMContentLoaded', (event) => {
    let originalTitle = document.title; // 记录初始标题
    let hasFocus = true;

    // 定义不切换标题的 URL 列表
    const excludedUrls = [
        '6', // 替换为您要排除的完整 URL
        '127.0.0.1:4000/404.html'
    ];
    const lostFocusTitle = '200 OK | 我去，你怎么跑了？|' + originalTitle; // 页面失去焦点时的标题
    const gainedFocusTitle = '呀，你回来了~(^_^)#!'; // 页面获得焦点时的标题

    // 监听页面失去焦点和获得焦点事件
    document.addEventListener('visibilitychange', () => {
        // 检查 URL 是否在排除列表中
        const currentUrl = window.location.href;
        const shouldExclude = excludedUrls.some(url => currentUrl.includes(url));

        if (shouldExclude) {
            return; // 如果 URL 在排除列表中，则直接返回
        }
        if (document.hidden) {
            hasFocus = false; // 页面失去焦点
            // 检查当前标题是不是404，如果是则直接返回
            if (document.title == '页面没有找到 | 管理员 - 命令提示符')
            {
                return;
            }
            document.title = lostFocusTitle; // 更改标题
        } else {
            hasFocus = true; // 页面获得焦点
            if (document.title !== gainedFocusTitle) {
                document.title = gainedFocusTitle; // 更改标题
                Snackbar.show({// 显示信息
                    text: '呀，你回来了，没有跑啊。',
                    pos: 'top-right',
                    showAction: false
                });
                setTimeout(() => { 
                    if (hasFocus) {
                        document.title = originalTitle; // 改回来
                    }
                }, 2000); // 等待2秒
            }
        }
    });
});



// ----------------------
// HTTP透明端口转发：80 8080 8880 2052 2082 2086 2095
// HTTPS隧道端口转发：443 2053 2083 2087 2096 8443
// HTTP/HTTPS端口隧道转发，但以下端口禁用CDN缓存：2052 2053 2082 2083 2086 2087 2095 2096 8880 8443

// 找到所有具有 "post" 的 ID 的链接
const links = document.querySelectorAll('a[id^="post"]');

// 遍历每一个链接并修改其 href
links.forEach(link => {
    link.href = "https://blog.admincmd.xyz/url.html?url=" + encodeURIComponent(link.href);
});
