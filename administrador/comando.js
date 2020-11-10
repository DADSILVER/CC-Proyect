class Comando {

  String comando;
  String mensaje;

  constructor(String comando_nuevo, String mensaje_nuevo){
      comando=comando_nuevo;
      mensaje=mensaje_nuevo;
  }


  String getMensajeComando(){
    return mensaje;
  }

  void setMensaje(String mensaje_nuevo){
    mensaje = mensaje_nuevo;
  }

  void setMensaje(String comando_nuevo){
    comando = comando_nuevo;
  }

}
