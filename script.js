let minValue;
let maxValue;
let answerNumber=0;
let orderNumber=0;
let gameRun;
let questionVariants;
let questionRandom;
let question = 'Ваше число';


function startGame() {
    minValue = parseInt(prompt('Минимальное значение числа для игры','-999'));
    maxValue = parseInt(prompt('Максимальное значение числа для игры','999'));
    minValue = (minValue>-999||minValue==NaN)?minValue:-999;
    maxValue = (maxValue<999||maxValue==NaN)?maxValue:999;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
};

startGame();

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `${question} `+`${answerNumber}?`;

document.getElementById('btnRetry').addEventListener('click', retryGame);

function retryGame() {
    gameRun = true;
	orderNumberField.innerText = orderNumber;
	answerField.innerText = `Вы загадали число ${answerNumber }?`;
	alert("Игра начнётся заново");
	minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
	answerNumber = Math.floor((minValue + maxValue) / 2);
	orderNumber++;
};

document.getElementById('btnLess').addEventListener('click', function () {
    questionVariants = ['Наверное это','Ваше число','Может быть','Возможно','Вангую это'];
    questionRandom = Math.floor(Math.random()*questionVariants.length);
    question=questionVariants[questionRandom];
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((maxValue + minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `${question}`+` ${answerNumber}?`;
        }
    }
})


document.getElementById('btnOver').addEventListener('click', function () {
    questionVariants = ['Наверное это','Ваше число','Может быть','Я думаю это','Вангую это'];
    questionRandom = Math.floor(Math.random()*questionVariants.length);
    question=questionVariants[questionRandom];
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `${question}`+` ${answerNumber}?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        let answerVariants=[`Я всегда угадываю`,`Это было легко`,`Мастер телепатии`,`Проще простого`];
        let answerRandom=Math.floor(Math.random()*answerVariants.length);
        let answer=answerVariants[answerRandom];
        answerField.innerText = `${answer}\n\u{1F60E}`
        gameRun = false;
    }
})