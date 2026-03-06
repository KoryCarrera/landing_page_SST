const indice = 7;

const response = document.getElementById('answer');
const btn = document.getElementById('next');

btn.addEventListener('click', function(){

    const result = responseQuiz(indice, response.value);

    if (result){
        window.location.href = '../pages/pagina6.html'
    } else {
        return;
    }
})