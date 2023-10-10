gsap.registerPlugin(ScrollTrigger);

//toggleActions options: play pause resume reverse restart reset complete none 🟢
// start: "top << (relates to the trigger) center << (relates to the screen viewport)" 🟢
// you can use top/center/bottom or pixels/percentages (relative to top of the trigger) 🟢
// https://greensock.com/scrolltrigger/ keep watching 🔴
/* gsap.to(".creativity-text p", {
    scrollTrigger: {
        trigger: ".creativity-text p",
    },
    x: 200,
    duration: 2.5
})
gsap.to(".tech-text", {
    scrollTrigger: {
        trigger: ".creativity-text p",
    },
    x: -340,
    duration: 3
})
 */
gsap.to(".creativity-text p", {
    scrollTrigger: {
        scrub: true
    },
    x: 1600,
})

gsap.to(".tech-text p", {
    scrollTrigger: {
        scrub: true,
    },
    x: -1600,
})

const selected = document.querySelector(".selected-section")
const body = document.querySelector(".body-class")
const sectionNamesContainer = document.querySelector(".section-names");
const sectionNames = document.querySelectorAll(".section-names p");
//get the height of the seen screen
//i want to know in what section the user is
const sections = document.querySelectorAll(".section");
const options = {
  root: null,
  threshold: 0.6 // how much of the section is needed to change the selected
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const section = entry.target;
      const sectionId = section.getAttribute("id");
      
      if (sectionId == "section1") {
        selected.style.left = "0%";
        changeSectionName(sectionId);
      } else if (sectionId == "section2") {
        selected.style.left = "23.25%";
        changeSectionName(sectionId);
      } else if (sectionId == "section3") {
        selected.style.left = "49%";
        changeSectionName(sectionId);
      } else if (sectionId == "section4") {
        selected.style.left = "75%";
        changeSectionName(sectionId);
      }
      
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

function gsapheader(color, name, textColor) {
    var tl = gsap.timeline();
        tl.to(sectionNamesContainer, {
            x: 450,
            duration: 0.3,
        }).to(sectionNames, {
            innerText: name,
            color: textColor
        }).to(sectionNamesContainer, {
            x: 0,
            background: color,
            duration: 0.3
        })
    
}
function changeSectionName(sectionid) {
    if (sectionid == "section1") {
        //animate sectionNameContainer with gsap
        gsapheader("#8312D3", "Home", 'white');
    } else if (sectionid == "section2") {
        gsapheader("#f0ba00", "Projects", 'black');
    } else if (sectionid == "section3") {
        gsapheader("#8312D3", "About Me", 'white');
    } else if (sectionid == "section4") {
        gsapheader("#f0ba00", "Get in Touch", 'black');
    }
}

