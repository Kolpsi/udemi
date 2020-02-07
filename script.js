'use strict'

let money = +prompt("Выш бюджет на месяц?", "0");
let time = prompt("Введите дату в формате YYYY-MM-DD");


let appData = {
    cash: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


for (let i = 0; i < 2; i++) {
    let budget = prompt("Введите обязательную статью расходов в этом месяце?", "");
    let sum = prompt("Во сколько обойдется?", "");

    if ((typeof (budget)) === "string" && (typeof (budget)) != null && (typeof (sum)) != null &&
        budget != '' && sum != '' & budget.length < 50) {
        console.log('done');
        appData.expenses[budget] = sum;
    } else {
        
    }
};

appData.moneyPerDay = appData.cash / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уолвень достатка") 
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка")
} else {
    console.log("Произошла ошибка")
}