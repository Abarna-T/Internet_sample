var item=document.getElementById('item');
var name=document.getElementById('name');
var price=document.getElementById('price');
var plus=document.getElementById("plus");
var calculation=document.getElementById("calculation");
var minus=document.getElementById("sub");
var count=document.getElementById("d_count");
var total=document.getElementById("total");
// console.log(count.value);

function add_count(){
    var value=parseInt(d_count.value);
    ++value;
    document.getElementById('d_count').value = value;
    document.getElementById('cnt').innerText=value;
    total_count();
}
function sub_count(){
    var value=parseInt(count.value);
    value--;
    document.getElementById('d_count').value = value;
    document.getElementById('cnt').innerHTML=value;
    total_count();
}

function total_count()
{var value=parseInt(d_count.value);
    document.getElementById("total").innerText="Rs. "+value*101;
    console.log(value);  
}
function order(){
   window.location="thank.html";
}


var plus=document.getElementById("w_plus");
var calculation=document.getElementById("w_calculation");
var minus=document.getElementById("w_sub");
var count=document.getElementById("w_count");
var total=document.getElementById("w_total");
function w_add_count(){
    var value=parseInt(w_count.value);
    ++value;
    document.getElementById('w_count').value = value;
    document.getElementById('w_cnt').innerHTML=value;
    w_total_count();
}
function w_sub_count(){
    var value=parseInt(w_count.value);
    value--;
    document.getElementById('w_count').value = value;
    document.getElementById('w_cnt').innerHTML=value;
    w_total_count();
}

function w_total_count()
{var value=parseInt(w_count.value);
    document.getElementById("w_total").innerText="Rs. "+value*150;
    console.log(value);
}
function order(){
    window.location="thank.html";
 }

