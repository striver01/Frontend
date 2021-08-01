var firstname = document.getElementById('firstname');
var lastname  = document.getElementById('lastname');
var mail = document.getElementById('email');
var pwd = document.getElementById('pwd');

function validate(){
    console.log('enter');
    if((firstname.value != '') && (lastname.value != '') && (/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(mail.value)) && (pwd.value.length >=10) ){
        console.log('valid');
        alert("Congratulations!! Your free trial is active now.");
    }
    else{
        alert("Kindly fill valid details");
    }
}