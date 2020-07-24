/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var operacion;

        precioUno=parseInt(document.getElementById("txtIdPrecioUno").value);
        precioDos=parseInt(document.getElementById("txtIdPrecioDos").value);
        precioTres=parseInt(document.getElementById("txtIdPrecioTres").value);

    operacion= precioUno + precioDos + precioTres;
    alert("Su total es de " +operacion);
	
}
function Promedio () 
{   
    var precioUno;
    var precioDos;
    var precioTres;
    var operacion;
    var operacionDec;

        precioUno=parseFloat(document.getElementById("txtIdPrecioUno").value);
        precioDos=parseFloat(document.getElementById("txtIdPrecioDos").value);
        precioTres=parseFloat(document.getElementById("txtIdPrecioTres").value);

            operacion= (precioUno + precioDos + precioTres) / 3;
                       
            alert("Su promedio es " +operacion.toFixed(2));
	
}
function PrecioFinal () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var precio;
    var iva;
    var precioConIva

        precioUno=parseInt(document.getElementById("txtIdPrecioUno").value);
        precioDos=parseInt(document.getElementById("txtIdPrecioDos").value);
        precioTres=parseInt(document.getElementById("txtIdPrecioTres").value);

// C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).

        precio= precioUno + precioDos + precioTres
        iva= precio *0.21;
        precioConIva= (iva + precio ); 

        alert("El precio final es " +precioConIva);

}