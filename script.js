
(function () {

    //variables 
    var etiquetaEnlaces = document.querySelectorAll("a")
    var regex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/;
    var archivos = ['.jpg', '.png', '.pdf',];
    var host = location.href;
    console.log ( host);
    var contador = 0;
    //funciones 
    function anadirTarget(enlace) {
        if (enlace) {
            enlace.setAttribute('target', '_blank');
            console.log("Target añadido al Enlace:" + enlace.href);
        }
    }
    function removerTarget(enlace) {
        if(enlace){
        enlace.removeAttribute('target');
        console.log ( "target removido del Enlace "+ enlace.href)
    }
    }
    // 1.  
    if (etiquetaEnlaces.length > 0) {
        // 1. verifica si existe href 
        // Tag A //
        for (var i = 0; i < etiquetaEnlaces.length; i++) {
            // atributo href //
        var enlace = etiquetaEnlaces[i].href;
        var href = enlace.href;
        console.log ( " prueba en el for " + enlace ) ; 
       
                // 2. 
            if (etiquetaEnlaces[i] != host) {
                anadirTarget(etiquetaEnlaces[i]);
               
                console.log(" Se añade target al enlace Externo  " + etiquetaEnlaces[i])

            } else {
                removerTarget(etiquetaEnlaces[i]);
                console.log(" No se añade target al enlace Interno " + host)
            }
        }
       
        // 3. Añadir target si son imagenes 
        for (var j = 0; j < archivos.length; j++) {
            if (enlace.endsWith(archivos[j]) !=host) {
                anadirTarget(etiquetaEnlaces[i]);
            }
            // mira si hay png en cualquier parte de la url 
            if (enlace.includes(".png") || enlace.includes(".jpg") || enlace.includes(".pdf")) {
                anadirTarget(etiquetaEnlaces[i]);
            }

        }


    }

})();