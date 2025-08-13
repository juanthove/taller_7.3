function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("regBtn").addEventListener("click", function(){
    const password1 = document.getElementById("password1").value;

    if (validarPassword(password1)) {
        showAlertSuccess();
    } else {
        showAlertError();
    }
});

function validarPassword(password){
    return password.length >=6;
}