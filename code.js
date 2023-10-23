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
            y: -5,
            rotation: 0,
            duration: 1
        })
    }
  if (forma == ".circle-form"){
    var tml = gsap.timeline();
        tml.to(forma, {
            x: 20,
            y: 10,
            scale: 1.3,
            duration: 2.5,
        }).to(forma, {
            x: 10,
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

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("click", () => {
      if (card.classList.contains("selected")) {
        card.classList.remove("selected");
      } else{
        cards.forEach((card) => {
          card.classList.remove("selected");
      });
        card.classList.add("selected");
      }
    });
});


const projects = document.querySelectorAll(".project");
const nextButton = document.querySelector(".next-button");
const previousButton = document.querySelector(".previous-button");


console.log(selectedProjectIndex());
animateProjectTransition(selectedProjectIndex());
// RETORNA O PROJETO SELECIONADO
function selectedProjectIndex(){
  const total = projects.length;
  for (let i = 0; i < total; i++) {
    if(projects[i].classList.contains("selected-card")){
      return i;
    }
  }
};

function gotonext(actualindex){
  projects[actualindex].classList.remove("selected-card");
  projects[actualindex + 1].classList.add("selected-card");
}

function animateProjectTransition(actualindex){
  const total = projects.length;
  if(actualindex != total-1 && actualindex != 0){
      const nextProject = projects[actualindex + 1];
      const previousProject = projects[actualindex - 1];
      nextProject.classList.add("next-previous");
      nextProject.style.right = "-140px";
      previousProject.classList.add("next-previous");
      previousProject.style.left = "-140px";
    } else if(actualindex == 0){
      const nextProject = projects[1];
      const previousProject = projects[total-1];
      nextProject.classList.add("next-previous");
      nextProject.style.right = "-140px";
      previousProject.classList.add("next-previous");
      previousProject.style.left = "-140px";
    } else if(actualindex == total-1){
      const nextProject = projects[0];
      const previousProject = projects[total - 2];
      nextProject.classList.add("next-previous");
      nextProject.style.right = "-140px";
      previousProject.classList.add("next-previous");
      previousProject.style.left = "-140px";
    }

  

  /* switch(selectedProject.id){
    case "project1":
      projects[3].style.left = "-140px";
      projects[3].classList.add("next-previous");
      projects[1].style.right = "-140px";
      projects[1].classList.add("next-previous");
      break
    case "project2":
      projects[0].style.left = "-140px";
      projects[0].classList.add("next-previous");
      projects[2].style.right = "-140px";
      projects[2].classList.add("next-previous");
      break
    case "project3":
      projects[1].style.left = "-140px";
      projects[1].classList.add("next-previous");
      projects[3].style.right = "-140px";
      projects[3].classList.add("next-previous");
      break
    case "project4":
      projects[2].style.left = "-140px";
      projects[2].classList.add("next-previous");
      projects[0].style.right = "-140px";
      projects[0].classList.add("next-previous");
      break
  } */
}

nextButton.addEventListener("click", () => {
  animateProjectTransition(selectedProjectIndex());
  gotonext(selectedProjectIndex());
  
});

previousButton.addEventListener("click", () => {
  
  getSelectedProject();
});