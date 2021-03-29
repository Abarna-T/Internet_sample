var form=document.getElementById("form");
var firstName=document.getElementById("first_name");
var secondName=document.getElementById("second_name");
var email=document.getElementById("email");
var password=document.getElementById("password");
var password2=document.getElementById("confirm_password");
console.log(form);
function submit()
{
    if(firstName.value===''){
        document.getElementById("name").innerHTML="Enter the Name !!";
    }
    else if(secondName.value===""){
        document.getElementById("s_name").innerHTML="Enter the second Name !!";
    }
    else if(email.value===""){
        document.getElementById("e_mail").innerHTML="Enter the email !!";
    }
    else if(password.value===""){
        document.getElementById("pass").innerHTML="Enter the password !!";
    }
    else if(password2.value===""){
        document.getElementById("correct_password").innerHTML="Enter the confirm password !!";
    }
    else if(password.value!==password2.value)
    {
        document.getElementById("correct_password").innerHTML="Password does not match!!";
    }
    else{
    localStorage.setItem("firstname",firstName.value);
    localStorage.setItem("secondname",secondName.value);
    localStorage.setItem("email",email.value);
    localStorage.setItem("password",password.value);
    window.location="item_cart.html"
}
}