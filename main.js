var a_msj_wsp = document.getElementById('WSP')
console.log (a_msj_wsp)

function mensaje_wsp(){
    var nombre = document.getElementById("")
    var nombre = document.getElementById("")
    var nombre = document.getElementById("")
    var nombre = document.getElementById("")

console.log(nombre)

    var mensaje_final
mensaje_final= "Hola!,%20Mi%20Nombre%20es:%20" + nombre.value +",%20"
mensaje_final= mensaje_final + "%20Mi%20mail%20es:%20" + emailAddress.value
mensaje_final= mensaje_final + "%20Mi%20motivo%20es:%20" + message.value

var mensaje= "https://api.whatsapp.com/send?phone=+598998797780" + mensaje_final

a_msj_wsp = mensaje

}
 a_msj_wsp.addEventListener('click',mensaje_wsp)
