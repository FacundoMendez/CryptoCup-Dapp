const loginFuncional = () => {
    const login = document.querySelector(".containerLogin")
    const buttonLogin = document.querySelector(".buttonLogin")
    const blurLogin = document.querySelector(".blurLogin")
    const blurLogin_exit = document.querySelector(".blurLogin_exit")
    const box_flag = document.querySelector(".box_flag")
    const container_select_flag = document.querySelector(".container_select_flag")
    const select_value_flag = document.querySelectorAll(".select_value_flag")



    buttonLogin.addEventListener("click" , function(){
        login.classList.toggle("login_active")
        blurLogin.classList.toggle("blurLogin_active")
    })

    box_flag.addEventListener("click" , function(){
        container_select_flag.classList.toggle("container_select_flag_active")
    })

    blurLogin_exit.addEventListener("click" , function(){
        login.classList.toggle("login_active")
        blurLogin.classList.toggle("blurLogin_active")
    })


    for( let element of select_value_flag ){
        element.addEventListener("click" , function(){
            container_select_flag.classList.toggle("container_select_flag_active")
        })
    }
}

export default loginFuncional