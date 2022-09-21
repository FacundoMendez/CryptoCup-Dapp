const loginFuncional = () => {
    const login = document.querySelector(".containerLogin")
    const buttonLogin = document.querySelector(".buttonLogin")


    buttonLogin.addEventListener("click" , function(){
        login.classList.toggle("login_active")
    })


}

export default loginFuncional