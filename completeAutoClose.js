// ==UserScript==
// @name         completeAutoClose
// @namespace    https://github.com/yata-u/AnyScripts
// @updateURL    https://raw.githubusercontent.com/yata-u/AnyScripts/main/completeAutoClose.js
// @downloadURL  https://raw.githubusercontent.com/yata-u/AnyScripts/main/completeAutoClose.js
// @version      1.0
// @description  修了済みのStepを閉じた状態で開始します。
// @author       yata-u
// @match        https://dhw.study.jp/home/course/subject.aspx?id=*
// @icon         https://dhw.study.jp/favicon.ico
// @grant        none
// ==/UserScript==

(async ()=> {
    const wait = async (ms) => new Promise(resolve => setTimeout(resolve, ms));

    let finishes = document.getElementsByClassName('chapter_finish_grid_item');
    for ( let finish of finishes) {
        let inputs = finish.getElementsByTagName('input');
        for ( let input of inputs ) {
            if ( input.getAttribute('type') == 'submit') {
                let inputId = input.getAttribute('id');
                input.click();
                while( document.getElementById(inputId) != null ){
                      await wait(5);
                };
            };
        };
    };
})();
