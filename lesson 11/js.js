'use strict';

let age = document.getElementById('age');

function showUser(surname, name) {
    age.addEventListener('change', function(evt) {
        evt.preventDefault();
        alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    });
}

showUser('Петров', 'Васек');

