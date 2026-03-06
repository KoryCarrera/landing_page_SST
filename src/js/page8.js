const indice = 7;

const response = document.getElementById('answer');
const btn = document.getElementById('next');

const titleQuestion = document.getElementById('question8');

document.addEventListener('DOMContentLoaded', function () {

    titleQuestion.innerText = `${questions[indice].question}`
});

btn.addEventListener('click', function () {

    const result = responseQuiz(indice, response.value);

    if (result) {

        setTimeout(() => { window.location.href = '../../index.html' }, 2000);

        correctAnswer = true

    } else {
        return;
    }
})