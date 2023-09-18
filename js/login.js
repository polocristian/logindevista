const $submit = document.getElementById("submit"),
      $password = document.getElementById("Contraseña"),
      $nombreusuario = document.getElementById("nombreusuario")
document.addEventListener("click", (e)=>{
    if(e.target === $submit){
        if($password.value !== "" && $nombreusuario.value !== ""){
            e.preventDefault();
            window.location.href = "login.html";
        }
    }
})   