// ==UserScript==
// @name         csdn允许不登录复制，去掉复制小尾巴
// @namespace
// @version      0.1
// @description  csdn允许不登录复制，去掉复制小尾巴
// @author       wangmianzhe
// @match        *://blog.csdn.net/*
// @downloadURL  https://raw.githubusercontent.com/wmz46/tampermonkey-script/main/csdn.js
// @updateURL    https://raw.githubusercontent.com/wmz46/tampermonkey-script/main/csdn.js
// @icon
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (window.location.hostname == "blog.csdn.net") {
        //允许复制
        let preElList = document.querySelectorAll('pre')
        preElList.forEach(el => {
            el.style.userSelect = 'auto'
            let codeEl = el.querySelector('code')
            if (codeEl) {
                codeEl.style.userSelect = 'auto'
            }
        })
        //复制不弹出登录框
        $("#content_views").unbind("copy")
        //去掉复制小尾巴
        if(window.csdn && window.csdn.copyright && window.csdn.copyright.textData){
            window.csdn.copyright.textData=''
        }
        //不关注可查看全文
        const article_content = document.querySelector('#article_content')
        if(article_content){
            article_content.style.height = ""
            article_content.style.overflow = ""
        }
        const mask = document.querySelector('#mainBox > main > div.hide-article-box.hide-article-pos.text-center')
        if(mask){
            mask.style.display='none'
        }
    }
})();
