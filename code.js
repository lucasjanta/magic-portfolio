gsap.registerPlugin(ScrollTrigger);

//toggleActions options: play pause resume reverse restart reset complete none 🟢
// start: "top << (relates to the trigger) center << (relates to the screen viewport)" 🟢
// you can use top/center/bottom or pixels/percentages (relative to top of the trigger) 🟢
// https://greensock.com/scrolltrigger/ keep watching 🔴
gsap.to(".creativity-text p", {
    scrollTrigger: {
        trigger: ".creativity-text p",
        /* start: "top 15%",
        end: "bottom 100px",
        markers: true,
        toggleActions: "restart pause reverse pause", */
    },
    x: 270,
    duration: 4
})

gsap.to(".tech-text", {
    scrollTrigger: {
        trigger: ".creativity-text p",
        /* start: "top 15%",
        end: "bottom 100px",
        markers: true,
        toggleActions: "restart pause reverse pause", */
    },
    x: -300,
    duration: 4.8
})