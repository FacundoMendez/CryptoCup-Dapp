import VanillaTilt from "vanilla-tilt";
const ladderHomeEffect = () => {

    VanillaTilt.init(document.querySelectorAll(".box_splide"), {
        max: 3,
        speed: 600,
        perspective: 800,
        glare: true,
        "max-glare": 0.3,
    });
    


}

export default ladderHomeEffect