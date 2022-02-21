
// Se solicita al usuario Nombre, Apellido y Carrera
var nombre = prompt("Ingrese su Nombre","Juan");
var apellido = prompt("Ingrese su Apellido","Perez");
var curso = prompt("Ingrese su Carrera","Desarrollo Web");

// Se declara arreglo para ramos
var ramos =  new Array(3);
// Se declara arreglo para notas
var notas = new Array(3);
// Se declara arreglo para prmedios
var promedios = new Array(2)

// Se declara arreglo para datos predefinidos
var ramos_predefinidos = new Array("HTML","CSS","JavaScript");

// Se declara nota de aprobcion de tercer ramo
var nota_aprobacion = 4;

// Se realiza un ciclo para solicitar los ramos partiendo de 0 hasta el largo del arreglo -1
for(i=0; i < ramos.length; i++){
  n = i+1;  //Se crea numero de la nota
    notas[i]= new Array(3); //Se declara arreglo bidimencional para las notas de cada ramo (3)
    ramos[i] = prompt("Ingrese nombre Ramo " + n, ramos_predefinidos[i]); //Se solicitan los nombres de los ramos, se entregan valores predefinidos en variable ramos_predefinidos

/*Se consulta si se esta en el ultimo ramo o no
 Si no es el ultimo ramo se solicitan 3 Notas
 Si es el ultimo ramo se solicitan 2 notas*/
    if (i < ramos.length-1){
      cantidad_notas = notas[i].length;
    }
    else{
      cantidad_notas = notas[i].length - 1;
    }
// Se crea ciclo para solicitar las notas por ramo
      for(j=0; j < cantidad_notas; j++){
        m = j+1;
        notas[i][j] = prompt("Ingrese nota " + m +" [" + ramos[i] + "]", nota_aprobacion);

      // Se verifica si la nota ingresada en un numero (0-9) o si contiene punto (.)
      var valoresAceptados = /^[0-9.]+$/;
       if (notas[i][j].match(valoresAceptados)){
          // Si es numérico o con punto se trasforma a tipo de variable integer para relizar los calculos
          notas[i][j] = parseInt(notas[i][j]);
       } else {
         // Si no es numerico toma por defecto valor 0
          notas[i][j] = 0;
      }

      }
}

// Se sacan ls promedios de los 2 primeros ramos con maximo 2 decimales
promedios[0] = ((notas[0][0] + notas[0][1] + notas[0][2])/3).toFixed(2);
promedios[1] = ((notas[1][0] + notas[1][1] + notas[1][2])/3).toFixed(2);

/* Para calcular la nota faltante del tercer ramo
   Se multiplica la nota de aprobacion * 3
 y se le restan las notas ingresadas para dicho ramo*/
notas[2][2] = (nota_aprobacion * 3) - (notas[2][0] + notas[2][1]);
notas[2][2].toFixed(2); //Se trunca el numero con maximo e 2 decimales

// Se escribe el codigo HTML para desplegar la informcion
document.write("<div class='container'>");
document.write("<div class='table-responsive'>"); //Se hace un div para que la tabla sea responsiva
// Primera tabla para Titulo, Logo, Nombre y Carrera
document.write("<table class='table table-sm table-borderless'>");
document.write("<thead>");
document.write("<tr>");
document.write("<th scope='col' colspan = '4' ><h2>Notas Finales</h2></br>&nbsp;</th>");
document.write("<th>&nbsp;</th>");
document.write("<th>&nbsp;</th>");
document.write("<th>&nbsp;</th>");
document.write("<th><div><img src='assets\\img\\logo1.png' alt='logo'></div></th>");
document.write("</tr>");
document.write("</thead>");
document.write("<tbody>");
document.write("<tr>");
document.write("<th class='titulo'>Nombre:</th>");
document.write("<td>" + nombre + " " + apellido + "</td>"); //Despliga Nombre y Apellido
document.write("</tr>");
document.write("<tr>");
document.write("<th>Carrera.</th>");
document.write("<td>" + curso + "</td>"); //Despliga Carrera
document.write("</tr>");
document.write("</tbody>");
document.write("</table>");

// Segunda Tabla para desplegar Ramos, Notas y Promedios
document.write("<table class='table table-sm'>");
document.write("<thead class='table-dark'>");
document.write("<tr>");
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Promedio</th>");
document.write("</tr>");
document.write("</thead>");
document.write("<tbody>");
document.write("<tr>");
// Datos del ramo 1
document.write("<th scope='row'>" + ramos[0] + "</th>");
document.write("<th>" + notas[0][0] + "</th>");
document.write("<th>" + notas[0][1] + "</th>");
document.write("<th>"+ notas[0][2] + "</th>");
document.write("<th>" + promedios[0] + "</th>");
document.write("</tr>");
// Fin ramo 1

// Datos ramo 2
document.write("<tr>");
document.write("<th>" + ramos[1] + "</th>");
document.write("<th>" + notas[1][0] + "</th>");
document.write("<th>" + notas[1][1] + "</th>");
document.write("<th scope='col'>" + notas[1][2] + "</th>");
document.write("<th scope='col'>" + promedios[1] + "</th>");
document.write("</tr>");
// Fin ramo 2

// Datos Ramo 3
document.write("<tr>");
document.write("<th scope='col'>" + ramos[2] + "</th>");
document.write("<th>" + notas[2][0] + "</th>");
document.write("<th>" + notas[2][1] + "</th>");
document.write("<th>--</th>");
document.write("<th>--</th>");
document.write("</tr>");
// Fin ramo 3
document.write("</tbody>");

// Leyenda que indica nota requerida para aprobar ramo 3
document.write("<caption>Para aprobar el ramo " + ramos[2] + " con nota " + nota_aprobacion + " necesitas obtener un "+ notas[2][2] + " en la nota 3</caption>");
document.write("</table>");
document.write("</div>");
document.write("</div>");
