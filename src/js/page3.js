const indice = 2;

const btnSiguiente = document.getElementById('next');

const questionTitle = document.getElementById('question3');

document.addEventListener('DOMContentLoaded', function () {

    questionTitle.innerText = `${questions[indice].question}`

});

btnSiguiente.addEventListener('click', function () {

    const opcionSeleccionada = document.querySelector('input[name="answer"]:checked');

    if (!opcionSeleccionada) {

        Swal.fire({
            icon: 'info',
            title: '¡Respuesta vacia!',
            text: '¡Trata de hacerlo de nuevo!',
            showConfirmButton: false,
            timer: 2000
        });

        return;
    };

    const respuesta = responseQuiz(indice, opcionSeleccionada.value);

    if (respuesta) {

        setTimeout(() => {window.location.href = '../pages/Pregunta4.html';},2000)
        
    } else {
        return;
    }

})