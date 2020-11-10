# Clipper-TwitchBot
Proyecto de la asignatura de CC del Master de informática de la UGR


## Explicación del proyecto

### Twitch
  Twitch es una una de las plataformas de streaming mas grandes actualmente. En este plataforma una persona puede estar grabandose mientras otros lo ven. La forma de interactuar que tienen los unos usuarios con otros es un chat en el que todos habla mientras que la persona que se graba esta haciendo el streaming en directo.
  
  
### Problema
  Poder guardar momentos en mitad del streaming que han podido ser importantes de la forma mas automática posible y sin tener que dejar de ver el streaming. Ya que en el proceso necesitamos irnos a otra página y desde ella grabar manualmente el momento interesante que haya ocurrido. Además se puede dar el caso de que una persona no sepa como realizar un clip lo que haria que no pudiera guardar un momento del streaming que le hubiese interesado.
  

### Solución
  La propia plataforma de streaming tiene un servicio para guardar "clips", el problema es que para hacer una grabación tienes que de forma manual hacer tu mismo el "clip" de lo que quieras. La idea es hacer un bot para esta plataforma que te haga el clip de forma automática siempre que una cantidad de los usuarios del chat se pongan deacuerdo y así poder guardarlo sin necesidad de que se tenga que encargar una persona de forma manual. El bot se conectaría al chat de la persona que esta realizando el streaming y esperaría en la palabra clave para entrar en acción y grabar un clip. Después de guardar el clip lo mostraría en el chat.
  
  
### Ejemplo
  Una persona esta en directo con 100 personas mas. Hace algo que le gusta mucho a la gente, entonces la gente empieza ha escribir una palabra clave en el chat, y cuando se llega a 20 personas entonces el bot se activa y graba el clip.


### Arquitectura
  La arquitectura que se va a escoger para realizar este proyecto esta basada en un arquitectura por eventos, ya que el bot estará en todo momento esperando algo para poder activarse y asi porder realizar la ación para el que ha sido creado


### Herramientas
  Se ha escogido Node.js para realizar el bot porque la plataforma de twitch tiene una API que te facilita el trato de mensajes en los chats de twitch



[Configuración](https://github.com/DADSILVER/Clipper-TwichtBot/blob/main/Configuraci%C3%B3n/Config.md)

[Roadmap](https://github.com/DADSILVER/Clipper-TwichtBot/blob/main/Configuraci%C3%B3n/roadmap.md)
