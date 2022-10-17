const filterMatchFucional = () => {

    /* toggle movile */
    const toggleFilterMovile = document.querySelector(".toggle_filter")
    const box_filterMatch_movil = document.querySelector(".box_filterMatch_movil")
    

    toggleFilterMovile.addEventListener("click", function(){
        box_filterMatch_movil.classList.toggle("box_filterMatch_movil_active")
    })



    /* filter fecha */
    const boxFilter1 = document.querySelector(".boxFilter1") 
    const filter1 = document.querySelector(".filter1")

    filter1.addEventListener("click" , function(){
        boxFilter1.classList.toggle("boxFilter_active")
        boxFilter2.classList.remove("boxFilter_active")
        boxFilter3.classList.remove("boxFilter_active")
    })

    
    const filter1_movile = document.querySelector(".filter1_movile")
    const boxFilter1_movile = document.querySelector(".boxFilter1_movile")


    filter1_movile.addEventListener("click" , function(){
        boxFilter1_movile.classList.toggle("boxFilter_active") 
        boxFilter2_movile.classList.remove("boxFilter_movile_active")
        boxFilter3_movile.classList.remove("boxFilter_movile_active")
    } ) 
 

    /* filter team */

    const filter2 = document.querySelector(".filter2")
    const boxFilter2 = document.querySelector(".boxFilter2")

   
    filter2.addEventListener("click" , function(){
        boxFilter1.classList.remove("boxFilter_active") 
        boxFilter2.classList.toggle("boxFilter_active")
        boxFilter3.classList.remove("boxFilter_active")
    } )


    const filter2_movile = document.querySelector(".filter2_movile")
    const boxFilter2_movile = document.querySelector(".boxFilter2_movile")



    filter2_movile.addEventListener("click" , function(){
       boxFilter1_movile.classList.remove("boxFilter_active") 
       boxFilter2_movile.classList.toggle("boxFilter_movile_active")
       boxFilter3_movile.classList.remove("boxFilter_active")
   } ) 


   /* Filter status */

   const filter3 = document.querySelector(".filter3")
   const boxFilter3 = document.querySelector(".boxFilter3")

   filter3.addEventListener("click" , function(){
        boxFilter1.classList.remove("boxFilter_active") 
        boxFilter2.classList.remove("boxFilter_active")
        boxFilter3.classList.toggle("boxFilter_active")
    } )


    const filter3_movile = document.querySelector(".filter3_movile")
    const boxFilter3_movile = document.querySelector(".boxFilter3_movile")


    filter3_movile.addEventListener("click" , function(){
        boxFilter1_movile.classList.remove("boxFilter_movile_active") 
        boxFilter2_movile.classList.remove("boxFilter_movile_active")
        boxFilter3_movile.classList.toggle("boxFilter_active")
    } ) 

}

export default filterMatchFucional;