var mail = document.getElementById('mail')

function validate(){
    console.log("enter");
    console.log(mail.value);
    // var mailFormat = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    // var isValid = mail.value.matches(mailFormat);
    if(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(mail.value)){
        alert("Thankyou!, we'll notify you");
    }
    else if(mail.value === ''){
        alert("Kindly fill the mail");
    }
    else{
        alert("Kindly fill valid mail");
    }
}