var inputbtn=document.querySelector("#inputbtn");
var inputtxt=document.querySelector("#inputtxt");
var outputtxt=document.querySelector("#outputtxt");

var serverurl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function geturltranslate(text){
  return serverurl+ "?" +"text="+ text;
}

function translate(){
  var inputtext=inputtxt.value;
//calling server for processing
 fetch(geturltranslate(inputtext))
 .then(response =>response.json())
 .then(json =>console.log(json.contents.text));
  
}
inputbtn.addEventListener("click",translate);
