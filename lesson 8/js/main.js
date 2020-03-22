'use strict';

let start = document.getElementById('start'),
    result = document.querySelector('.result'),
    resultTable = result.querySelector('.result-table'),
    budgetValue = resultTable.querySelector('.budget-value'),
    dayBudgetValue = resultTable.querySelector('.daybudget-value'),
    levelValue = resultTable.querySelector('.level-value'),
    optionalExpensesValue = resultTable.querySelector('.optionalexpenses-value'),
    expensesValue = resultTable.querySelector('.expenses-value'),
    incomeValue = resultTable.querySelector('.income-value'),
    monthsavingsValue = resultTable.querySelector('.monthsavings-value'),
    yearSavingsValue = resultTable.querySelector('.yearsavings-value'),
    expensesItem = document.querySelectorAll('.expenses-item'),
    data = document.querySelector('.data'),
    approve = data.querySelector('.expenses-item-btn'),
    approveNo = data.querySelector('.optionalexpenses-btn'),
    calculate = data.querySelector('.count-budget-btn'),
    inputOptExspens = data.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

    let money, time;

    approve.addEventListener('click', function() {
        let sums = 0;

        for (let i = 0; i < expensesItem.length; i++) {
            let budget = expensesItem[i].value,
                b = expensesItem[++i].value;
        
            if ((typeof (budget)) === "string" && (typeof (budget)) != null && (typeof (b)) != null &&
                budget != '' && b != '' & budget.length < 50) {
                console.log('done');
                appData.expenses[budget] = b;
                sums += +b;
            } else {
                i = i - 1
            }
            expensesValue.textContent = sums;
        }    
    });

    approveNo.addEventListener('click', function() {
        for (let i = 0; i < inputOptExspens.length; i++) {
            let opt = inputOptExspens[i].value;
            appData.optionalExpenses[i] = opt;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
            
        }
    });

start.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Выш бюджет на месяц?", "0");
        
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Выш бюджет на месяц?", "0");
    }
        appData.budget = money;
        appData.timeData = time;
        budgetValue.textContent = money.toFixed();
        year.value = new Date(Date.parse(time)).getFullYear();
        month.value = new Date(Date.parse(time)).getMonth() + 1;
        day.value = new Date(Date.parse(time)).getDay();
});

calculate.addEventListener('click', function() {
    if (appData.budget != undefined) { 
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
    }
});

incomeItem.addEventListener('input', function() {
    let items = income.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

savings.addEventListener('click', function() {
    if (appData.savings === true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function() {
    if (appData.savings === true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;  

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            month.textContent = appData.monthIncome.toFixed(1);
            year.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function() {
    if (appData.savings === true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;  

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});


let appData = {
    cash: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
}