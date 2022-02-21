var nombre = prompt("Ingrese su nombre");
var curso = prompt("Ingrese su curso");
var ramo1 = prompt("Ingrese nombre Ramo 1");
var nota11 = prompt("Ingrese nota 1 [" + ramo1 + "]");
var nota12 = prompt("Ingrese nota 2 [" + ramo1 + "]");
var nota13 = prompt("Ingrese nota 3 [" + ramo1 + "]");
var promedio1 = (parseInt(nota11) + parseInt(nota12) + parseInt(nota13))/3;
promedio1 = promedio1.toFixed(2);

var ramo2 = prompt("Ingrese nombre Ramo 2");
var nota21 = prompt("Ingrese nota 1 [" + ramo2 + "]");
var nota22 = prompt("Ingrese nota 2 [" + ramo2 + "]");
var nota23 = prompt("Ingrese nota 3 [" + ramo2 + "]");
var promedio2 = (parseInt(nota21) + parseInt(nota22) + parseInt(nota23))/3;
promedio2 = promedio2.toFixed(2);

var ramo3 = prompt("Ingrese nombre Ramo 3");
var nota31 = prompt("Ingrese nota 1 [" + ramo3 + "]");
var nota32 = prompt("Ingrese nota 2 [" + ramo3 + "]");
var nota_aprobacion = prompt("Ingrese nota de Aprobacion");
nota_aprobacion = parseInt(nota_aprobacion).toFixed(2);

var nota33 = (nota_aprobacion * 3) - (parseInt(nota31) + parseInt(nota32));
// var promedio3 = (parseInt(nota31) + parseInt(nota32) + parseInt(nota33))/3;
nota33 = nota33.toFixed(2);

document.write("<div class = 'container'>");
document.write("<div class='row'>");
document.write("<div class='col-12'>");
document.write("<h1 clas='display-1'>Notas Finales</h1>");
document.write("</div>");
// document.write("</div>");
// document.write("<div class='row'>");
  // <div class="col-4">
  // document.write("<h4><strong>Nombre : </strong>" + nombre + "</h4>");
  // </div>
  // <div class="col-8">
  // document.write("<h4><strong>Curso : </strong>" + curso + "</h4>");
//   </div>
// </div>

// document.write("<h4><strong>Curso : </strong>" + curso + "</h4>");
document.write("<table class='table'>");
document.write("<thead class='thead-dark'>");
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota 1</th>");

document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Promedio</th>");
document.write("</tr>");
document.write("</thead>");
document.write("<tbody>");
document.write("<tr>");
document.write("<th scope='row'>"+ ramo1 +"</th>");
document.write("<td>"+ nota11 +"</td>");
document.write("<td>"+ nota12 +"</td>");
document.write("<td>"+ nota13 +"</td>");
document.write("<td>"+ promedio1 +"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<th scope='row'>"+ ramo2 +"</th>");
document.write("<td>"+ nota21 +"</td>");
document.write("<td>"+ nota22 +"</td>");
document.write("<td>"+ nota23 +"</td>");
document.write("<td>"+ promedio2 +"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<th scope='row'>"+ ramo3 +"</th>");
document.write("<td>"+ nota31 +"</td>");
document.write("<td>"+ nota32 +"</td>");
document.write("<td> -- </td>");
document.write("<td> -- </td>");
document.write("</tr>");
document.write("</tbody>");
document.write("</table>");
document.write("<p>Para aprobar el ramo " + ramo3 + " con nota " + nota_aprobacion + " necesitas obtener un "+ nota33 +" en la nota 3 </p>")
document.write("</div>");
