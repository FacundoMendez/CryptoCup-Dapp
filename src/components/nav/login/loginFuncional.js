const loginFuncional = () => {
    const login = document.querySelector(".containerLogin")
    const buttonLogin = document.querySelector(".buttonLogin")
    const blurLogin = document.querySelector(".blurLogin")
    
    buttonLogin.addEventListener("click" , function(){
        login.classList.toggle("login_active")
        blurLogin.classList.toggle("blurLogin_active")
    })


}

export default loginFuncional