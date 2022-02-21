
var nombre = prompt("Ingrese su nombre","Juan");
var apellido = prompt("Ingrese su nombre","Perez");
var curso = prompt("Ingrese su curso","Desarrollo Web");
var ramos =  new Array(3);
var ramos_predefinidos = new Array("HTML","CSS","JavaScript");
var notas = new Array(3);
var promedios = new Array(2)
var nota_aprobacion = 4;

for(i=0; i < ramos.length; i++){
  n = i+1;
    notas[i]= new Array(3);
    ramos[i] = prompt("Ingrese nombre Ramo " + n, ramos_predefinidos[i]);
    if (i < ramos.length-1){
      cantidad_notas = notas[i].length;
    }
    else{
      cantidad_notas = notas[i].length - 1;
    }
      for(j=0; j < cantidad_notas; j++){
        m = j+1;
        notas[i][j] = prompt("Ingrese nota " + m +" [" + ramos[i] + "]", nota_aprobacion);

        var valoresAceptados = /^[0-9.]+$/;
       if (notas[i][j].match(valoresAceptados)){
          // alert ("Es numérico");
        notas[i][j] = parseInt(notas[i][j]);
       } else {
         notas[i][j] = 0;
      }

      }
}

// promedios[0] = ((parseInt(notas[0][0]) + parseInt(notas[0][1]) + parseInt(notas[0][2]))/3).toFixed(2);
promedios[0] = ((notas[0][0] + notas[0][1] + notas[0][2])/3).toFixed(2);
promedios[1] = ((notas[1][0] + notas[1][1] + notas[1][2])/3).toFixed(2);

notas[2][2] = (nota_aprobacion * 3) - (notas[2][0] + notas[2][1]);
notas[2][2].toFixed(2);
document.write("<div class = 'container-fluid'>");
document.write("<div class = 'row'>");
document.write("<div class = 'col-12'>");
document.write("<h1 diplay-1>Notas finales</h1>");
document.write("</div>");
document.write("</div>");

document.write("<h4><strong>Nombre : </strong>" + nombre + " " + apellido + "</h4>");
document.write("<h4><strong>Curso : </strong>" + curso + "</h4>");
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
document.write("<th scope='row'>"+ ramos[0] +"</th>");
document.write("<td>"+ notas[0][0] +"</td>");
document.write("<td>"+ notas[0][1] +"</td>");
document.write("<td>"+ notas[0][2] +"</td>");
document.write("<td>"+ promedios[0] +"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<th scope='row'>"+ ramos[1] +"</th>");
document.write("<td>"+ notas[1][0] +"</td>");
document.write("<td>"+ notas[1][1] +"</td>");
document.write("<td>"+ notas[1][2] +"</td>");
document.write("<td>"+ promedios[1] +"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<th scope='row'>"+ ramos[2] +"</th>");
document.write("<td>"+ notas[2][0] +"</td>");
document.write("<td>"+ notas[2][1] +"</td>");
document.write("<td> --- </td>");
document.write("<td> &nbsp; </td>");
document.write("</tr>");
document.write("</tbody>");
document.write("</table>");
document.write("<p>Para aprobar el ramo " + ramos[2] + " con nota " + nota_aprobacion + " necesitas obtener un "+ notas[2][2] + " en la nota 3 </p>")
document.write("</div>");
