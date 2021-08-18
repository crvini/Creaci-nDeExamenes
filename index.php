<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Creación Examen</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
        <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
        <script src="js/creacion.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="dropdown">
        <button type="button" class="btn btn-lg" data-toggle="modal" data-target="#miModal" id="carro">
            Crear mi Examen
          </button>
        </div>
    </div>

    <div class="modal fade" id="miModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title" id="myModalLabel">Crear mi Examen</h4>
      </div>
      <div class="modal-body">
                     <form action="prueba.php" method="post">
                     <div class="form-group">
                        <input type="text" class="form-control" id="nombreExamen" name="nombreExamen" placeholder="Nombre de mi Examen" />
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput">¿Cuantas preguntas necesita mi examen?</label>
                        <div class="row">
                        <div class="col-sm-10">
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="cantidad" id="gridRadios1" value="1" checked>
                            <label class="form-check-label" for="gridRadios1">
                                Una pregunta 
                            </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="cantidad" id="gridRadios2" value="2">
                            <label class="form-check-label" for="gridRadios2">
                               Dos Preguntas
                            </label>
                            </div>
                            <div class="form-check disabled">
                            <input class="form-check-input" type="radio" name="cantidad" id="gridRadios2" value="3">
                            <label class="form-check-label" for="gridRadios3">
                                tres preguntas
                            </label>
                            </div>
                            <div class="form-check disabled">
                            <input class="form-check-input" type="radio" name="cantidad" id="gridRadios2" value="4">
                            <label class="form-check-label" for="gridRadios3">
                                cuatro preguntas
                            </label>
                            </div>
                            <div class="form-check disabled">
                            <input class="form-check-input" type="radio" name="cantidad" id="gridRadios2" value="5">
                            <label class="form-check-label" for="gridRadios3">
                                Cinco preguntas
                            </label>
                            </div>
                        </div>
                        </div>
                                        </div>
                        <input type="button" class="btn btn-primary" value="Crear Examen" onclick="crearExamen();">
                      </form>
                   
                    <hr>
                    
      </div>
    </div>
  </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
 integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>



</body>
</html>