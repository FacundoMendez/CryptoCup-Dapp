const filterMatchFucional = () => {

    const filter1 = document.querySelector(".filter1")
    const boxFilter1 = document.querySelector(".boxFilter1")
    const filter2 = document.querySelector(".filter2")
    const boxFilter2 = document.querySelector(".boxFilter2")
    const filter3 = document.querySelector(".filter3")
    const boxFilter3 = document.querySelector(".boxFilter3")
    const filter4 = document.querySelector(".filter4")
    const boxFilter4 = document.querySelector(".boxFilter4")
    const triangleFilter1 = document.querySelector(".triangleFilter1")
    const triangleFilter2 = document.querySelector(".triangleFilter2")
    const triangleFilter3 = document.querySelector(".triangleFilter3")
    const triangleFilter4 = document.querySelector(".triangleFilter4")



    filter1.addEventListener("click" , function(){
        boxFilter1.classList.toggle("boxFilter_active")
        boxFilter2.classList.remove("boxFilter_active")
        boxFilter3.classList.remove("boxFilter_active")
        boxFilter4.classList.remove("boxFilter_active")

        triangleFilter1.classList.toggle("triangleFilter1_active")
     
    } )

    filter2.addEventListener("click" , function(){
        boxFilter1.classList.remove("boxFilter_active")
        boxFilter2.classList.toggle("boxFilter_active")
        boxFilter3.classList.remove("boxFilter_active")
        boxFilter4.classList.remove("boxFilter_active")

        triangleFilter2.classList.toggle("triangleFilter2_active")
    } )

    filter3.addEventListener("click" , function(){
        boxFilter1.classList.remove("boxFilter_active")
        boxFilter2.classList.remove("boxFilter_active")
        boxFilter3.classList.toggle("boxFilter_active")
        boxFilter4.classList.remove("boxFilter_active")

        triangleFilter3.classList.toggle("triangleFilter3_active")
    
    } )

    filter4.addEventListener("click" , function(){
        boxFilter1.classList.remove("boxFilter_active")
        boxFilter2.classList.remove("boxFilter_active")
        boxFilter3.classList.remove("boxFilter_active")
        boxFilter4.classList.toggle("boxFilter_active")

        triangleFilter4.classList.toggle("triangleFilter4_active")

    } )
}

export default filterMatchFucional;