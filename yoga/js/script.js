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

    let deadline = "2020-08-01";

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

    // modal

let more = document.querySelector('.more');
let overlay = document.querySelector('.overlay');
let close = document.querySelector('.popup-close');
let content = document.querySelector('.content');


close.addEventListener('click', function(evt) {
    evt.preventDefault();
    overlay.style.display = 'none';
    document.body.style.overflow = '';
});


// modal description

let descriptionBtn = document.querySelector('.description-btn');

content.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('description-btn') || evt.target.classList.contains('more')) {
        evt.preventDefault();
        overlay.style.display = 'block';
        evt.target.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }
    
});

// form

let message = {
    loading: 'Загрузка',
    success: 'Спасибо! скоро мы с вами свяжимся',
    failure: 'Что-то пошло не так...'
};

let contactForm = document.querySelector('.contact-form');
let formBack = contactForm.querySelector('#form');
let inputCB = formBack.getElementsByTagName('input');

let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

        function sendFrom(elem) {
            elem.addEventListener('submit', function(evt) {
                evt.preventDefault();
                elem.appendChild(statusMessage);
                let formData = new FormData(elem);

                    function postData(data) {

                        return new Promise(function(resolve, reject) {
                            let request = new XMLHttpRequest();
                            request.open('POST', 'server.php');
                            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                
                            
                            let obj = {};
                
                            formData.forEach(function(value, key) {
                                obj[key] = value;
                            });
                
                            let json = JSON.stringify(obj);
                
                            
                
                            request.onreadystatechange = function() {
                                if (request.readyState < 4) {
                                    resolve();
                                } else if (request.readyState === 4) {
                                    if (request.status === 200 && request.status < 3)
                                    resolve();
                                    } 
                                else {
                                    reject();
                                } 
                            };
                            request.send(json);
                        });
                    }

                    function clearInput () {
                        for (let i = 0; i < input.length; i++) {
                            input[i].value = '';
                        }
                    }
                    

                            postData(formData)
                                .then(() => statusMessage.innerHTML = message.loading)
                                .then(() => {
                                    thanksModal.style.display = 'block';
                                    mainModal.style.display = 'none';
                                    statusMessage.innerHTML = '';
                                })
                                .catch(() => statusMessage.innerHTML = message.failure)
                                .then(clearInput);
            });
        }

        sendFrom(form);
        sendFrom(formBack);



//   formBack.addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     let request = new XMLHttpRequest();
//     request.open('POST', 'server.php');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

//     let formDataCB = new FormData(formBack);

//     let obj = {};

//     formDataCB.forEach(function(value, key) {
//         obj[key] = value;
//     });

//     let json = JSON.stringify(obj);

//     request.send(json);

//     clearInput(inputCB);
//   });
  
});