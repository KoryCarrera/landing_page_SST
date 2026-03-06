let puntajeFinal = parseInt(localStorage.getItem('puntaje'));

if (puntajeFinal === 8) {

    Swal.fire({
        icon: 'success',
        title: '¡Has logrado competar la tribia!',
        text: '¡Si deseas puedes volver a hacerla',
        showConfirmButton: true,
        confirmButtonColor: '#22c55e',
        confirmButtonText: 'Volver al Inicio',
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('puntaje');
        }
    });
};