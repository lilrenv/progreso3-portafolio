document.addEventListener('DOMContentLoaded', function() {
    var tarjetas = document.querySelectorAll('.tarjeta');

    tarjetas.forEach(function(tarjeta) {
        var audio = tarjeta.querySelector('audio');

        // Evento cuando se hace hover sobre la tarjeta
        tarjeta.addEventListener('mouseover', function() {
            audio.currentTime = 0; // Reinicia la reproducción al inicio
            audio.play(); // Reproduce el audio
        });

        // Evento cuando se quita el cursor de la tarjeta
        tarjeta.addEventListener('mouseout', function() {
            audio.pause(); // Pausa el audio
        });
    });
});
