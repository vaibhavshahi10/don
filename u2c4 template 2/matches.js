// write js code here corresponding to matches.html
var marker=false;
var data=JSON.parse(localStorage.getItem("schedule"));
var fav=JSON.parse(localStorage.getItem("favourites")) || [];
display(data);


function display(data)
{
    

    data.forEach(function(el){

        


    var tr=document.createElement("tr")

    var td1=document.createElement("td");
     td1.innerText=el.matchnum;

    var td2=document.createElement("td");
    td2.innerText= el.teamA;
    
    var td3=document.createElement("td");
    td3.innerText=el.teamB;

    var td4=document.createElement("td");
    td4.innerText=el.date; 

    var td5=document.createElement("td");
    td5.innerText=el.venue; 

    var td6=document.createElement("td");
    td6.innerText="Add as Favourites";
    td6.style.color="green";
    td6.style.cursor="pointer";

    td6.addEventListener("click",function(){

       fav.forEach(function(elem){
           if(elem.matchnum==el.matchnum && elem.teamA==el.teamA && elem.teamB==el.teamB && elem.date==el.date && elem.venue==el.venue)
           {
               alert("already added as favourites");
               marker=true;
               window.location.reload();
           }
       })
       if(marker==false)
       {
           fav.push(el);
           localStorage.setItem("favourites",JSON.stringify(fav));
           window.location.reload();
       }

    })

    tr.append(td1,td2,td3,td4,td5,td6);
    document.querySelector("tbody").append(tr);

    })
}
// document.querySelector("#filtervenue").addEventListener("eve")



