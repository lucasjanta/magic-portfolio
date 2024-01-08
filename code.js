gsap.registerPlugin(ScrollTrigger, Flip);

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
const myname = document.querySelector(".myname");
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
        myname.style.color = "black";
      } else if (sectionId == "section2") {
        selected.style.left = "23.25%";
        changeSectionName(sectionId);
        myname.style.color = "white";
      } else if (sectionId == "section3") {
        selected.style.left = "49%";
        changeSectionName(sectionId);
        myname.style.color = "black";
      } else if (sectionId == "section4") {
        selected.style.left = "75%";
        changeSectionName(sectionId);
        myname.style.color = "white";
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

const projects = document.querySelectorAll(".project");
const nextButton = document.querySelector(".next-button");
const previousButton = document.querySelector(".previous-button");


// existem 4 cards: projects[0], projects[1], projects[2], projects[3]

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
  if (actualindex == 0) {
    projects[0].classList.replace("selected-card", "previous-card");
    projects[1].classList.replace("next-card", "selected-card");
    projects[2].classList.replace("hidden-card", "next-card");
    projects[3].classList.replace("previous-card", "hidden-card");
  } else if(actualindex == 1) {
    projects[1].classList.replace("selected-card", "previous-card");
    projects[2].classList.replace("next-card", "selected-card");
    projects[3].classList.replace("hidden-card", "next-card");
    projects[0].classList.replace("previous-card", "hidden-card");
  } else if (actualindex == 2) {
    projects[2].classList.replace("selected-card", "previous-card");
    projects[3].classList.replace("next-card", "selected-card");
    projects[0].classList.replace("hidden-card", "next-card");
    projects[1].classList.replace("previous-card", "hidden-card");
  } else if (actualindex == 3) {
    projects[3].classList.replace("selected-card", "previous-card");
    projects[0].classList.replace("next-card", "selected-card");
    projects[1].classList.replace("hidden-card", "next-card");
    projects[2].classList.replace("previous-card", "hidden-card");
  }
}

function gotoprevious(actualindex){
  if (actualindex == 0) {
    projects[0].classList.replace("selected-card", "next-card");
    projects[1].classList.replace("next-card", "hidden-card");
    projects[2].classList.replace("hidden-card", "previous-card");
    projects[3].classList.replace("previous-card", "selected-card");
  } else if(actualindex == 1) {
    projects[1].classList.replace("selected-card", "next-card");
    projects[2].classList.replace("next-card", "hidden-card");
    projects[3].classList.replace("hidden-card", "previous-card");
    projects[0].classList.replace("previous-card", "selected-card");
  } else if (actualindex == 2) {
    projects[2].classList.replace("selected-card", "next-card");
    projects[3].classList.replace("next-card", "hidden-card");
    projects[0].classList.replace("hidden-card", "previous-card");
    projects[1].classList.replace("previous-card", "selected-card");
  } else if (actualindex == 3) {
    projects[3].classList.replace("selected-card", "next-card");
    projects[0].classList.replace("next-card", "hidden-card");
    projects[1].classList.replace("hidden-card", "previous-card");
    projects[2].classList.replace("previous-card", "selected-card");
  }
}



nextButton.addEventListener("click", () => {
  gotonext(selectedProjectIndex());
});

previousButton.addEventListener("click", () => {
  gotoprevious(selectedProjectIndex());
  
});


//Flip usage

/* const state = Flip.getState(".project");
Flip.from(state, {
  duration: 0.5,
  absolute: true,
}); */

const buttonsoncards = document.querySelectorAll(".button-spell");
const techcards = document.querySelectorAll(".card-tech");
const backtechs = document.querySelectorAll(".back-tech img");
const magehand = document.querySelector("#hand_1");
const mageEyes = document.querySelector("#eyes");

techcards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flip-card");
    const screenWidth = window.innerWidth;
    if (screenWidth < 425) {
      
    }else if (screenWidth <768 && screenWidth >= 425) {
      
    }
    const cardLeftPosition = card.offsetLeft;
    //se o clique for no card 1 então rotacionar o magehand
    if(card == techcards[0]){
      gsap.to(magehand, {
        duration: 0.5,
        x: cardLeftPosition-300,
        y: 45,
        rotation: -68
      })
      gsap.to(mageEyes, {
        duration: 0.5,
        x: -8,
        y: -3
      })
    } else if (card == techcards[1]){
      gsap.to(magehand, {
        duration: 0.5,
        x: cardLeftPosition-350,
        y: 0,
        rotation: -50
      })
      gsap.to(mageEyes, {
        duration: 0.5,
        x: -4,
        y: -3
      })
    } else if (card == techcards[2]){
      gsap.to(magehand, {
        duration: 0.5,
        x: cardLeftPosition-350,
        y: -50,
        rotation: -25
      })
      gsap.to(mageEyes, {
        duration: 0.5,
        x: 0,
        y: -5
      })
    } else if (card == techcards[3]){
      gsap.to(magehand, {
        duration: 0.5,
        x: cardLeftPosition-330,
        y: 0,
        rotation: -5
      })
      gsap.to(mageEyes, {
        duration: 0.5,
        x: 2,
        y: 0
      })
    }
    console.log(cardLeftPosition);
    console.log(screenWidth);
  });
})
function toggleSpells(index){
  for (let i = 0; i < techcards.length; i++) {
    techcards[i].classList.remove("flip-card");
  }
  if(index == 0){
    buttonsoncards[0].classList.add("spell-active");
    buttonsoncards[1].classList.remove("spell-active");
    buttonsoncards[2].classList.remove("spell-active");
    changeTechs("webdev");
  } else if(index == 1){
    buttonsoncards[0].classList.remove("spell-active");
    buttonsoncards[1].classList.add("spell-active");
    buttonsoncards[2].classList.remove("spell-active");
    changeTechs("design");
  } else if(index == 2){
    buttonsoncards[0].classList.remove("spell-active");
    buttonsoncards[1].classList.remove("spell-active");
    buttonsoncards[2].classList.add("spell-active");
    changeTechs("gamedev");
  }
  
}

function changeTechs(tech){
  setTimeout(() => {
    for(let i = 0; i < backtechs.length; i++){
      backtechs[i].src = `./images/techs/${tech}/${i}.png`;
    }
  },1000);
  
}

