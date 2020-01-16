# Formulario

El formulario creado consta de tres form: uno que comprende el login, otro que contiene el registro y finalmente uno para recordar contraseña si es necesario. 

En el primero, que consiste en el login

![alt text](https://github.com/isaacdaw2/formulario/blob/master/capturas/login.PNG)

Tenemos varias opciones: un input tipo text para escribir usuario ya sea móvil o email, dicho campo es obligatorio y otro tipo password para contraseña, mismamente obligatorio. Este form también dispone de un botón para mostrar u ocultar la contraseña. Además, tiene un botón para recordar contraseña que redirige al form correspondiente y otro para registarse que te guia al form de alta de usuario. Finalmente en este form de login, tenemos el botón de iniciar sesión, el cual una vez completados los campos correctamente nos reenvia a otra página de bienvenida.

El segundo corresponde al registro

![alt text](https://github.com/isaacdaw2/formulario/blob/master/capturas/registro.PNG)

Éste dispone de un input text para el nombre, otro para los apellidos, para el email o móvil y todos obligatorios a través de la etiqueta required. Además, aparece tambien un input date para la fecha de nacimiento, esta no es obligatoria sino opcional, he realizado uin evento para cuando hacemos foto en el campo sea un input date y cuando quitamos el foto sea tipo text y así tenga el mismo estilo de las demás. Se dispone tambien de dos input password tanto para ingresar una contraseña como para repetirla y confirmarla, ambos campos obligatorios. He creado un evento donde si las contraseñas no coinciden saldra un mensaje indicandolo y si son iguales salta un mensaje de que esta correcto. finalmente aparecen 2 input, uno tipo button para volver a la pagina de login y otro tipo submit el cual a través de un evento una vez rellenados los campos obligatorios comprueba si las dos contraseñas con correctas y si es así muestra el mensaje de que todo está correcto, crea dos cookies una para el usuario con el valor del input email o móvil y otra para contraseña con el valor del primer input password y nos devuelve al login. Éste aparece nuevamente con un mensaje de "Te has registrado correctamente".


