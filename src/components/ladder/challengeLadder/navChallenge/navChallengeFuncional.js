const navChallengeFuncional = () => {

    const containerFilter = document.querySelector(".container_find_click ")
    const box_filter_match = document.querySelector(".box_filter_match ")
    const container_tableChallenge = document.querySelector(".container_friendsLadder ")
    const container_navChallenge = document.querySelector(".nav_challengeRoom ")
    const container_createRoom = document.querySelector(".container_room_click ")
    const box_create_room_challenge = document.querySelector(".box_create_room_challenge") 

    


    containerFilter.addEventListener("click", function(){
        box_filter_match.classList.toggle("box_filter_match_active")
        box_create_room_challenge.classList.remove("box_create_room_challenge_active")
    })
    

    container_tableChallenge.addEventListener("click", function(){
        box_filter_match.classList.remove("box_filter_match_active")
    })

    container_navChallenge.addEventListener("click", function(){
        box_filter_match.classList.remove("box_filter_match_active")
    })

    container_createRoom.addEventListener("click", function(){
        box_filter_match.classList.remove("box_filter_match_active")
    })





    /* value tokens  */
    const input_token = document.querySelector(".input_token ")
    const button_createRoom = document.querySelector(".button_createRoom ")
    const tokens_match = document.querySelector(".tokens_match ")


        button_createRoom.addEventListener("click", function(){

            if(input_token.value < 10){
                input_token.value= 10
            }
        })


        tokens_match.addEventListener("click", function(){

            if(input_token.value < 10){
                input_token.value= 10
            }
        })



}

export default navChallengeFuncional