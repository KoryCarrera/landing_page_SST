const indice = 1;

const a = document.getElementById('answerA');
const b = document.getElementById('answerA');
const c = document.getElementById('answerA');

const questionTitle = document.getElementById('question2');

a.addEventListener('click', function () {

    const result = responseQuiz(indice, a.value);

    if (result) {
        window.location.href('../pages/pagina3.html');
    } else {
        return;
    }
});

b.addEventListener('click', function () {

    const result = responseQuiz(indice, b.value);

    if (result) {
        window.location.href('../pages/pagina3.html');
    } else {
        return;
    }

});

c.addEventListener('click', function () {

    const result = responseQuiz(indice, c.value);

    if (result) {
        window.location.href('../pages/pagina3.html');
    } else {
        return;
    }
});

document.addEventListener('DOMContentLoaded', function () {

    questionTitle.innerText = `${questions[indice].question}`

})