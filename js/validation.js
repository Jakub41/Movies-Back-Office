validateName = name = {
    let userName = /^[A-Za-z]+$/;
    if(name.value.match(userName)) {
         return true;
    }
    else {
        alert("Name is invalid");
        return false;
   }
};

validateUserName = controlId => {
    let control = document.querySelector(controlId);
    control.style.color = "white";

    if(control.value == "") {
        control.style.background = "red";
    }
    else if(Number(control.value)) {
        control.style.background = "red";
    }
    else {
        control.style.background = "green";
    }
}