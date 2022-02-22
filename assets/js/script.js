/* SMOOTH SCROLL PARA ENLACES INTERNOS */
$(document).ready(function(){
    var ir_a = $(".desplazar");

    ir_a.click(function(event){
        event.preventDefault();
        $("body, html").animate(
            {
                scrollTop: $(this.hash).offset().top,
            }, 1700

        );
    })
})

