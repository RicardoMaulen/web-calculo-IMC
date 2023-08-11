// calculo imc
/* 
bajo peso = - 18.5
normal = 18.5 - 24.9
exeso de peso 25 - 29.9
obeso + 30
*/

function imc() {
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;
  let imc = peso / altura ** 2;

  if (imc < 18.5) {
    document.getElementById("resultado").innerHTML = "<h3>Bajo peso</h3>";
    document.querySelector('.imc1').style.display="inline-block";

  } else if (imc > 18.5 && imc < 24.9) {
    document.getElementById("resultado").innerHTML = "<h3>Normal</h3>";
    document.querySelector('.imc2').style.display="inline-block";

  } else if (imc > 25 && imc < 29.9) {
    document.getElementById("resultado").innerHTML = "<h3>Exeso de peso</h3>";
    document.querySelector('.imc3').style.display="inline-block";

  } else if (imc > 30) {
    document.getElementById("resultado").innerHTML = "<h3>obesidad</h3>";
    document.querySelector('.imc4').style.display="inline-block";
  }
}
