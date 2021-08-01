var email = document.getElementById("mail");
let error = document.getElementById("error");
var button = document.getElementById('next-btn');

function validate(){
    if(email.value === null || email.value ===""){
        error.style.visibility="visible";
        email.style.borderColor="red";
        button.style.backgroundColor="red";
    }
    else if(/^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+$/.test(email.value)){
        error.style.visibility="hidden";
        email.style.borderColor="green";
        button.style.backgroundColor="green";
    }
    else{
        error.style.visibility="hidden";
        email.style.borderColor="pink";
        button.style.backgroundColor="red";
    }
}