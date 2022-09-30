import VanillaTilt from "vanilla-tilt";

const profileTicketsMovement = () => {
    VanillaTilt.init(document.querySelectorAll(".box_tickets_profileUser"), {
        max: 3,
        speed: 400,
        perspective: 200,
        glare: true,
        "max-glare": 0.1,
    });
    

}

export default profileTicketsMovement;