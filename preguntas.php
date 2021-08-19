<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Preguntas de mi Examen</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
        <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
        <script src="js/preguntas.js"></script>
<body>
   <center> <div id="nombreExamen">  </div> </center> 
   <form class="form-horizontal">
    <!--Form Preguntas-->
    <div id="pregunta">
       
       <div> 
    <!--Form Preguntas-->
    <!--From respuestas-->


    <!-- From respuestas -->
</form>


  <!-- The Modal -->
<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
      <form action="prueba.php" method="post">

                    <center><div class="form-group"><label class="control-label col-sm-2" for="pregunta">Escribe la respuesta</label>
                    <div class="col-sm-6"><input  type="hidden" id="idPregunta" name="idPregunta" value="">
                      <input type="text" class="form-control" id="respuesta" name="respuesta" placeholder="Escribe la respuesta">
                    </div>
                </div>
                <div class="row"><div class="col-sm-8">
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="resultado" id="gridRadios1" value="1" checked>
                    <label class="form-check-label" for="gridRadios1">Correcta</label></div><div class="form-check">
                        <input class="form-check-input" type="radio" name="resultado" id="gridRadios1" value="0" checked>
                        <label class="form-check-label" for="gridRadios1">Incorrecta</label></div></div></div><br /><div class="form-group">
                            <center>
                            <div class="col-sm-6"><input type="button" class="btn btn-primary" value="Crear Respuesta" onclick="crearrespuesta();">
                        </div></center></div></center> <hr /> 
                        <br />
                        <center><div class="form-group"><label class="control-label col-sm-2" for="pregunta">Escribe la respuesta</label>
                    <div class="col-sm-6"><input  type="hidden" id="idPregunta" name="idPregunta" value="">
                      <input type="text" class="form-control" id="respuesta0" name="respuesta0" placeholder="Escribe la respuesta">
                    </div>
                </div>
                <div class="row"><div class="col-sm-8">
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="resultado0" id="gridRadios1" value="1" checked>
                    <label class="form-check-label" for="gridRadios1">Correcta</label></div><div class="form-check">
                        <input class="form-check-input" type="radio" name="resultado0" id="gridRadios1" value="0" checked>
                        <label class="form-check-label" for="gridRadios1">Incorrecta</label></div></div></div><br /><div class="form-group">
                            <center>
                            <div class="col-sm-6"><input type="button" class="btn btn-primary" value="Crear Respuesta" onclick="crearrespuesta0();">
                        </div></center></div></center> <hr /> 
                        <br />
                        <center><div class="form-group"><label class="control-label col-sm-2" for="pregunta">Escribe la respuesta</label>
                    <div class="col-sm-6"><input  type="hidden" id="idPregunta" name="idPregunta" value="">
                      <input type="text" class="form-control" id="respuesta1" name="respuesta1" placeholder="Escribe la respuesta">
                    </div>
                </div>
                <div class="row"><div class="col-sm-8">
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="resultado1" id="gridRadios1" value="1" checked>
                    <label class="form-check-label" for="gridRadios1">Correcta</label></div><div class="form-check">
                        <input class="form-check-input" type="radio" name="resultado1" id="gridRadios1" value="0" checked>
                        <label class="form-check-label" for="gridRadios1">Incorrecta</label></div></div></div><br /><div class="form-group">
                            <center>
                            <div class="col-sm-6"><input type="button" class="btn btn-primary" value="Crear Respuesta" onclick="crearrespuesta1();">
                        </div></center></div></center> <hr /> 
                        <br />


                  </form>
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
 integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
</body>
</html>