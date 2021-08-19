const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("ruta");
 const codigoExamen = document.getElementsByName("codigoE")[0].value;

 //console.log(codigoExamen)

 var settings = {
    "url": `http://localhost/examenAPI/examen.php?ver=examen&codigo=${codigoExamen}`,
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    let datosExamen = response["examen"];
    datosExamen.forEach((element) => {
    let idExamen = element["idExamen"]
    let  nombreExamen = element["nombre"];
    let  cantPreguntas = element["cantPreguntas"];

      document.querySelector("#nombreExamen").innerHTML +="<h3>"+nombreExamen+"</h3>";

    preguntas(idExamen); 

    });
  });

function  preguntas(id){
    var settings = {
        "url": `http://localhost/examenAPI/examen.php?ver=pregunta&pregunta=${id}`,
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        //console.log(response);
        let datosPregunta = response["Preguntas"];
        console.log(datosPregunta)
        datosPregunta.forEach((element) => {
            let idPregunta = element["idPregunta"]
            let  nombrePregunta = element["pregunta"];
            let  cantPreguntas = element["cantRespuesta"];
        
              document.querySelector("#contenedorPreguntas").innerHTML +='<label><h3>'+nombrePregunta+'</h3></label><hr /><div class="container"><div id="respuestas'+idPregunta+'"></div></div><hr />';
               respuestas(idPregunta);       
            });
      });
}
 
function respuestas(id){

    var settings = {
        "url": `http://localhost/examenAPI/examen.php?ver=respuesta&respuesta=${id}`,
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        let datosRespuestas = response["Respuestas"];
        console.log(datosRespuestas)
        datosRespuestas.forEach((element) => {
            let  nombreRespuesta = element["respuesta"];
           
              document.querySelector("#respuestas"+id).innerHTML +=' <div class="form-group row"><div class="form-check"><input class="form-check-input" type="checkbox" id="gridCheck1"><label class="form-check-label" for="gridCheck1">'+nombreRespuesta+'</label></div></div>';       
            });
      });
}
  


