function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("regBtn").addEventListener("click", function(){
    let error = false;
    let campos = document.getElementsByClassName("form-control");
    for(let i = 0; i<campos.length; i++){
        if(campos[i].value.trim()==""){
            error = true;
        }
    }

     let terminos = document.getElementById("terminos")

    if (!terminos.checked) {
        error = true;
    }


const pass = document.getElementById('password1');
const confirm = document.getElementById('password2');
if (pass.value !== confirm.value) {
    error = true;
}
if (error) {
    showAlertError()
} else {
    showAlertSuccess()
} 
    
});