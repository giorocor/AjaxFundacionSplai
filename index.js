
$('h1').on('click',function(){getAll()});
const Url1 = 'https://restcountries.eu/rest/v2/name/Afghanistan';

function getAll(){
  const data={ name:'gio',id:23}

  $.ajax({
    url:Url1,
    method:"GET",//or POST
    //data:data,//if the type is POST
    //dataType:JSON or HTML, XML,TXT
    success: function(result){
      console.log(JSON.stringify(result))
    },
    error: function(error){
      console.log(`Error ${error}`)
    }
  })
  /*
    $.ajax({
        method: "GET",
        url: 'https://restcountries.eu/rest/v2/name/Afghanistan'
      }).done(function(data) {
        $('h1').html(JSON.stringify(data)); // imprimimos la respuesta
      }).fail(function() {
        alert("Algo salió mal");
      }).always(function() {
        alert("Siempre se ejecuta")
      });*/
    }


    /*

      $('h1').click(function(){})*/

     