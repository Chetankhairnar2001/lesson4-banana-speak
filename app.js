var inputbtn=document.querySelector("#inputbtn");
var inputtxt=document.querySelector("#inputtxt");
var outputtxt=document.querySelector("#outputtxt");


function translate(){
  outputtxt.innerText="click "+inputtxt.value;
}
inputbtn.addEventListener("click",translate);
