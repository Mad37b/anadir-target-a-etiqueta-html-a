// buscar en la <a > --> <a href enlaces target=_blank
// funcion añadirTargetfiltrado
var etiquetaEnlaces = document.querySelectorAll("a")
var regex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/;
var archivos = ['.jpg', '.png', '.pdf',];
if (etiquetaEnlaces.length) {
    // URL 
    for (var i = 0; i < etiquetaEnlaces.length; i++) {
        var enlace = etiquetaEnlaces[i].href;
        if(enlace.match(regex)[1] == location.hostname){
            for(var j = 0 ; j < archivos.length; j++){
                if (enlace.endsWith(archivos[j])) {
                    var ventanaArchivos = etiquetaEnlaces[i].setAttribute("target", "_blank");
                }
            }
        }else{
            console.log(enlace + ' --> no coincide')
        }
        console.log(enlace )
       
        

    }
}
