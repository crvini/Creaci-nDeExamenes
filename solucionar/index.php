<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resolver Examen</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
        <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
    
</head>
<body>
<?php 

$rutas = array();
    $ruta = "";
   // echo $_GET["ruta"];
    if(isset($_GET["ruta"])){
        $rutas = explode("/",$_GET["ruta"]);

        $item = "ruta";
        $valor = $rutas[0];
        
        
    }


    echo '<input type="hidden" name="codigoE" id="codigoE" class="form-control" value="'.$valor.'">';

    ?>
     <center> <div id="nombreExamen">  </div> </center> 

   <div class="container" id="preguntas">
     <div class="form-group">
    <div id="contenedorPreguntas">

    </div>

    <hr />
    <div class=" container m-5">
  
  <div class="row">
  <input type="button" class="btn btn-primary" value="Enviar Examen">
  </div>
</div>
</body>
<script src="js/main.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
 integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
</html>

