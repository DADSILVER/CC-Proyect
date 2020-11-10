class BotClipper {

  String  usuario='';
  String  palabra_clave='!Grabar';
  int     tiempo_grabacion=45;
  int     opcion_mostrar_clip=1;

  constructor(String user, int time, String palabra, int opcion){
      usuario=user;
      palabra_clave=palabra;
      tiempo_grabacion=time;
      opcion_mostrar_clip=opcion;
  }


  void enlazarCuenta(){

    // aqui se enlazara la cuenta con el canal de twitch

    console.log('Cuenta enlazada');
  }

  void desenlazarCuenta(){

    // aqui se desenlazara la cuenta con el canal de twitch

    console.log('Cuenta desenlazada');
  }


  void sacarClip(){

  }

  void reiniciaremporizador(){

  }


  String getPalabraClave(){
    return palabra_clave;
  }

  void setPalabraClave(String palabra){
    palabra_clave = palabra;
  }


}
