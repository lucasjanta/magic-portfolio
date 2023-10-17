gsap.registerPlugin(ScrollTrigger);

//toggleActions options: play pause resume reverse restart reset complete none 🟢
// start: "top << (relates to the trigger) center << (relates to the screen viewport)" 🟢
// you can use top/center/bottom or pixels/percentages (relative to top of the trigger) 🟢
// https://greensock.com/scrolltrigger/ keep watching 🔴
/* const timelinefirst = gsap.timeline(); */
window.onload = function(){
  firstAnimation();
}

function firstAnimation(){
  gsap.to(".creativity-text", {
      
      x: -490,
      duration: 3
  })
  gsap.to(".tech-text", {
      x: 470,
      duration: 3
  })
}

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
        animateFormsTitle(".title-box");
    } else if (sectionid == "section2") {
        gsapheader("#f0ba00", "Projects", 'black');
        animateFormsTitle(".title-triangle");
    } else if (sectionid == "section3") {
        gsapheader("#8312D3", "About Me", 'white');
        animateFormsTitle(".circle-form");
    } else if (sectionid == "section4") {
        gsapheader("#f0ba00", "Get in Touch", 'black');
        animateFormsTitle(".pentagon-form");
    }
}

function animateFormsTitle(forma){
  if (forma == ".title-box"){
    var tml = gsap.timeline();
        tml.to(forma, {
            rotation: 305,
            duration: 2.5,
        }).to(forma, {
            rotation: 45,
            duration: 1
        })
    }
  if (forma == ".title-triangle"){
    var tml = gsap.timeline();
        tml.to(forma, {
            rotation: 180,
            duration: 2.5,
        }).to(forma, {
            rotation: 0,
            duration: 1
        })
    }
  if (forma == ".circle-form"){
    var tml = gsap.timeline();
        tml.to(forma, {
            x: 25,
            y: 10,
            scale: 1.3,
            duration: 2.5,
        }).to(forma, {
            x: 0,
            scale: 1,
            duration: 1
        })
    }
  if (forma == ".pentagon-form"){
    var tml = gsap.timeline();
        tml.to(forma, {
            rotation: 180,
            scale: 1.25,
            duration: 2.5,
        }).to(forma, {
            rotation: 0,
            scale: 1,
            duration: 1
        })
    }

}
