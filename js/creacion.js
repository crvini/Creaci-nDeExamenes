function crearExamen() {
  let nombreExamen = document.getElementsByName("nombreExamen")[0].value;
  //let cantidad = document.getElementsByName("cantidad")[0].value;
  let cantidad = document.getElementsByName("cantidad");
  console.log(nombreExamen);

  for (i = 0; i < cantidad.length; i++) {
    if (cantidad[i].checked) {
      //var memory=memo[i].checked;
      var valorCantidad = cantidad[i].value;
    }
  }
  console.log(valorCantidad);

  var form = new FormData();
  form.append("nombre", nombreExamen);
  form.append("cantidad", valorCantidad);
  form.append("crear", "examen");

  let settings = {
    url: "http://localhost/examenAPI/examen.php",
    method: "POST",
    timeout: 0,
    processData: false,
    mimeType: "multipart/form-data",
    contentType: false,
    data: form,
  };

  $.ajax(settings).done(function (response) {
    let valorId = JSON.parse(response);
    let id = valorId["id"];
    let idExamenCreado = id[0]["idexaman"];

    window.location.href = `http://localhost/CreaciónDeExamenes/preguntas.php?id=${idExamenCreado}`;
  });
}
