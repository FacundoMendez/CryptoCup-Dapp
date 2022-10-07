const filterMatchFucional = () => {

    const filter1 = document.querySelector(".filter1")
    const boxFilter1 = document.querySelector(".boxFilter1")
    const filter2 = document.querySelector(".filter2")
    const boxFilter2 = document.querySelector(".boxFilter2")
    const filter3 = document.querySelector(".filter3")
    const boxFilter3 = document.querySelector(".boxFilter3")
    const filter4 = document.querySelector(".filter4")
    const boxFilter4 = document.querySelector(".boxFilter4")


    filter1.addEventListener("click" , function(){
        boxFilter1.classList.toggle("boxFilter_active")
        boxFilter2.classList.remove("boxFilter_active")
        boxFilter3.classList.remove("boxFilter_active")
        boxFilter4.classList.remove("boxFilter_active")

    } )

    filter2.addEventListener("click" , function(){
        boxFilter1.classList.remove("boxFilter_active")
        boxFilter2.classList.toggle("boxFilter_active")
        boxFilter3.classList.remove("boxFilter_active")
        boxFilter4.classList.remove("boxFilter_active")
    } )

    filter3.addEventListener("click" , function(){
        boxFilter1.classList.remove("boxFilter_active")
        boxFilter2.classList.remove("boxFilter_active")
        boxFilter3.classList.toggle("boxFilter_active")
        boxFilter4.classList.remove("boxFilter_active")
    
    } )

    filter4.addEventListener("click" , function(){
        boxFilter1.classList.remove("boxFilter_active")
        boxFilter2.classList.remove("boxFilter_active")
        boxFilter3.classList.remove("boxFilter_active")
        boxFilter4.classList.toggle("boxFilter_active")
    } )
}

export default filterMatchFucional;