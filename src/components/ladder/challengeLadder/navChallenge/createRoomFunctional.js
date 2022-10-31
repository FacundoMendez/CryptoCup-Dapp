const createRoomFunctional = () => {
    const container_createRoom = document.querySelector(".container_room_click") 
    const box_create_room_challenge = document.querySelector(".box_create_room_challenge") 
    const box_links_movile_challengeRoom = document.querySelector(".box_links_movile_challengeRoom") 
    const toggle_link_challengeRoom = document.querySelector(".toggle_link_challengeRoom") 
    
    
    /* abre create room */
    
    container_createRoom.addEventListener("click" , function(){
        box_create_room_challenge.classList.toggle("box_create_room_challenge_active")
    })

    toggle_link_challengeRoom.addEventListener("click" , function(){
        box_links_movile_challengeRoom.classList.toggle("box_links_movile_challengeRoom_active")
    })


    /* cierra create room */


/*     const box_filter_match = document.querySelector(".box_filter_match ") */
    const container_tableChallenge = document.querySelector(".container_friendsLadder ")
    const container_navChallenge = document.querySelector(".nav_challengeRoom ")
/*     const containerFilter = document.querySelector(".containerFilter_match ") */


    container_tableChallenge.addEventListener("click", function(){
        box_create_room_challenge.classList.remove("box_create_room_challenge_active")
    })

    container_navChallenge.addEventListener("click", function(){
        box_create_room_challenge.classList.remove("box_create_room_challenge_active")
    })

/*     box_filter_match.addEventListener("click", function(){
        box_create_room_challenge.classList.remove("box_create_room_challenge_active")
    }) */
    
/* 
    containerFilter.addEventListener("click", function(){
        box_create_room_challenge.classList.remove("box_create_room_challenge_active")
        
    }) */

    /* filters actions */


    /* filter match */
    const filter_match_challenge = document.querySelector(".filter_match_challenge") 
    const box_elegir_partido_challenge = document.querySelector(".box_elegir_partido_challenge")

    filter_match_challenge.addEventListener("click" , function(){
        box_elegir_partido_challenge.classList.toggle("box_elegir_partido_challenge_active")
        box_elegir_team_challenge.classList.remove("box_elegir_team_challenge_active")
    })


     /* filter team */
     const filter_Select_challenge = document.querySelector(".filter_Select_challenge") 
     const box_elegir_team_challenge = document.querySelector(".box_elegir_team_challenge")

     filter_Select_challenge.addEventListener("click" , function(){
         box_elegir_team_challenge.classList.toggle("box_elegir_team_challenge_active")
         box_elegir_partido_challenge.classList.remove("box_elegir_partido_challenge_active")
     })



     const buttonCreateRoom = document.querySelector(".button_createRoom")

     buttonCreateRoom.addEventListener("click" , function(){
        setTimeout(() => {
            box_create_room_challenge.classList.remove("box_create_room_challenge_active")
        }, 1000);
    })



}

export default createRoomFunctional;