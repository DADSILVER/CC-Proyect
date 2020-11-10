//Esta clase se va a encargar de gestionar los distitnso cmomandos que se puedan añadir o quitar

class Comando {

  Comando comandos[];

  constructor(String comando_nuevo, String mensaje_nuevo){
      comando=comando_nuevo;
      mensaje=mensaje_nuevo;
  }

  void añadirComando(){
    //Añadira un comando de la lista comandos[]

  }

  void quitarComando(){
    //Quitara un comando de la lista comandos[]
  }

  String getComando(int comando){
    return comandos[comando].getMensajeComando();
  }


}
