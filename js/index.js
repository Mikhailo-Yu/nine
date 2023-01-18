let myArr =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

//1. Знайти суму та кількість позитивних елементів.
let sumPlus = 0;
let count = 0;
let PlusMult = 1;

for (const myArrItem of myArr) {
    if (myArrItem >= 0) {
        sumPlus = sumPlus + myArrItem;
        count = count + 1;
        PlusMult = PlusMult * myArrItem;
    }
}

document.write(`1. Знайти суму та кількість позитивних елементів. Відповідь:`);
document.write(`<br>Сума позитивних елементів ${sumPlus}.`);
document.write(`<br>Кількість позитивних елементів ${count}.`);

//2. Знайти мінімальний елемент масиву та його порядковий номер.

let minNumber = myArr[0];

for (let i = 0; i <myArr.length; i++) {
    if (myArr[i]< minNumber) {
        minNumber = myArr[i];
    }
}

document.write(`<br>2. Знайти мінімальний елемент масиву та його порядковий номер. Відповідь:`);
document.write(`<br>Мінімальний елемент масиву ${minNumber }, а його порядковий номер - ${myArr.indexOf(minNumber) + 1}.`);

//3. Знайти максимальний елемент масиву та його порядковий номер.

let maxNumber = myArr[0];

for (let i = 0; i <myArr.length; i++) {
    if (myArr[i] > maxNumber) {
        maxNumber = myArr[i];
    }
}

document.write(`<br>3. Знайти максимальний елемент масиву та його порядковий номер. Відповідь:`);
document.write(`<br>Максимальний елемент масиву ${maxNumber }, а його порядковий номер - ${myArr.indexOf(maxNumber) + 1}.`);

//4. Визначити кількість негативних елементів.

let countNegative = 0;

for (const myArrItem of myArr) {
    if (myArrItem < 0) {
        countNegative = countNegative + 1;
    }
}

document.write(`<br>4. Визначити кількість негативних елементів. Відповідь:`);
document.write(`<br>Кількість негативних елементів ${countNegative}.`);

//5. Знайти кількість непарних позитивних елементів.

let countPlusOdd = 0;

for (const myArrItem of myArr) {
    if (myArrItem > 0 && myArrItem % 2 !== 0) {
        countPlusOdd  = countPlusOdd  + 1;
    }
}

document.write(`<br>5. Знайти кількість непарних позитивних елементів. Відповідь:`);
document.write(`<br>Кількість позитивних непарних елементів ${countPlusOdd}.`);

//6. Знайти кількість парних позитивних елементів.

let countPlusEven = 0;

for (const myArrItem of myArr) {
    if (myArrItem > 0 && myArrItem % 2 === 0) {
        countPlusEven  = countPlusEven  + 1;
    }
}

document.write(`<br>6. Знайти кількість парних позитивних елементів. Відповідь:`);
document.write(`<br>Кількість позитивних парних елементів ${countPlusEven}.`);

//7. Знайти суму парних позитивних елементів.

let sumPlusEven = 0;
let sumPlusOdd = 0; 


for (const myArrItem of myArr) {
    if (myArrItem > 0 && myArrItem % 2 === 0) {
        sumPlusEven   = sumPlusEven   + myArrItem;
    } else if (myArrItem > 0 && myArrItem % 2 !== 0) {
        sumPlusOdd   = sumPlusOdd   + myArrItem;
    }
}

document.write(`<br>7. Знайти суму парних позитивних елементів. Відповідь:`);
document.write(`<br>Сума позитивних парних елементів ${sumPlusEven}.`);

//8. Знайти суму непарних позитивних елементів.
document.write(`<br>8. Знайти суму непарних позитивних елементів. Відповідь:`);
document.write(`<br>Сума позитивних непарних елементів ${sumPlusOdd}.`);

//9. Знайти добуток позитивних елементів.
document.write(`<br>9. Знайти добуток позитивних елементів. Відповідь:`);
document.write(`<br>Добуток позитивних парних елементів ${PlusMult}.`);

//10. Знайти найбільший серед елементів масиву, остальні обнулити.

let newArr = [];

for (const myArrItem of myArr) {
    if (myArrItem  === maxNumber) {
        newArr.push(maxNumber)
    } else {
        newArr.push(0);
    }
}

document.write(`<br>10. Знайти найбільший серед елементів масиву, остальні обнулити.
Відповідь:`);
document.write(`<br>Новий масив згідно 10 умови ${newArr}.`);