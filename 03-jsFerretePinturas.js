/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en 
Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").

B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en 
Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperaturaFahr;
    var FahaCentigrados;
        temperaturaFahr=parseInt(document.getElementById("txtIdTemperatura").value);

    //operacion a C°   
        FahaCentigrados= (temperaturaFahr - 32) * 5/9;

        alert(+temperaturaFahr+ "° Fahrenheit son " +FahaCentigrados+ "° centígrados");
         

}

function CentigradosFahrenheit () 
{
    var temperaturaCent;
    var CentaFAhrenheit;

        temperaturaCent=parseInt(document.getElementById("txtIdTemperatura").value);

    // operacion a F°
      CentaFAhrenheit= (temperaturaCent *9/5) + 32;  

      alert(temperaturaCent+ "° Centigrados son " +CentaFAhrenheit+ "° Fahrenheit ");
}
