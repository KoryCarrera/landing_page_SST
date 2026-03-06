const indice = 6;

const response = document.getElementById('answer');
const btn = document.getElementById('next');

const titleQuestion = document.getElementById('question7');

document.addEventListener('DOMContentLoaded', function () {

    titleQuestion.innerText = `${questions[indice].question}`
});

btn.addEventListener('click', function () {

    const result = responseQuiz(indice, response.value);

    if (result) {

        setTimeout(() => { window.location.href = '../pages/Pregunta8.html' }, 2000);

    } else {
        return;
    }
})