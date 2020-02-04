let money = prompt("Выш бюджет на месяц?", "0");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let budget = prompt("Введите обязательную статью расходов в этом месяце?", "");
let sum = prompt("Во сколько обойдется?", "");

let appData = {
    cash: money,
    timeData: time,
    expenses: {
        budget: sum
    }, 
    optionalExpenses: {} ,
    income: [] ,
    savings: false
};

alert(appData.cash / 30);
