
(function (etiquetaEnlaces) {
    if (!etiquetaEnlaces.length) return false;
    var regex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/;
    var archivos = ['.jpg', '.png', '.pdf',];
    var host = location.hostname;
    function anadirTarget(enlace) {
        enlace.setAttribute('target', '_blank');
    }
    function removerTarget(enlace) {
        enlace.removeAttribute('target');
    }

    for (var i = 0; i < etiquetaEnlaces.length; i++) {
        var enlace = etiquetaEnlaces[i],
        href = enlace.href,
        dominio = href.match(regex);
        if (dominio[1] == host) {
            var esArchivo = archivos.some(function (archivos) {
                return href.endsWith(archivos);
            });
            if (esArchivo) {
                anadirTarget(enlace);
            }else{
                removerTarget(etiquetaEnlaces[i]);
            }
        } else {
            anadirTarget(enlace);
        }
    }

}) (document.querySelectorAll("a"));