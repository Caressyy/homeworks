function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    "use strict";
    percent = parseFloat(percent);
    contribution = parseInt(contribution);
    amount = parseFloat(amount);
    if (isNaN(percent) || isNaN(contribution) || isNaN(amount)) {
        return "Мы принимаем только числовые значения!"
    }
    let today = new Date();
    today = getDateInMonth(today);
    date = new Date(date);
    date = getDateInMonth(date);
    let n = date - today;
    let credit = amount - contribution;
    let p = percent / 12;
    let monthlyPay = credit * (p + p / (((1 + p) ** n) - 1));
    let totalAmount = monthlyPay * n;

    function getDateInMonth(date) {
        return (date.getMonth() + 1) + (date.getFullYear() * 12)
    }
    return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    if (name == 'null' || name.length == 0 || name == 'undefined') {
        name = "Аноним"
    }
    console.log(name);
    let greeting = `Привет мир! Меня зовут ${name}`
    return greeting;
}
