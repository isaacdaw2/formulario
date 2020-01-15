// Variables del login en orden
var login =  document.getElementById("login");
var registrado = document.getElementById("registrado"); // Una vez registrado aparece este mensaje en el login: "Te has registrado correctamente"
var usuario = document.getElementById("log");
var passwordLogin = document.getElementById("pass");
var mostrar = document.getElementById("mostrar");
var recordar = document.getElementById("recordar1");
var registrar = document.getElementById("registrar1");
var iniciarSesion = document.getElementById("iniciarSesion");

// Variables de recordar contraseña en orden
var recordarContrasena = document.getElementById("recordarContrasena");
var emailDeContraseña = document.getElementById("emailDeContraseña");
var volver2 = document.getElementById("volver2");
var enviar2 = document.getElementById("enviar2");

// Variables del registro en orden
var registro = document.getElementById("registro");
var nombre = document.getElementById("nombre");
var apellidos = document.getElementById("apellidos");
var emailMovil = document.getElementById("emailMovil");
var fecha = document.getElementById('fecha');
var pass1 = document.getElementById("pass1");
var pass2 = document.getElementById("pass2");
var volver = document.getElementById("volver");
var registrar2 = document.getElementById("registrar2");

// Variables al conectarse, en orden
var conectado = document.getElementById("conectado");
var bienvenido = document.getElementById("bienvenido");
var salir = document.getElementById("salir");

// Variables de los formularios
var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");


registrar.addEventListener("click", function () {
    registro.style.display = "block";
    login.style.display = "none";
    recordarContrasena.style.display = "none";

});

recordar.addEventListener("click", function () {
    recordarContrasena.style.display = "block";
    registro.style.display = "none";
    login.style.display = "none";
});

volver.addEventListener("click", function () {
    login.style.display = "block";
    registro.style.display = "none";
    recordarContrasena.style.display = "none";
});

volver2.addEventListener("click", function () {
    login.style.display = "block";
    registro.style.display = "none";
    recordarContrasena.style.display = "none";
});

enviar2.addEventListener("click", function () {
    if(emailDeContraseña.value){
       login.style.display = "block";
       recordarContrasena.style.display = "none";
    }
    
});

mostrar.addEventListener("click", function () {
    if (passwordLogin.type == "password") {
        passwordLogin.type = "text";
    } else {
        passwordLogin.type = "password";
    }

});

registrar2.addEventListener("click", function () {
    if (nombre.value && apellidos.value && emailMovil.value && pass1.value && pass2.value) {

        if (pass1.value != pass2.value) {
            registrar2.type = "button";
            alert("Las contraseñas deben de coincidir");
        } else {
            alert("Todo está correcto");
            registrado.style.display = "block";
            login.style.display = "block";
            registro.style.display = "none";


            setCookie("cookieUsuario", emailMovil.value, 1);
            setCookie("cookiePass", pass1.value, 1);
        }
    }

});

iniciarSesion.addEventListener("click", function () {
    var a = getCookie("cookieUsuario");
    var b = getCookie("cookiePass");  
    
    if (usuario.value && passwordLogin.value && (usuario.value === a && passwordLogin.value === b)) {
        iniciarSesion.type = "button";
        
        conectado.style.display = "block";
        login.style.display = "none";
        bienvenido.innerHTML = "Bienvenido " + nombre.value + " " + apellidos.value +", estás conectado";
        
    }
});

salir.addEventListener("click", function () {
    deleteCookie("cookieUsuario");
    deleteCookie("cookiePass");
    
    form1.reset();
    form2.reset();
    form3.reset();
    
    login.style.display = "block";
    conectado.style.display = "none";
    registrado.style.display = "none";
});



function setCookie(nombre, valor, expiracion) {
    var d = new Date();
    d.setTime(d.getTime() + expiracion * 24 * 60 * 60 * 1000);
    var expiracion = "expires=" + d.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function deleteCookie(nombre) {
    setCookie(nombre, "", 0);
}

window.addEventListener('load', function () {

    fecha.type = 'text';

    fecha.addEventListener('blur', function () {

        fecha.type = 'text';

    });

    fecha.addEventListener('focus', function () {

        fecha.type = 'date';

    });

});
