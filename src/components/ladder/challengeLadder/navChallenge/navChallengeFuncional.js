const navChallengeFuncional = () => {

    const containerFilter = document.querySelector(".containerFilter_match ")
    const box_filter_match = document.querySelector(".box_filter_match ")
    const container_tableChallenge = document.querySelector(".container_friendsLadder ")
    const container_navChallenge = document.querySelector(".nav_challengeRoom ")
    const container_createRoom = document.querySelector(".container_createRoom ")





    containerFilter.addEventListener("click", function(){
        box_filter_match.classList.add("box_filter_match_active")
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
}

export default navChallengeFuncional