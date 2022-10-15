const filterMatchFucional = () => {

    /* toggle movile */
    const toggleFilterMovile = document.querySelector(".toggle_filter")
    const box_filterMatch_movil = document.querySelector(".box_filterMatch_movil")
    

    toggleFilterMovile.addEventListener("click", function(){
        box_filterMatch_movil.classList.toggle("box_filterMatch_movil_active")
    })



    /* filter team */

    const filter2 = document.querySelector(".filter2")
    const boxFilter2 = document.querySelector(".boxFilter")

   
    filter2.addEventListener("click" , function(){
    /*      boxFilter1.classList.remove("boxFilter_active")  */
        boxFilter2.classList.toggle("boxFilter_active")
      /*   boxFilter3.classList.remove("boxFilter_active")
        boxFilter4.classList.remove("boxFilter_active")  */
    } )


    const filter2_movile = document.querySelector(".filter2_movile")
    const boxFilter2_movile = document.querySelector(".boxFilter2_movile")



    filter2_movile.addEventListener("click" , function(){
 /*       boxFilter1.classList.remove("boxFilter_active")  */
       boxFilter2_movile.classList.toggle("boxFilter_movile_active")
/*        boxFilter3.classList.remove("boxFilter_active")
       boxFilter4.classList.remove("boxFilter_active")  */
   } ) 







 /* const filter1 = document.querySelector(".filter1")
    const boxFilter1 = document.querySelector(".boxFilter1") *
    const filter3 = document.querySelector(".filter3")
    const boxFilter3 = document.querySelector(".boxFilter3")
    const filter4 = document.querySelector(".filter4")
    const boxFilter4 = document.querySelector(".boxFilter4") */


/*     filter1.addEventListener("click" , function(){
        boxFilter1.classList.toggle("boxFilter_active")
        boxFilter2.classList.remove("boxFilter_active")
        boxFilter3.classList.remove("boxFilter_active")
        boxFilter4.classList.remove("boxFilter_active")

    } ) */
    




/* 
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
    } ) */
}

export default filterMatchFucional;