var burger = document.getElementById("burger")
var header = document.getElementById("nav")

burger.onclick = function(){
    if(header.style.display == "none"){
        header.style.display = "block";
    }else{
        header.style.display = "none";
    }

}

