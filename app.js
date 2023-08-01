import people from "./data.js";

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error("no element selected");
};

const container = getElement(".slide-container"),
  nextBtn = getElement(".next-btn"),
  prevBtn = getElement(".prev-btn");

container.innerHTML = people
  .map((person, slideIndex) => {
    const { img, name, job, text } = person;

    let position = "next";
    if (slideIndex === 0) {
      position = "active";
    }
    if (slideIndex === people.length - 1) {
      position = "last";
    }

    // more logic later.
    return `<article class="slide ${position}">
       <img class="img" src="${img}" alt="${name}">
       <h4>${name}</h4>
       <p class="title">${job}</p>
       <p class="text">${text}</p>
       <div class="quote-icon">
         <div class="fas fa-quote-right"></div>
       </div>
     </article>`;
  })
  .join("");
