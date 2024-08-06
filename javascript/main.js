

 // change background and save rate value 
var t;
document.querySelectorAll(".rateValue").forEach(function (item) {
item.onclick=function (event){
this.style.backgroundColor="hsla(0, 0%,100%)";
t=item.innerHTML;
console.log(t);
return false;
}
});

// submit rating and send t 

function sendValue(){
    console.log(t)
    // return t;
}

//  load new page with show rating 

function loadPage(){
     console.log(t);
     var newSpan=document.querySelector(".ratingShow");
     newSpan.innerHTML=t;
     document.body.append(newSpan);


}