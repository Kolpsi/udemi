window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let infoHeader = document.querySelector('.info-header'),
        infoTab = infoHeader.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let  i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        for (let i = b; i < tabContent.length; i++) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }
    }

    infoHeader.addEventListener('click', function(evt) {
        let target = evt.target;
        evt.preventDefault();
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < infoTab.length; i++ ) {
                if (target == infoTab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
});