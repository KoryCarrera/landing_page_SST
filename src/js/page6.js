const indice = 5;

const response = document.getElementById('answer');
const btn = document.getElementById('next');
const titleQuestion = document.getElementById('question6');

document.addEventListener('DOMContentLoaded', function(){

    titleQuestion.innerText = `${questions[indice].question}`
});

btn.addEventListener('click', function(){

    const result = responseQuiz(indice, response.value);

    if (result){

        setTimeout(() => {window.location.href = '../pages/Pregunta7.html'},2000);
        
    } else {
        return;
    }
})