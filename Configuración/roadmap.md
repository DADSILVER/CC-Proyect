# Roadmap

Para realizar el proyecto se va a dividir en 5 partes. Para el desarrollo se va a seguir el orden expuesto a continuación.



### Enlace de la cuenta de twitch y el bot

En esta primera parte se va a realizar el enlace entre la cuenta de twitch de la persona que quiere que el bot gestione los clips y este mismo usuario. El bot al enlazarse mostrare un mensaje en el chat del canal enlazado para que el usuario sepa que se ha realizado correctamente.

[Milestone correspondiente](https://github.com/DADSILVER/Clipper-TwichtBot/milestone/6)

**Historias de usuario relacionadas**

* [HU-Poder enlazar y desenlazar el bot con la cuenta](https://github.com/DADSILVER/Clipper-TwichtBot/issues/8)



### Administración del bot

En esta parte se ajustará las distintas opciones que tendraá el bot. Para ello se podrá modificar la palabra clave que se usará para realizar un clip, el número de palabras claves necesarias para que se active y también el tiempo que tiene que trascurrir para que se tome un clip.

[Milestone correspondiente](https://github.com/DADSILVER/Clipper-TwichtBot/milestone/4)

**Historias de usuario relacionadas**

* [HU-Hacer grabación](https://github.com/DADSILVER/Clipper-TwichtBot/issues/6)
  * [Introducir palabra clave](https://github.com/DADSILVER/Clipper-TwichtBot/issues/5)
  * [Poner tiempo de grabación](https://github.com/DADSILVER/Clipper-TwichtBot/issues/18)

* [Explicación de uso](https://github.com/DADSILVER/Clipper-TwichtBot/issues/7)



### Clip en twitch

Esta parte consiste en la interacción del bot con la plataforma por lo tanto principalmente se centra en como el bot va a reaccionar a los distintos eventos que ocurrirán en el chat. Se dividirá en buscar cuando se ha reunido el suficiente número de palabras clave y se sacará el clip usando la herramienta que proporciona la misma plataforma para ello. En caso de no conseguir el número mínimo de palabras clave el proceso se reiniciará.

[Milestone correspondiente](https://github.com/DADSILVER/Clipper-TwichtBot/milestone/3)

**Historias de usuario relacionadas**

* [HU-Leer palabra clave](https://github.com/DADSILVER/Clipper-TwichtBot/issues/10)



### Postproceso del clip

En el postproceso se avisará en el chat del canal de twitch la dirección del enlace donde esta el clip.

[Milestone correspondiente](https://github.com/DADSILVER/Clipper-TwichtBot/milestone/5)



### Comandos para el chat

En esta última parte el chat podra interactuar con el bot pidiendole cosas a través de los comandos. Siempre que el bot tenga registrado el comando podrá realizar una acción. En este caso las acciones pensadas han sido la de pedirle ayuda al bot y que pueda mostrar el último clip realizado por el bot.

[Milestone correspondiente](https://github.com/DADSILVER/Clipper-TwichtBot/milestone/7)

**Historias de usuario relacionadas**

* [HU-Pedir ayuda](https://github.com/DADSILVER/Clipper-TwichtBot/issues/17)
* [HU-Poder pedir el clip al bot](https://github.com/DADSILVER/Clipper-TwichtBot/issues/13)
