const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

if(id){


var contarP = Array()
var totalPuntos = Array();
var totalkeys = Array();
var imgProducto = Array();
var nombreProducto = Array();
var precioProducto = Array();
var puntosProducto = Array();
var cantidadProducto = Array();
var totalPuntoProducto = Array();
var totalProduto = Array();
  
//$("#success-alert").slideUp(500);


$(document).ready(function()
{

    $("#carro").click(function clickCart(){
        
        $("#carrito").empty();
        $('#totales').empty();
        cart(id);

    });

    



    $("#locion").click(function(){
        
        var settings = {
        "url": "https://marykay.com.gt/wp-json/cocart/v1/add-item",
        "method": "POST",
            "data": {
            "cart_key": id,
            "product_id" : "30139",
            "quantity" : 1,
            "return_cart": true
             }
        };

        $.ajax(settings).done(function (response) {
             console.log(response);
            if(response){
              $("#mensaje-carrito").fadeTo(2000, 500).slideUp(500, function(){
                $("#mensaje-carrito").slideUp(500);
              }); 
            }
            
        });

       

    });

    $("#nuevos").click(function(){
        
        var settings = {
        "url": "https://marykay.com.gt/wp-json/cocart/v1/add-item",
        "method": "POST",
            "data": {
            "cart_key": id,
            "product_id" : "30002",
            "quantity" : 1,
            "return_cart": true
             }
        };

        $.ajax(settings).done(function (response) {
             console.log(response);
        });


        location.reload('http://localhost/pruebasRevista/js/cart.js');
    });
});

function cart(id){

  contarP = [];
  totalPuntos = [];
var settings = {
    "url": "https://marykay.com.gt/wp-json/cocart/v1/get-cart?cart_key="+id+"&thumb=true",
    "method": "GET",
    "timeout": 0,
    "headers": {
    },
  };
  
  $.ajax(settings).done(function (response) {
    
    let cart = [response];
  
    let carrito = cart[0];

     
   
      cart.forEach(obj => {
        
        Object.entries (obj) .forEach (([clave, valor]) => {

            
            let item = carrito[clave]['regular_price']
            let img = carrito[clave]['product_image']
            let puntos = carrito[clave]['product_points']
            let cantidad = carrito[clave]['quantity']
            let total = carrito[clave]['line_total']
            let nombre = carrito[clave]['product_name']
            let totalP = puntos * cantidad;
            let key = carrito[clave]['key'];
            console.log(item)

    });
      $("#carrito").empty();
      document.querySelector('#carrito').innerHTML += '<tr><th scope="col">Imagen</th><th scope="col">Nombre</th><th scope="col">Precio Unitario</th><th scope="col">Puntos</th><th scope="col">Cantidad</th> <th scope="col">Total Puntos</th><th scope="col">Total</th></tr></tr> ';
      console.log(totalkeys.length);
      for (let i = 0; i < totalkeys.length; i++) {
        
        document.querySelector('#carrito').innerHTML += '<tr><td style="display: none;"><input type="key" name="key'+i+'" id="key'+i+'" value =' + totalkeys[i] + '></td><td class="col-1"> <img src="'+ imgProducto[i] +'" class="img-circle" width="40px" height="40px"></td><td class="col-1"> '+ nombreProducto[i] +'</td>  <td class="col-1"> Q '+ precioProducto[i] +'</td> <td class="col-1"> '+ puntosProducto[i] +'</td><td class="col-1"><input type="number" class="form-control col-1" id="cantidad'+i+'" name="cantidad'+i+'" value =' + cantidadProducto[i] + '></td> <td class="col-1"> ' + totalPuntos[i] + '</td> <td class="col-1"> Q' + totalProduto[i] + '</td></tr>';
              
      }
      
        totalkeys = [];
        imgProducto = [];
        nombreProducto = [];
        precioProducto = [];
        puntosProducto = [];
        cantidadProducto = [];
        totalProduto = [];
      
    });
    
  });
  



  var settings = {
    "url": "https://marykay.com.gt/wp-json/cocart/v1/totals?cart_key="+id+"",
    "method": "GET",
    "timeout": 0,
    "headers": {
      
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    let total = [response];
    total.forEach(obj => {
        let subtotal = obj['subtotal'];
        let des = obj['fee_total'];
        let total = obj['total'];
        let puntos = 0;
        totalPuntos.forEach(element => {
            puntos += element
        });
        document.querySelector('#totales').innerHTML += '<p class="text-right"><b>Subtotal:</b> Q '+ subtotal +'</p>';
        document.querySelector('#totales').innerHTML += '<p class="text-right"><b>Total de Puntos:</b> '+ puntos +'</p>';
        document.querySelector('#totales').innerHTML += '<p class="text-right"><b>Descuento:</b> Q '+ des +'</p>';
        document.querySelector('#totales').innerHTML += '<p class="text-right"><b>Total:</b> Q '+ total +'</p>';
    });
  });


}

function actualizar(){

    console.log(contarP);
    var tCantidades = Array();
    var tkeys = Array();

    for (let i = 0; i < contarP.length; i++) {
          
          let cantidad = document.getElementsByName('cantidad'+i+'')[0].value;
          let key  = document.getElementsByName('key'+i+'')[0].value;
          console.log("Cantidad"+ i +"",cantidad);
          console.log("Key"+ i +"",key);

            tCantidades.push(cantidad);
            tkeys.push(key);
      
    }

  var respuestaCarrito = Array();

    for (let i = 0; i < tkeys.length; i++) {
     
      let settings = {
        "url": "https://marykay.com.gt/wp-json/cocart/v1/item",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded" 
        },
        "data": {
          "cart_key": id,
          "cart_item_key": tkeys[i],
          "quantity": tCantidades[i]
        }
      };

      $.ajax(settings).done(function (response) {
       console.log(response)
      });
      respuestaCarrito.push(settings);
   
    }

      if(respuestaCarrito.length == tkeys.length){
            $("#Acarrito").fadeTo(2000, 500).slideUp(500, function(){
            $("#Acarrito").slideUp(500);
            }); 
      }


    
  
  }
}else{
  var cartCliente = Array();

  $(document).ready(function()
      {

        $("#carro").click(function clickCart(){
          $("#carrito").empty();
          $('#totales').empty();
          viewCart();
  
      });

        $("#locion").click(function(){
        
          cartCliente.push({id: '30139', quantity: 1});
          $("#mensaje-carrito").fadeTo(2000, 500).slideUp(500, function(){
            
              $("#mensaje-carrito").slideUp(500);
            
          });

          });


      });



function viewCart(){

  
  document.querySelector('#carrito').innerHTML += '<tr><th scope="col">Imagen</th><th scope="col">Nombre</th><th scope="col">Precio Unitario</th><th scope="col">Cantidad</th><th scope="col">Total</th></tr></tr>';

   for (let i = 0; i < cartCliente.length; i++) {
   let cantidadP = cartCliente[i];
   let numPc = i;
    let idP = cantidadP['id'];
    let qP = cantidadP['quantity'];
  productCarritos(idP, qP, numPc)

  }
}

function productCarritos(idP, qP, numPc){
  var settings = {
   "url": "https://marykay.com.gt/wp-json/wc/v3/products/"+ idP +"?consumer_key=ck_20a678fa5b0ca609e4805492dd21a0eb13579b0c&consumer_secret=cs_020f5601776199dda14106d220b4ccfebb8a6478",
   "method": "GET",
   "timeout": 0,
 };
 
 $.ajax(settings).done(function (response) {
    dcarrito = response;

    let id = dcarrito['id'];
    let nombre =  dcarrito['name'];
    let imagenPc = dcarrito['images'][0]['src'];
    let precioPc = dcarrito['price'];
    let totalPc = precioPc * qP;

    document.querySelector('#carrito').innerHTML += '<tr><td style="display: none;"><input type="text" name="id'+numPc+'" id="id'+numPc+'" value =' + id + '></td><td class="col-1"> <img src="'+ imagenPc +'" class="img-circle" width="40px" height="40px"></td><td class="col-1"> '+ nombre +'</td>  <td class="col-1"> Q '+ precioPc +'</td><td class="col-1"><input type="number" class="form-control col-1" id="cantidad'+numPc+'" name="cantidad'+numPc+'" value = "'+ qP +'"></td> <td class="col-1"> Q' + totalPc + '</td></tr>';
 });

}

      function actualizar(){

          for (let i = 0; i < cartCliente.length; i++) {
          let cantidad = document.getElementsByName('cantidad'+i+'')[0].value;
          let id  = document.getElementsByName('id'+i+'')[0].value;
          
          console.log("cantidad",cantidad);
          console.log("id", id);
          cartCliente[i].quantity = cantidad;
          $("#Acarrito").fadeTo(2000, 500).slideUp(500, function(){
          $("#Acarrito").slideUp(500);
           });
        }
        console.log(cartCliente);
      }

      function mostrarNum(){
        document.querySelector('#numero').innerHTML += '<form class="form-inline">';
        document.querySelector('#numero').innerHTML += '<div class="form-group mx-sm-3 mb-2">';
        document.querySelector('#numero').innerHTML += '<label for="num">Ingresar numero</label>';
        document.querySelector('#numero').innerHTML += '<input type="number" class="form-control-plaintext" name="num" id="num">';
        document.querySelector('#numero').innerHTML += '</div>';
        document.querySelector('#numero').innerHTML += '<button class="btn btn-primary" onclick="enviarWhatsapp()">Enviar</button>';
        document.querySelector('#numero').innerHTML += '</form>';
      }
      function enviarWhatsapp(){
        for (let i = 0; i < cartCliente.length; i++) {
          let numPc = document.getElementsByName('num')[0].value;
          let cantidadP = cartCliente[i];
           let idP = cantidadP['id'];
           let qP = cantidadP['quantity'];
         enviarProductCarritos(idP, qP, numPc)
       
         }
      }

     function enviarProductCarritos(idP, qP, numPc){
      let settings = {
        "url": "https://marykay.com.gt/wp-json/wc/v3/products/"+ idP +"?consumer_key=ck_20a678fa5b0ca609e4805492dd21a0eb13579b0c&consumer_secret=cs_020f5601776199dda14106d220b4ccfebb8a6478",
        "method": "GET",
        "timeout": 0,
      };

      $.ajax(settings).done(function (response) {
      
        dcarrito = response;
      let nombre =  dcarrito['name'];
      let imagenPc = dcarrito['images'][0]['src'];
      let precioPc = dcarrito['price'];
      let totalPc = precioPc * qP;
      let link = 'http://localhost/agregar/productos/'+idP+'/'+qP+'';
      let num = '502'+numPc;
      let text = 'Hola%2C%20acabo%20de%20ver%20el%20cátalogo%20virtual%20y%20necesitaria%20estos%20productos%20Nombre%20'+ nombre +'y%20la%20cantidad%20de%20'+ qP +'%20Si%20deseas%20agregar%20los%20productos%20al%20carrito%20de%20compras%20da%20click%20en%20el%20siguiente%20link:%20'+link+'';

      
      location.href='https://api.whatsapp.com/send?phone='+num+'&text='+text+'';
        });
      }





}
