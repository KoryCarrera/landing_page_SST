const indice = 3;

const a = document.getElementById('answerA');
const b = document.getElementById('answerA');
const c = document.getElementById('answerA');

const questionTitle = document.getElementById('question');

a.addEventListener('click', function(){

    responseQuiz(indice, a.value);
});

b.addEventListener('click', function(){

    responseQuiz(indice, b.value);
});

c.addEventListener('click', function(){

    responseQuiz(indice, c.value);
});

document.addEventListener('DOMContentLoaded', function (){

    questionTitle.innerText = `${questions[indice].question}`

})