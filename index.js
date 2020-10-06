// const body = document.querySelector("body");
// const section = document.querySelector(".section");
// const section1 = document.getElementsByClassName("section");
// console.log(section1);

// const picture = document.querySelector("#wrapper-img");
// const picture1 = (document.getElementById("wrapper-img").style.width = "450px");

// console.log(picture1);

// const showBtn = document.querySelector('[data-action="show"]');

// const src =
//   "https://images.unsplash.com/photo-1599721303487-b1cb7e729651?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
// const src2 =
//   "https://images.unsplash.com/photo-1591064801473-6ccaa310dd66?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80";

// // Cлушатель на замену картинки срц
// showBtn.addEventListener("click", () => {
//   // picture.classList.toggle("wrapper-img");
//   if (beautyImg.src === src && sectionTitle.style.fontSize === "50px") {
//     beautyImg.src = src2;
//     sectionTitle.style.fontSize = "75px";
//   } else {
//     beautyImg.src = src;
//     sectionTitle.style.fontSize = "50px";
//   }
// });

// const sectionTitle = document.querySelector(".section-title");
// const sectionTitle1 = document.getElementsByClassName("section-title");

// sectionTitle.addEventListener("click", () => {
//   sectionTitle.style.fontSize = "50px";
//   sectionTitle.style.fontWeight = "100";
//   sectionTitle.style.textAlign = "center";
// });

// const mainList = document.querySelector(".main-list");
// const mainList1 = document.getElementsByClassName("main=list");

// const mainListItems = document.querySelectorAll(".main-list-item");
// const mainListItems1 = document.getElementsByClassName("main-list-item");

// const innerListTitle = document.querySelector(".main-list-item-title");
// const innerListTitle1 = document.getElementsByClassName("main-list-item-list");

// const eventsList = document.querySelector("#events");
// const eventsList1 = document.getElementById("events");

// const eventsListItems = document.querySelectorAll("#events li");
// console.dir(eventsListItems);

// const beautyImg = document.getElementById("beauty");

// beautyImg.setAttribute(
//   "src",
//   "https://images.unsplash.com/photo-1599721303487-b1cb7e729651?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
// );

// beautyImg.style.width = "450px";

// // ///////////////////////////////////////

// // Создание елементов и внедрение в ДОМ!
// const ul = document.createElement("ul");

// const item1 = document.createElement("li");
// const item2 = document.createElement("li");
// const item3 = document.createElement("li");
// const item4 = document.createElement("li");

// item1.textContent = "getElementById";
// item2.textContent = "getElementByClassName";
// item3.textContent = "querySelector";
// item4.textContent = "querySelectorAll";
// ul.append(item1, item2, item3, item4);
// mainListItems[0].append(ul);

// console.dir(ul);

// console.log(ul.children.length);

// //////////////               GALLERY!!!!!!!!!!!! GALERY GALERY GALERY GALERY GALERY GALERY GALERY GALERY

import gallery from "./gallery.js";

const list = document.querySelector(".photo-gallery");

const overlay = document.querySelector(".js-lightbox");

const imgOverlay = document.querySelector(".lightbox__image");

const cart = gallery.map((el, index) => {
  const title = document.createElement("h2");
  title.textContent = el.title;

  const img = document.createElement("img");
  img.setAttribute("src", el.image);
  img.setAttribute("alt", el.category);
  img.setAttribute("width", "350px");
  img.setAttribute("data-index", index);

  const discription = document.createElement("p");
  discription.textContent = el.description;

  const subtitle = document.createElement("h3");
  subtitle.innerHTML = `<span>категория:${el.category} </span> `;

  const seria = document.createElement("p");
  seria.innerHTML = `<span>серия: </span>${el.seria}`;

  const photographer = document.createElement("p");
  photographer.innerHTML = `<span>фотограф:${el.author.name} </span> `;

  const country = document.createElement("p");
  country.innerHTML = `(${el.author.country}<span>${el.author.city}</span>)`;

  const galleryItem = document.createElement("li");
  galleryItem.append(title, img, discription, subtitle, seria, photographer, country);

  list.append(galleryItem);
});

// -Открыввем фото галереи и открываем только по клику на фото (сделано в ифе)
list.addEventListener("click", (e) => {
  console.dir(e.target.dataset.index);
  if (e.target.nodeName === "IMG") {
    overlay.classList.add("is-open");
    imgOverlay.src = e.target.src;
    imgOverlay.dataset.index = e.target.dataset.index;
  }
});

// - закрываем всплытое окно с фото
overlay.addEventListener("click", () => {
  clearOverlay();
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    clearOverlay();
  }

  if (event.key === "ArrowRight") {
    arrowRight();
  }

  if (event.key === "ArrowLeft") {
    arrowLeft();
  }
});

const clearOverlay = function () {
  overlay.classList.remove("is-open");
  imgOverlay.src = "";
};

function setNewSrc(step, index) {
  imgOverlay.dataset.index = `${index + step}`;
  imgOverlay.src = gallery[index + step].image;
}

function arrowLeft() {
  let index = +imgOverlay.dataset.index;
  if (index === 0) {
    setNewSrc(0, gallery.length - 1);
    return;
  }
  setNewSrc(-1, index);
}

function arrowRight() {
  let index = +imgOverlay.dataset.index;
  if (index === gallery.length - 1) {
    setNewSrc(0, 0);
    return;
  }
  setNewSrc(1, index);
}

// author: { name: "Хашем Шакери", country: "Иран", city: "" }
// category: "Открытия"
// description: "Так эти 12-летние девочки проводят выходные. Невесело... Их семьи вынуждены были покинуть Тегеран из-за того, что жить в нем стало слишком дорого, и переселиться в спальные районы города-спутника за З0 километров от столицы. Второе место."
// id: "4"
// image: "https://www.dw.com/image/53739558_303.jpg"
// seria: ""
// title: "Невеселые выходные"
// // __proto__: Object
