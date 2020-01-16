# Formulario

El formulario creado consta de cuatro partes: una que comprende el login, otra que contiene el registro, otra para recordar contraseña si es necesario y finalmente una vez logado un mensaje de bienvenida.

En el primero, que consiste en el login

![alt text](https://github.com/isaacdaw2/formulario/blob/master/capturas/login.PNG)

Tenemos varias opciones: un input tipo text para escribir usuario ya sea móvil o email, dicho campo es obligatorio y otro tipo password para contraseña, mismamente obligatorio. Este form también dispone de un botón para mostrar u ocultar la contraseña. Además, tiene un botón para recordar contraseña que redirige al form correspondiente y otro para registarse que te guia al form de alta de usuario. Finalmente en este form de login, tenemos el botón de iniciar sesión, el cual una vez completados los campos correctamente nos reenvia a otra página de bienvenida.

El segundo corresponde al registro, llegamos a aquí al pulsar al boton "Registrarme" del login

![alt text](https://github.com/isaacdaw2/formulario/blob/master/capturas/registro.PNG)

Éste dispone de un input text para el nombre, otro para los apellidos, para el email o móvil y todos obligatorios a través de la etiqueta required. Además, aparece tambien un input date para la fecha de nacimiento, esta no es obligatoria sino opcional, he realizado un evento para cuando hacemos foco en el campo sea un input date y cuando quitamos el foco sea tipo text y así tenga el mismo estilo de las demás. Se dispone tambien de dos input password tanto para ingresar una contraseña como para repetirla y confirmarla, ambos campos obligatorios. Finalmente aparecen 2 input, uno tipo button para volver a la pagina de login y otro tipo submit el cual a través de un evento una vez rellenados los campos obligatorios comprueba si las dos contraseñas con correctas, si no lo son salta un mensaje indicándolo

![alt text](https://github.com/isaacdaw2/formulario/blob/master/capturas/passwrong.PNG)

y si es así muestra el mensaje de que todo está correcto


![alt text](https://github.com/isaacdaw2/formulario/blob/master/capturas/todoCorrecto.PNG)

Crea dos cookies una para el usuario con el valor del input email o móvil y otra para contraseña con el valor del primer input password y nos devuelve al login. Éste aparece nuevamente con un mensaje de "Te has registrado correctamente".


![alt text](https://github.com/isaacdaw2/formulario/blob/master/capturas/registrado.PNG)

Al pulsar en el botón "Recordar contraseña" vamos a la tercera parte, que es para recordar la contraseña.

![alt text](https://github.com/isaacdaw2/formulario/blob/master/capturas/recuperar.PNG)

Aquí se dispone de un campo input tipo email para colocar un correo electrónico, el cual es obligatorio, un input button para volver al login y un input submit que también redirije al login una vez rellenado el email.

y por último tenemos la parte de bienvenida, a la cual se accede registrandose, rellenando usuario y contraseña del login y pulsando al botón "Iniciar sesión".

![alt text](https://github.com/isaacdaw2/formulario/blob/master/capturas/bienvenido.PNG)

Aquí nos muestra un mensaje con el nombre y apellidos rellenados en la parte del registro además de boton de "Cerrar sesión" a través del cual al pulsarlo se borran las cookies creadas y vuelve a la parte del login.
