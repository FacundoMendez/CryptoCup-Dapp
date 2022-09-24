const predictionsBasic_funcional = () => {

    const team1_win_basic = document.getElementById("team1_win_basic")
    const empate_basic = document.getElementById("empate_basic")
    const team2_win_basic = document.getElementById("team2_win_basic")

    empate_basic.addEventListener("click", function(){
        empate_basic.style.backgroundColor="rgba(168, 255, 222, 0.925)"
        empate_basic.style.color="black"

        team2_win_basic.style.backgroundColor="rgba(177, 129, 253, 0.199"
        team2_win_basic.style.color="white"

        team1_win_basic.style.backgroundColor="rgba(177, 129, 253, 0.199"
        team1_win_basic.style.color="white"
    })

    
    team1_win_basic.addEventListener("click", function(){
        team1_win_basic.style.backgroundColor="rgba(168, 255, 222, 0.925)"
        team1_win_basic.style.color="black"

        team2_win_basic.style.backgroundColor="rgba(177, 129, 253, 0.199"
        team2_win_basic.style.color="white"

        empate_basic.style.backgroundColor="rgba(177, 129, 253, 0.199"
        empate_basic.style.color="white"

    })

    
    team2_win_basic.addEventListener("click", function(){
        team2_win_basic.style.backgroundColor="rgba(168, 255, 222, 0.925)"
        team2_win_basic.style.color="black"

        empate_basic.style.backgroundColor="rgba(177, 129, 253, 0.199"
        empate_basic.style.color="white"

        team1_win_basic.style.backgroundColor="rgba(177, 129, 253, 0.199"
        team1_win_basic.style.color="white"
    })

}

export default predictionsBasic_funcional;