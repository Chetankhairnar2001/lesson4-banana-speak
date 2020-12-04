var inputbtn=document.querySelector("#inputbtn");
var inputtxt=document.querySelector("#inputtxt");
var outputtxt=document.querySelector("#outputtxt");

// var serverurlold="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverurl="https://api.funtranslations.com/translate/minion.json"

function geturltranslate(text){
  return serverurl+ "?" +"text="+ text;
}
//  just for practise
// fetch(geturltranslate(inputtxt)).then(rse=>rse.json()).then(ro=>console.log(ro.contents.translated));

function translate(){
    var inputtext=inputtxt.value; //input

//calling server for processing
    fetch(geturltranslate(inputtext))
    .then(response =>response.json())
    .then(json =>{
      var translatedtext=json.contents.translated;
      outputtxt.innerText=translatedtext;   //output
    });
  
}
inputbtn.addEventListener("click",translate);
