#  Introducción

Esta prueba evaluará sus capacidades dentro del Framework Angular, maquetación y manejo en TypeScript. 
La prueba se ha realizado con Angular 13. Puedes desarrollar y generar los componentes que quieras, trabajar con paquetes npm y utilizar librerías de maquetación, pero se te calificará según los requisitos que a continuación se detallan.  

La prueba tiene un total de 100 puntos. Se pueden otorgar calificaciones parciales por requisito. Si su aplicación no se inicia, quedará descartada la prueba.

La entrega de la prueba se hará sobre un repositorio del candidato.

#  Inicio

Las versiones utilizasas para esta prueba son: 
`$ npm -version =
6.14.8`
`$ node -v =
v14.17.6`


##  Ejecute estos comandos para comenzar:
`npm i`
`npm i json-server -g`


#  Instrucciones

Con el comando `json-server --watch db.json` se despliega una fake API que se puede ver en `localhost:3000` donde servirá el archivo "db.json".

Se requiere hacer una aplicación en Angular que conste de un login, una vista de clientes y una vista de detalle de cliente.

### Login 
Es un simple formulario donde habrá dos inputs: un user y una password que tendrá que contener 6 dígitos y al menos una mayúscula, y un botón de Login.
Al llamar a `[GET] localhost:3000/login` ( sin parámetros ) se recibirá un rol y un token que deberá ser usado en las proximas llamadas HTTP  y se navegará a la vista de "Clientes".
Se necesita que desde que se recibe los datos de la petición hasta que se navegue a "Clientes" pasen 3 segundos, por lo que aparecerá un loader de css para amenizar la espera.

### Cientes
En esta vista aparecerán todos los clientes que devuelva la url `[GET] localhost:3000/clients` menos los que no trabajen en Yoigo ordenada alfabéticamente por nombre de cliente pero deberán estar en el store para un posible uso en el futuro.
Y se mostrará los siguientes datos:
+ Foto ( Se consigue haciendo una llamada get a la URL que venga en el campo subject )
+ Iniciales del nombre del cliente
+ Email
+ Número de posts
+ date_added ( Se consigue haciendo una llamada get a la URL que venga en el campo subject )

El email solo lo podrán ver los Administradores, pero nuestro login siempre devolverá el rol de "User".

Al clickar en un cliente se nos desplegará una modal con la información de la dirección del cliente (address). Este componente tiene que ser un componente "tonto" donde que no lea ni del store ni de servicios.
