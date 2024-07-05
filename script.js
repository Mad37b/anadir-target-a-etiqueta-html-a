// buscar en la <a > --> <a href enlaces target=_blank
// funcion añadirTargetfiltrado
var etiquetaEnlaces = document.querySelectorAll("a")
var rutas = document.querySelectorAll ( "href")
var regex = RegExp('/^(https?:\/\/)/')
var archivos = ['.jpg', 'png', 'pdf',];
var texto = ['https://'+''+'com','www.google.com','http://eurostarshotelsunificado.com/','https://www.eurostarshotels.com/'];
if (etiquetaEnlaces != null) {
    // URL 
    if (regex != null) {
        for (var i = 0; i < etiquetaEnlaces.length; i++) {
            var enlace = etiquetaEnlaces[i];
            console.log(enlace)


                 // ya tengo la etiqueta a imprimida en la consola , lo que quiero hacer es saber si <a href> contiene https  y archivo,
                //obtendrá target 
            // si contiene formato archivo , añadir target
            for(var j = 0 ; j < archivos.length; j++){
                if (archivos.includes(archivos[j])) {
                    // añadir target 
                    var ventanaArchivos = enlace.setAttribute("target", "_blank");
                }

            }
            

            // si contiene enlace externo ,añadir target por cada enlace externo

            if (rutas){

                var ventanasUrl = enlace.setAttribute("target","_blank");
            }
            
        }// fin del for 
    }
}
