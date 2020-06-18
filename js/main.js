'use strict';

const start = document.getElementById('start');                                 // Рассчитать
console.log(start);

let buttonPlusIncome = document.getElementsByTagName('button')[0];                 //plus_top 
console.log(buttonPlusIncome);

let buttonPlusExpenses = document.getElementsByTagName('button')[1];               //plus_buttom
console.log(buttonPlusExpenses);

const depositCheckmark = document.querySelector('.deposit-checkmark');          //Чекбокс 
console.log(depositCheckmark);

let additionalIncomeItem = document.querySelector('.additional_income-item') // Ввода возможных доходов
console.log(additionalIncomeItem);

let salaryAmount = document.querySelector('.salary-amount');                    //Месячный доход*
console.log(salaryAmount);

let incomeInput = document.querySelector('.income-title');                      //Дополнительный доход- наименование
console.log(incomeInput);

let amountInput = document.querySelector('.income-amount');                     //Дополнительный доход- сумма
console.log(amountInput);

let additionalInputncome1 = document.querySelectorAll('.additional_income-item')[0]; //Возможный доход
console.log(additionalInputncome1);

let additionalInputncome2 = document.querySelectorAll('.additional_income-item')[1]; //Возможный доход
console.log(additionalInputncome2);

let expensesTitle = document.querySelector('.expenses-title');               // Обязательные расходы
console.log(expensesTitle);

let expensesAmount = document.querySelector('.expenses-amount');             // Обязательные расходы - сумма
console.log(expensesAmount);

let additionalExpensesItem = document.querySelector('.additional_expenses-item'); //Возможные расходы 
console.log(additionalExpensesItem);

let targetAmount = document.querySelector('.target-amount');                     // Цель
console.log(targetAmount);

let periodSelect = document.querySelector('.period-select');                     // Период расчета
console.log(periodSelect);

let resultTotal = document.querySelector('.result-total');                        // Доход за месяц
console.log(resultTotal);
 
let budgetDayValue = document.querySelector('.budget_day-value');                   // Дневной бюджет
console.log(budgetDayValue);

let expensesMonthValue = document.querySelector('.expenses_month-value');            //Расход за месяц
console.log(expensesMonthValue);

let additionalIncomeValue = document.querySelector('.additional_income-value');     //Возможные доходы
console.log(additionalIncomeValue);

let additionalExpensesValue = document.querySelector('.additional_expenses-value'); //Возможные расходы 
console.log(additionalExpensesValue);

let incomePeriodValue = document.querySelector('.income_period-value');             // Накопления за период 
console.log(incomePeriodValue);

let targetMonthValue = document.querySelector('.target_month-value');               //Срок достижения цели в месяцах
console.log(targetMonthValue);




    //LESSON 1-8


// // проверка на валидность
// let isText = function(str) {
//     let pattern = new RegExp('[^а-яё\S]', 'gi');
//     return str.match(pattern);
// }

// let money,
//     start = function() {
//         do {
//             money = prompt('Ваш месячный доход?', 50000); 
//         }
//         while (isNaN(money) || money === '' || money === null);
// };
// start();

// let appData = {
//     budget: money,
//     budgetDay: 0,
//     budgetMonth: 0,
//     expensesMonth: 0,
//     income: {},
//     addIncome: [],// дополнительные доходы
//     expenses: {}, // дополнительные расходы
//     addExpenses: [], // возможные расходы
//     deposit: false, 
//     percentDeposit: 0,
//     moneyDeposit: 0,
//     mission: 50000, 
//     period: 3,
//     asking: function() {
        
       

//         if (confirm('Есть ли у вас дополнительный источник заработка?')){
//             let itemIncome,
//                 cashIncome;

//             do {
//                 itemIncome = prompt('Какой у вас дополнительный зароботок?', 'Фриланс');
//             }
//             while(isText(itemIncome));

//             do {
//                 cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
//             }     
//             while(!isText(cashIncome));
//             appData.income[itemIncome] = cashIncome;
//         }
        

//         let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
//             appData.addExpenses = addExpenses.toLowerCase().split(',');
//             appData.deposit = confirm('Есть ли у вас депозит в банке?'); 
            
//             //Регистр
//             appData.addExpenses = addExpenses.toLowerCase().split(', ');
//                 for (let i = 0; i < appData.addExpenses.length; i++) {
//                 appData.addExpenses[i] = appData.addExpenses[i].charAt(0).toUpperCase() + appData.addExpenses[i].substr(1);
//                 }
// //
//         let expensesName,
//             question;

            
//         for (let i = 0; i < 2; i++) {
//             do {
//                 expensesName = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Телефон');
//             }
//             while(!isNaN(expensesName) || expensesName == '' || expensesName === null);

//             do {
//                 question = +prompt('Во сколько это обойдется?', 2500);
//             }     
//             while(isNaN(question) || question == '' || question === null);

//             appData.expenses[expensesName] = +question;
//             }

            
//         },

        

//         //Сумма расходов
//         getExpensesMonth: function() {
//             for (let key in appData.expenses) {
//                  appData.expensesMonth += appData.expenses[key];
//             }

//             console.log('Расходы за месяц ' + appData.expensesMonth + ' рублей');
//         },

//         // Бюджет в месяц и день
//         getBudget: function() {
//             appData.budgetMonth =  appData.budget - appData.expensesMonth;
//             appData.budgetDay = Math.floor(appData.budgetMonth / 30);
//         },

//         // Достижение цели
//         getTargetMonth: function() {
//             let purpose = Math.ceil(appData.mission / appData.budgetMonth);
                
//             if (purpose >0){
//                 console.log('Цель будет достигнута за ' + purpose + ' месяца');
//             } else {
//                 console.log('Цель не будет достигнута');
//             }
//         },
            
//         // Уровень дохода
//         getStatusIncome: function() {
//             if (appData.budgetDay > 1200) {
//                 console.log('У вас высокий уровень дохода');
//             } else if (600 < appData.budgetDay){ 
//             console.log('У вас средний уровень дохода');
//             } else if (0 < appData.budgetDay) {
//                 console.log('У вас средний уровень дохода');
//             } else if (0 > appData.budgetDay) {
//                 console.log('Что то пошло не так');
//             }
//         },

//         // Deposit in bank
//         getInfoDeposit: function() {
//             if (appData.deposit) {
//                 do {
//                    appData.percentDeposit = prompt('Какой годовой процент?', '10'); 
//                 } 
//                 while(!isText(appData.percentDeposit));
//                 do {
//                    appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
//                 }
//                 while(!isText(appData.moneyDeposit));
//             }
//         },
//         calsSaveMoney: function() {
//             return appData.budgetMonth * appData.period;
//         },

       
// };
// appData.asking();
// appData.getExpensesMonth();
// appData.getBudget();
// appData.getTargetMonth();
// appData.getStatusIncome();


// console.log("Наша программа включает в себя данные: ");
// for ( let key in appData){
// console.log(key + ": " + appData[key]);
// }


// console.log('Дополнительные расходы: ' + (appData.addExpenses.join(', ')));  