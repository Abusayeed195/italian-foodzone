
var count = document.getElementsByClassName("count");
var inc = [];

function incCount(){
    for( let i = 0; i < count.length; i++){
        inc.push(1);
     if(inc[i] != count[i].getAttribute("max-data")){
        inc[i]++;
     }
     else{}
     count[i].innerHTML = inc[i];
    }

}
setInterval( incCount , 100);

var menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "300px";
    }
    else{
        menuList.style.maxHeight = "0px";
    }
}

