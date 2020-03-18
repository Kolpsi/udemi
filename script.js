'use strict'
let money, time;

function start() {
    money = +prompt("Выш бюджет на месяц?", "0");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Выш бюджет на месяц?", "0");
    }
}

start()


let appData = {
    cash: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let budget = prompt("Введите обязательную статью расходов в этом месяце?", "");
            let sum = prompt("Во сколько обойдется?", "");
        
            if ((typeof (budget)) === "string" && (typeof (budget)) != null && (typeof (sum)) != null &&
                budget != '' && sum != '' & budget.length < 50) {
                console.log('done');
                appData.expenses[budget] = sum;
            } else {
                i = i - 1
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.cash / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уолвень достатка") 
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка")
        } else {
            console.log("Произошла ошибка")
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        appData.optionalExpenses[1] = prompt("Статья необязательных расходов?", "");
        appData.optionalExpenses[2] = prompt("Статья необязательных расходов?", "");
        appData.optionalExpenses[3] = prompt("Статья необязательных расходов?", "");
    },
    chooseIncome: function() {
        for (let i = 0; i < 1; i++) {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
                if ((typeof (items)) === "string" && (typeof (items)) != null &&
                items != '' && isNaN(items)) {
                    appData.income = items.split(', ');
                    appData.income.push(prompt('Может что-то еще?'));
                    appData.income.sort();
            } else {
                i = i - 1;
            }
        }
    }
}
