'use strict'

let menu = document.querySelector('.menu'),
    menuItem = menu.querySelectorAll('.menu-item'),
    menuLi = document.createElement('li'),
    body = document.querySelector('body'),
    title = document.querySelector('.title'),
    adv = document.querySelector('.adv'),
    user = document.querySelector('.prompt');


    menu.insertBefore(menuItem[2], menuItem[1]);
    menuLi.className = "menu-item";
    menuLi.innerHTML = "Пятый пункт";
    menu.appendChild(menuLi);

    body.style.backgroundImage = 'url(img/apple_true.jpg)';

    title.innerHTML = "Мы продаем только подлинную технику Apple";

    adv.remove();

    function start() {
        let question = prompt("Ваше отношение к техники Apple?", '');
        user.innerHTML = question;
    };

    start();