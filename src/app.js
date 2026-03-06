const correctAnswer = [false, false, false, false, false, false, false, false];

const questions = [
    {
        question: '¿Qué es la higiene postural?',
        answer: 'b'
    },
    {
        question: '¿Cuál es uno de los beneficios de mantener una buena higiene postural?',
        answer: 'b'
    },
    {
        question: '¿Cómo se debe levantar correctamente un objeto pesado?',
        answer: 'c'
    },
    {
        question: '¿Cuál de las siguientes posiciones al dormir se recomienda para mantener la alineación de la columna?',
        answer: 'c'
    },
    {
        question: 'Escribe una palabra: ¿Parte del cuerpo que se busca proteger principalmente con la higiene postural?',
        answer: 'columna'
    },
    {
        question: 'Escribe una palabra: ¿Cómo se llama la curvatura anormal de la columna que puede empeorar con una mala postura?',
        answer: 'escoliosis'
    },
    {
        question: 'Escribe una palabra: ¿Qué parte del cuerpo se flexiona al levantar correctamente un objeto pesado?',
        answer: 'rodilla'
    },
    {
        question: 'Escribe una palabra: ¿Qué estructura del cuerpo se protege principalmente al mantener una buena higiene postural?',
        answer: 'columna'
    },
];

function responseQuiz(indice, response) {

    if (typeof indice !== 'number') {

        Swal.fire({
            icon: 'error',
            title: 'Tipo de dato de indice invalido',
            text: '¡Recarga la pagina!',
            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    };

    if (typeof response !== 'string') {

        Swal.fire({
            icon: 'error',
            title: 'Tipo de dato de indice invalido',
            text: '¡Recarga la pagina!',
            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    };

    const correct = questions[indice].answer;

    const userResponse = response.toLowerCase().trim();

    if (userResponse === correct) {

        Swal.fire({
            icon: 'success',
            title: '¡Respuesta correcta!',
            text: 'Continua a la siguiente pregunta',
            showConfirmButton: false,
            timer: 2000,
        });

        correctAnswer[indice] = true;

        return true;
    } else {

        Swal.fire({
            icon: 'error',
            title: '¡Respuesta incorrecta!',
            text: '¡Prueba de nuevo!',
            showConfirmButton: false,
            timer: 2000,
        });

        return false;
    };
};