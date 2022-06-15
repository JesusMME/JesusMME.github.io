const dias =["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado" ]
do{
    var nombre= prompt("Ingresa tu nombre: ");
}while(nombre == null);
do{
    var fecha = prompt("Ahora ingreasa la fecha de nacimiento con el formato AAAA-MM-DD para saber el día de la semana en que nació");
}while(fecha == null);
var birthday = new Date(fecha);
alert("espero te sera útil la información " + nombre+ ", naciste un día :"+ dias[birthday.getDay()]);

