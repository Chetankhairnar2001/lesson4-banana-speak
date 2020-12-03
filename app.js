var inputbtn=document.querySelector("#inputbtn");
var inputtxt=document.querySelector("#inputtxt");
var outputtxt=document.querySelector("#outputtxt");

console.log(outputtxt);
inputbtn.addEventListener("click",function click(){
    console.log("u click me");
    console.log("input",inputtxt.value);
});
