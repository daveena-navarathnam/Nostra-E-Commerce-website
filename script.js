//signup bar//

var signupbar =document.querySelector(".signupbar")

var X =document.getElementById("X")

X.addEventListener("click",function(){
    signupbar.style.display = "none";
});

//side navbar//

// Side Navbar

document.addEventListener("DOMContentLoaded", function(){

var menuicon = document.getElementById("menuicon")
var sidenavbar = document.querySelector(".sidenavbar_content2")
var sidenavbarX = document.getElementById("sidenavbar-X")

if(menuicon){
menuicon.addEventListener("click", function(){
    sidenavbar.style.left = "0"
    sidenavbarX.style.left = "45%"
})
}

if(sidenavbarX){
sidenavbarX.addEventListener("click", function(){
    sidenavbar.style.left = "-50%"
    sidenavbarX.style.left = "-60%"
})
}

})



//search enable//
var products = document.querySelectorAll(".Products-grid")
var search = document.querySelector(".placeholder")

search.addEventListener("keyup", function(event){

    var enteredValue = event.target.value.toUpperCase()

    for(var i = 0; i < products.length; i++){

        var productName = products[i].querySelector("h1").textContent

        if(productName.toUpperCase().indexOf(enteredValue) < 0)
        {
            products[i].style.display = "none"
        }
        else
        {
            products[i].style.display = "block"
        }

    }

})