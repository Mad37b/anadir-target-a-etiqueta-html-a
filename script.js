// buscar en la <a> --> <a href enlaces target=_blank
// funcion añadirTargetfiltrado
var etiquetaEnlaces = document.querySelectorAll("a")
var regex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/;
var archivos = ['.jpg', '.png', '.pdf',];
var dominios = [".com", ".es", "net", "org"];
var esImagen; false;

//1. comprueba si la etiqueta existe por lo menos alguno 
if (etiquetaEnlaces.length > 0) {
    // 1. verifica si existe href 

    for (var i = 0; i < etiquetaEnlaces.length; i++) {
        var enlace = etiquetaEnlaces[i].href;
        console.log("test 1 " + etiquetaEnlaces[i].href);

        if (enlace.match(regex)[1] == location.hostname) {
            console.log("Aqui esta la URL de la pagina web ----->" + window.location.hostname);
        }// cierra 1º if 


        // 2. Añadir target i son imagenes 
        for (var j = 0; j < archivos.length; j++) {
            if (enlace.endsWith(archivos[j])) {
                esImagen = true;
                console.log("test 2");
            }

            // mira si hay png en cualquier parte de la url 
            if (!esImagen && enlace.includes(".png") || enlace.includes(".jpg") || enlace.includes(".pdf")) {
                esImagen = true;
                console.log ( ' mira si hay imagenes ')
            }

        }


        if (esImagen) {

            etiquetaEnlaces[i].setAttribute('target', '_blank');
            console.log("Enlace a imagen detectado:", enlace);
        } else {
            console.log("Enlace no es una imagen:", enlace);
        }

    }
}

