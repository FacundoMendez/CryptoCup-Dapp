const errorNoPrediction = () => {
    const team1_win_basic = document.querySelector(".left_pred")
    const empate_basic = document.querySelector(".center_pred")
    const team2_win_basic = document.querySelector(".right_pred")

    empate_basic.classList.add("left_pred_active")
    team2_win_basic.classList.add("center_pred_active")
    team1_win_basic.classList.add("right_pred_active")
    setTimeout(() => {
        empate_basic.classList.remove("left_pred_active")
        team2_win_basic.classList.remove("center_pred_active")
        team1_win_basic.classList.remove("right_pred_active")
    }, 1000);
}

export default errorNoPrediction