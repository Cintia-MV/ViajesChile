/* SMOOTH SCROLL PARA ENLACES INTERNOS */
$(document).ready(function () {
    var ir_a = $(".desplazar");

    ir_a.click(function (event) {
        event.preventDefault();
        $("body, html").animate(
            {
                scrollTop: $(this.hash).offset().top,
            }, 1700

        );
    });
});

/* TOOLTIP BARRA DE NAVEGACIÓN */
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

/* REDIRECCIONANDO AL FORMULARIO DE CONTACTO */
$('.formulario').click(function () {
    alert('Serás redirigido a nuestro formulario de contacto')
});
