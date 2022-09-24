const predictionsBasic_funcional = () => {

    const team1_win_basic = document.getElementById("team1_win_basic")
    const empate_basic = document.getElementById("empate_basic")
    const team2_win_basic = document.getElementById("team2_win_basic")

    empate_basic.addEventListener("click", function(){
        empate_basic.style.backgroundColor="rgba(220, 198, 255, 0.662)"
        team2_win_basic.style.backgroundColor="rgba(177, 129, 253, 0.199"
        team1_win_basic.style.backgroundColor="rgba(177, 129, 253, 0.199"
    })

    
    team1_win_basic.addEventListener("click", function(){
        team1_win_basic.style.backgroundColor="rgba(220, 198, 255, 0.662)"
        team2_win_basic.style.backgroundColor="rgba(177, 129, 253, 0.199"
        empate_basic.style.backgroundColor="rgba(177, 129, 253, 0.199"
    })

    
    team2_win_basic.addEventListener("click", function(){
        team2_win_basic.style.backgroundColor="rgba(220, 198, 255, 0.662)"
        empate_basic.style.backgroundColor="rgba(177, 129, 253, 0.199"
        team1_win_basic.style.backgroundColor="rgba(177, 129, 253, 0.199"
    })

}

export default predictionsBasic_funcional;