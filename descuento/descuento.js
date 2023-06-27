function calcularCompra(){

    let cantidad = parseInt(document.getElementById("cantidadInput").value)

    let precio = parseInt(document.getElementById("valorInput").value)

    let total = cantidad * precio

    let totalCompra

    if(cantidad >= 3){
        totalCompra = total * 0.8

    }
    else{

        totalCompra = total * 0.9
    }
    let totalResultadoElement = document.getElementById("totalResultado")
    totalResultadoElement.textContent = "el total de camisas que usted compro" + total
    let totalDescuento = document.getElementById("totalCompraResultado")
    totalDescuento.textContent = "el total de descuento fue de : " + totalCompra
}