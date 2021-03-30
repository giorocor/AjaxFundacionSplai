var Endpoint=0;

$('#primer').on('click',function(){getAll(url[Endpoint])});


url=[
  'https://restcountries.eu/rest/v2/name/united',
  'https://restcountries.eu/rest/v2/name/aruba?fullText:true',
  'https://restcountries.eu/rest/v2/alpha/col',
  'https://restcountries.eu/rest/v2/alpha?codes:col;no;ee',
   'https://restcountries.eu/rest/v2/currency/cop',
  'https://restcountries.eu/rest/v2/lang/es',
   'https://restcountries.eu/rest/v2/capital/tallinn',
   'https://restcountries.eu/rest/v2/callingcode/372',
   'https://restcountries.eu/rest/v2/region/europe',
   'https://restcountries.eu/rest/v2/regionalbloc/eu',
   'https://restcountries.eu/rest/v2/all?fields=name;capital;currencies',
]




$('select#input').on('change',function(){
  Endpoint = $(this).val();
   console.log(Endpoint)
});


function getAll(URL){

  $.ajax({
    url:URL,
    method:"GET",//or POST
    //data:data,//if the type is POST
    //dataType:JSON or HTML, XML,TXT
    success: function(result){
      document.getElementById("consulta").innerHTML =
      jsonStr=JSON.stringify(result);
    },
    error: function(error){
      console.log(`Error ${error}`)
    }
  })


}