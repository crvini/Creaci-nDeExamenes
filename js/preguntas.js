
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

window.onload = function(){

    console.log(id);
    var nombreExamen;
    var codigo;
    var cantPreguntas;

    var settings = {
      url: `http://localhost/examenAPI/examen.php?ver=examen&examen=${id}`,
      method: "GET",
      timeout: 0,
    };

    $.ajax(settings).done(function (response) {
      let datosExamen = response["examen"];
      datosExamen.forEach((element) => {
      let  nombreExamen = element["nombre"];
      var  codigo = element["codigo"];
      let  cantPreguntas = element["cantPreguntas"];

        document.querySelector("#nombreExamen").innerHTML +="<h3>"+nombreExamen+"</h3>";
        for(let i= 0; i < cantPreguntas; i++){
          document.querySelector("#pregunta").innerHTML += '<div class="form-group"><label class="control-label col-sm-2" for="pregunta">Escribe la pregunta</label><div class="col-sm-8"><input type="text" class="form-control" id="pregunta'+i+'" name="pregunta'+i+'" placeholder="Escribe la pregunta"></div></div><br /><div class="form-group"><center><div class="col-sm-6"><input type="button" class="btn btn-primary" value="Crear Pregunta"  onclick="crearPregunta'+i+'();"></div></center></div>  <hr /><div id="respuesta'+i+'"></div><hr />';
        }
       



      });
    });


}


function crearPregunta0(){
  $("#myModal").modal("show");
  let nombrePregunta = document.getElementsByName("pregunta0")[0].value;
  var form = new FormData();
      form.append("crear", "pregunta");
      form.append("pregunta", nombrePregunta);
      form.append("examen", id);
    

    var settings = {
      "url": "http://localhost/examenAPI/examen.php",
      "method": "POST",
      "timeout": 0,
      "processData": false,
      "mimeType": "multipart/form-data",
      "contentType": false,
      "data": form
    };

    $.ajax(settings).done(function (response) {
      //console.log(response);
      let valorId = JSON.parse(response);
    let id = valorId["id"];
    let idPreguntaCreado = id[0]["idPregunta"];
    console.log(idPreguntaCreado);

    //$('#modalRespuestas').modal('show')


    //document.getElementById("idPregunta").value(idPreguntaCreado)
    $("#idPregunta").val(idPreguntaCreado);


   /* for(let i= 0; i < 3; i++){
      document.querySelector("#respuesta0").innerHTML += '<center><div class="form-group"><label class="control-label col-sm-2" for="pregunta">Escribe la respuesta</label><div class="col-sm-6"><input style="display: none;" type="text" class="form-control" id="idPregunta'+i+'" name="idPregunta'+i+'" value="'+idPreguntaCreado+'"><input type="text" class="form-control" id="respuesta'+i+'" name="respuesta'+i+'" placeholder="Escribe la respuesta"></div></div><div class="row"><div class="col-sm-8"><div class="form-check"><input class="form-check-input" type="radio" name="resultado'+i+'" id="gridRadios1" value="1" checked><label class="form-check-label" for="gridRadios1">Correcta</label></div><div class="form-check"><input class="form-check-input" type="radio" name="resultado'+i+'" id="gridRadios1" value="0" checked><label class="form-check-label" for="gridRadios1">Incorrecta</label></div></div></div><br /><div class="form-group"><center><div class="col-sm-6"><input type="button" class="btn btn-primary" value="Crear Respuesta" onclick="crearrespuesta'+i+'();"></div></center></div></center> <hr /> <br />';
    }*/
    });

}




function crearPregunta1(){
  $("#myModal").modal("show");
  let nombrePregunta = document.getElementsByName("pregunta1")[0].value;
  var form = new FormData();
      form.append("crear", "pregunta");
      form.append("pregunta", nombrePregunta);
      form.append("examen", id);

    var settings = {
      "url": "http://localhost/examenAPI/examen.php",
      "method": "POST",
      "timeout": 0,
      "processData": false,
      "mimeType": "multipart/form-data",
      "contentType": false,
      "data": form
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
      let valorId = JSON.parse(response);
    let id = valorId["id"];
    let idPreguntaCreado = id[0]["idPregunta"];
    console.log(idPreguntaCreado);
    $("#idPregunta").val(idPreguntaCreado);
    $("#idPregunta0").val(idPreguntaCreado);
    $("#idPregunta1").val(idPreguntaCreado);
    /*for(let i= 4; i < 6; i++){
      document.querySelector("#respuesta1").innerHTML += '<center><div class="form-group"><label class="control-label col-sm-2" for="pregunta">Escribe la respuesta</label><div class="col-sm-6"><input style="display: none;" type="text" class="form-control" id="idPregunta'+i+'" name="idPregunta'+i+'" value="'+idPreguntaCreado+'"><input type="text" class="form-control" id="respuesta'+i+'" name="respuesta'+i+'" placeholder="Escribe la respuesta"></div></div><div class="row"><div class="col-sm-8"><div class="form-check"><input class="form-check-input" type="radio" name="resultado'+i+'" id="gridRadios1" value="1" checked><label class="form-check-label" for="gridRadios1">Correcta</label></div><div class="form-check"><input class="form-check-input" type="radio" name="resultado'+i+'" id="gridRadios1" value="0" checked><label class="form-check-label" for="gridRadios1">Incorrecta</label></div></div></div><br /><div class="form-group"><center><div class="col-sm-6"><input type="button" class="btn btn-primary" value="Crear Respuesta" onclick="crearrespuesta'+i+'();"></div></center></div></center> <hr /> <br />';
    }*/
    });

}

function crearPregunta2(){
  $("#myModal").modal("show");
  let nombrePregunta = document.getElementsByName("pregunta2")[0].value;
  var form = new FormData();
      form.append("crear", "pregunta");
      form.append("pregunta", nombrePregunta);
      form.append("examen", id);

    var settings = {
      "url": "http://localhost/examenAPI/examen.php",
      "method": "POST",
      "timeout": 0,
      "processData": false,
      "mimeType": "multipart/form-data",
      "contentType": false,
      "data": form
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
      let valorId = JSON.parse(response);
    let id = valorId["id"];
    let idPreguntaCreado = id[0]["idPregunta"];
    console.log(idPreguntaCreado);
    $("#idPregunta").val(idPreguntaCreado);
    $("#idPregunta0").val(idPreguntaCreado);
    $("#idPregunta1").val(idPreguntaCreado);
    /* for(let i= 7; i < 9; i++){
      document.querySelector("#respuesta2").innerHTML += '<center><div class="form-group"><label class="control-label col-sm-2" for="pregunta">Escribe la respuesta</label><div class="col-sm-6"><input style="display: none;" type="text" class="form-control" id="idPregunta'+i+'" name="idPregunta'+i+'" value="'+idPreguntaCreado+'"><input type="text" class="form-control" id="respuesta'+i+'" name="respuesta'+i+'" placeholder="Escribe la respuesta"></div></div><div class="row"><div class="col-sm-8"><div class="form-check"><input class="form-check-input" type="radio" name="resultado'+i+'" id="gridRadios1" value="1" checked><label class="form-check-label" for="gridRadios1">Correcta</label></div><div class="form-check"><input class="form-check-input" type="radio" name="resultado'+i+'" id="gridRadios1" value="0" checked><label class="form-check-label" for="gridRadios1">Incorrecta</label></div></div></div><br /><div class="form-group"><center><div class="col-sm-6"><input type="button" class="btn btn-primary" value="Crear Respuesta" onclick="crearrespuesta'+i+'();"></div></center></div></center> <hr /> <br />';
    }*/
    });

}

function crearPregunta3(){
  $("#myModal").modal("show");
  let nombrePregunta = document.getElementsByName("pregunta3")[0].value;
  var form = new FormData();
      form.append("crear", "pregunta");
      form.append("pregunta", nombrePregunta);
      form.append("examen", id);

    var settings = {
      "url": "http://localhost/examenAPI/examen.php",
      "method": "POST",
      "timeout": 0,
      "processData": false,
      "mimeType": "multipart/form-data",
      "contentType": false,
      "data": form
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
      let valorId = JSON.parse(response);
    let id = valorId["id"];
    let idPreguntaCreado = id[0]["idPregunta"];
    console.log(idPreguntaCreado);
    $("#idPregunta").val(idPreguntaCreado);
    $("#idPregunta0").val(idPreguntaCreado);
    $("#idPregunta1").val(idPreguntaCreado);
    /*for(let i= 10; i < 13; i++){
      document.querySelector("#respuesta3").innerHTML += '<center><div class="form-group"><label class="control-label col-sm-2" for="pregunta">Escribe la respuesta</label><div class="col-sm-6"><input style="display: none;" type="text" class="form-control" id="idPregunta'+i+'" name="idPregunta'+i+'" value="'+idPreguntaCreado+'"><input type="text" class="form-control" id="respuesta'+i+'" name="respuesta'+i+'" placeholder="Escribe la respuesta"></div></div><div class="row"><div class="col-sm-8"><div class="form-check"><input class="form-check-input" type="radio" name="resultado'+i+'" id="gridRadios1" value="1" checked><label class="form-check-label" for="gridRadios1">Correcta</label></div><div class="form-check"><input class="form-check-input" type="radio" name="resultado'+i+'" id="gridRadios1" value="0" checked><label class="form-check-label" for="gridRadios1">Incorrecta</label></div></div></div><br /><div class="form-group"><center><div class="col-sm-6"><input type="button" class="btn btn-primary" value="Crear Respuesta" onclick="crearrespuesta'+i+'();"></div></center></div></center> <hr /> <br />';
    }*/
    });

}

function crearPregunta4(){
  $("#myModal").modal("show");
  let nombrePregunta = document.getElementsByName("pregunta4")[0].value;
  var form = new FormData();
      form.append("crear", "pregunta");
      form.append("pregunta", nombrePregunta);
      form.append("examen", id);

    var settings = {
      "url": "http://localhost/examenAPI/examen.php",
      "method": "POST",
      "timeout": 0,
      "processData": false,
      "mimeType": "multipart/form-data",
      "contentType": false,
      "data": form
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
      let valorId = JSON.parse(response);
    let id = valorId["id"];
    let idPreguntaCreado = id[0]["idPregunta"];
    console.log(idPreguntaCreado);
    $("#idPregunta").val(idPreguntaCreado);
    $("#idPregunta0").val(idPreguntaCreado);
    $("#idPregunta1").val(idPreguntaCreado);
    /*for(let i= 14; i < 17; i++){
      document.querySelector("#respuesta4").innerHTML += '<center><div class="form-group"><label class="control-label col-sm-2" for="pregunta">Escribe la respuesta</label><div class="col-sm-6"><input style="display: none;" type="text" class="form-control" id="idPregunta'+i+'" name="idPregunta'+i+'" value="'+idPreguntaCreado+'"><input type="text" class="form-control" id="respuesta'+i+'" name="respuesta'+i+'" placeholder="Escribe la respuesta"></div></div><div class="row"><div class="col-sm-8"><div class="form-check"><input class="form-check-input" type="radio" name="resultado'+i+'" id="gridRadios1" value="1" checked><label class="form-check-label" for="gridRadios1">Correcta</label></div><div class="form-check"><input class="form-check-input" type="radio" name="resultado'+i+'" id="gridRadios1" value="0" checked><label class="form-check-label" for="gridRadios1">Incorrecta</label></div></div></div><br /><div class="form-group"><center><div class="col-sm-6"><input type="button" class="btn btn-primary" value="Crear Respuesta" onclick="crearrespuesta'+i+'();"></div></center></div></center> <hr /> <br />';
    }*/
    });

}

function crearrespuesta(){
  let nombreRespuesta = document.getElementsByName("respuesta")[0].value;
  let idPregunta = document.getElementsByName("idPregunta")[0].value;
  console.log(nombreRespuesta, idPregunta)
  let resultado = document.getElementsByName("resultado");
  
  for (i = 0; i < resultado.length; i++) {
    if (resultado[i].checked) {
      //var memory=memo[i].checked;
      var valorResultado = resultado[i].value;
    }
  }
  var form = new FormData();
  form.append("crear", "respuesta");
  form.append("respuesta", nombreRespuesta);
  form.append("npregunta", idPregunta);
  form.append("resultado", valorResultado);
  
  var settings = {
    "url": "http://localhost/examenAPI/examen.php",
    "method": "POST",
    "timeout": 0,
    "processData": false,
    "mimeType": "multipart/form-data",
    "contentType": false,
    "data": form
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

}

function crearrespuesta0(){
  let nombreRespuesta = document.getElementsByName("respuesta0")[0].value;
  let idPregunta = document.getElementsByName("idPregunta")[0].value;
  console.log(nombreRespuesta, idPregunta)
  let resultado = document.getElementsByName("resultado0");
  
  for (i = 0; i < resultado.length; i++) {
    if (resultado[i].checked) {
      //var memory=memo[i].checked;
      var valorResultado = resultado[i].value;
    }
  }
  var form = new FormData();
  form.append("crear", "respuesta");
  form.append("respuesta", nombreRespuesta);
  form.append("npregunta", idPregunta);
  form.append("resultado", valorResultado);
  
  var settings = {
    "url": "http://localhost/examenAPI/examen.php",
    "method": "POST",
    "timeout": 0,
    "processData": false,
    "mimeType": "multipart/form-data",
    "contentType": false,
    "data": form
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

}
function crearrespuesta1(){
  let nombreRespuesta = document.getElementsByName("respuesta1")[0].value;
  let idPregunta = document.getElementsByName("idPregunta")[0].value;
  console.log(nombreRespuesta, idPregunta)
  let resultado = document.getElementsByName("resultado1");
  
  for (i = 0; i < resultado.length; i++) {
    if (resultado[i].checked) {
      //var memory=memo[i].checked;
      var valorResultado = resultado[i].value;
    }
  }
  var form = new FormData();
  form.append("crear", "respuesta");
  form.append("respuesta", nombreRespuesta);
  form.append("npregunta", idPregunta);
  form.append("resultado", valorResultado);
  
  var settings = {
    "url": "http://localhost/examenAPI/examen.php",
    "method": "POST",
    "timeout": 0,
    "processData": false,
    "mimeType": "multipart/form-data",
    "contentType": false,
    "data": form
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

}

function enviarExamen(){


  var settings = {
    url: `http://localhost/examenAPI/examen.php?ver=examen&examen=${id}`,
    method: "GET",
    timeout: 0,
  };

  $.ajax(settings).done(function (response) {
    let datosExamen = response["examen"];
    datosExamen.forEach((element) => {

    let  codigo = element["codigo"];

      window.location.href = `http://localhost/Creaci%C3%B3nDeExamenes/solucionar/${codigo}`;


    });
  });

}