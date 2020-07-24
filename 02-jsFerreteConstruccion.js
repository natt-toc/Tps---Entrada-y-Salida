/*2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular
 y se debe alambra con tres hilos de alambre.

B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y 
se debe alambra con tres hilos de alambre.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var cantidad;
    
        largo=parseFloat(document.getElementById("txtIdLargo").value);
        ancho=parseFloat(document.getElementById("txtIdAncho").value);

        cantidad= 3* (2*( ancho + largo));

        alert("Ud. necesita comprar " +cantidad+ " metros de alambre")

}
function Circulo () 
{
    var radio;
    var cantidad;

        radio=parseFloat(document.getElementById("txtIdRadio").value);

        cantidad= (2*3.14*2)*3;

        alert("Ud. necesita comprar " +cantidad+ " metros de alambre");

	
}
/*C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, 
debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.*/
function Materiales () 
{
    var largo;
    var ancho;
    var cantCemento;
    var cantCal;
    
        largo=parseFloat(document.getElementById("txtIdLargo").value);
        ancho=parseFloat(document.getElementById("txtIdAncho").value);

        cantCal= (largo*ancho)*3;
        cantCemento=(largo*ancho)*2;

        alert ("Ud. debe comprar " +cantCemento+ " bolsas de cemento y " +cantCal+ " bolsas de Cal");


	
}