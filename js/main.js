/****************** PROJECT MENU ******************/
// const allProjects = document.getElementsByClassName("project");
// mySelection('all'); // Execute the function and show all columns

// // Add active class to the current button (highlight it)
// const btnContainer = document.getElementById("myBtnContainer");

// document.querySelector(".filter-all").addEventListener("click", () => {
//     mySelection('all');
// });

// document.querySelector(".filter-android").addEventListener("click", () => {
//     mySelection('android');
// });

// document.querySelector(".filter-web").addEventListener("click", () => {
//     mySelection('web');
// });

// document.querySelector(".filter-java").addEventListener("click", () => {
//     mySelection('java');
// });

// document.querySelector(".filter-csharp").addEventListener("click", () => {
//     mySelection('csharp');
// });


// function mySelection(c) {
//     if (c === 'all') {
//         for (let i = 0; i < allProjects.length; i++) {
//             allProjects[i].classList.add('show');
//         }
//     } else {
//         for (let i = 0; i < allProjects.length; i++) {
//             let classList = allProjects[i].classList;
//             if (classList.contains(c))
//                 classList.add('show');
//             else
//                 classList.remove('show');
//         }
//     }
// }

// const btns = btnContainer.getElementsByClassName("btn");

// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//         const current = document.getElementsByClassName("active-project");
//         current[0].classList.remove("active-project");
//         this.classList.add("active-project");
//     });
// }

/****************** GLIDE ******************/

// window.addEventListener('load', function () {
//     new Glider(document.querySelector('.glider'), {
//         slidesToShow: 1,
//         duration: 2,
//         rewind: true,
//         arrows: {
//             prev: '.glider-prev',
//             next: '.glider-next'
//         }
//     })
// });

/****************** INTERSECTION OBSERVER ******************/
const options = {
    threshold: 0
};

observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('slide-in');
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('slide-in');
        }
    });
}, options);

let aboutText = document.querySelector(".about-text");
observer.observe(aboutText);

let aboutImage = document.querySelector(".about-img");
observer.observe(aboutImage);

let educationSection = document.querySelectorAll("#education > div");
educationSection.forEach(section => {
    observer.observe(section);
});

// let workExpParagraph = document.querySelector("#work-exp p");
// observer.observe(workExpParagraph);

// let workExpSVG = document.querySelector("#work-exp .work-exp-img");
// observer.observe(workExpSVG);

let workExpCompanies = document.querySelectorAll(".company");
workExpCompanies.forEach(section => {
    observer.observe(section);
});

 let skillsSection = document.querySelector(".skills-grid");
 observer.observe(skillsSection);

let projects = document.querySelectorAll(".project");
projects.forEach(section => {
    observer.observe(section);
});


// const text = "Hello, World!";
// let index = 0;

// function type() {
//   const typingText = document.getElementById("typing");
//   if (index < 13) {
//     typingText.innerHTML += text.charAt(index);
//     index++;
//     setTimeout(type, 100);
//   }
// }

// setTimeout(type, 1000);

const phrases = "Hello, World!";
let i = 0;
let j = 0;

function type() {
  const typingText = document.getElementById("typing");
  if (j < phrases.length) {
    typingText.innerHTML += phrases.charAt(j);
    j++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  const typingText = document.getElementById("typing");
  if (j > 1) {
    typingText.innerHTML = phrases.substring(0, j - 1);
    j--;
    setTimeout(erase, 50);
  } else {
    i++;
    if (i >= phrases.length) {
      i = 0;
    }
    setTimeout(type, 500);
  }
}

setTimeout(type, 1000);

