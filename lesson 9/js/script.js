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

    // timer 

    let deadline = "2020-04-01"

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor((t / (1000 * 60 * 60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClok, 1000);

        function updateClok() {
            let t = getTimeRemaining(endtime);

            hours.textContent = pad(t.hours),
            minutes.textContent = pad(t.minutes),
            seconds.textContent = pad(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    function pad(x) {
        return x < 10 ? '0' + x : x;
      }

    setClock('timer', deadline);
});
