var form=document.getElementById("form");
var email=document.getElementById("email");
var password=document.getElementById("password");
console.log("haiii");
function submit(){
    let stored_email=localStorage.getItem("email");
    let stored_password=localStorage.getItem("password");
    if(email.value == stored_email && password.value == stored_password){
        document.getElementById("error").innerHTML="You have logged in !!"
        window.location="item_cart.html"
    }else{
        document.getElementById("error").innerHTML="Either password or Email ID is wrong !!"
    }
}