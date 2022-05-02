// write js code here corresponding to index.html
// You should add submit event on the form


var data= JSON.parse(localStorage.getItem("schedule")) || [];

document.querySelector("#masaiForm").addEventListener("submit",onsubmit)

function onsubmit()
{
    event.preventDefault();
   var obj={
            
              matchnum:document.querySelector("#matchNum").value,
              teamA:document.querySelector("#teamA").value,
              teamB:document.querySelector("#teamB").value,
              date:document.querySelector("#date").value,
              venue:document.querySelector("#venue").value,
              
           }
           data.push(obj);
           localStorage.setItem("schedule",JSON.stringify(data));
}