var email = document.getElementById("mail");
let error = document.getElementById("error");

function validate(){
    if(email.value === null || email.value ===""){
        error.style.visibility="visible";
        email.style.borderColor="red";
    }
    else{
        error.style.visibility="hidden";
        email.style.borderColor="pink";
    }
}