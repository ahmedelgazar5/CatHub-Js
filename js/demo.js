//     slider


let img_slider = document.querySelector(".slider");
// let images = ['url(../images/2.jpg)','url(../images/1.jpg)','url(../images/3.jpg)']
let i = 3;
let play = true;
function next() {
  i++;
  if (i > 3) {
    i = 1;
  }
  img_slider.style.backgroundImage = `url(../images/${i}.jpg)`;
}

function prev() {
  i--;
  if (i <= 0) {
    i = 3;
  }
  img_slider.style.backgroundImage = `url(../images/${i}.jpg)`;
}
var nextImg = document.querySelector(".button_slider button:last-child");
var pervImg = document.querySelector(".button_slider button:first-child");

nextImg.addEventListener("click", next);
pervImg.addEventListener("click", prev);

window.setInterval(() => {
  if (play) next();
}, 1500);

img_slider.addEventListener("mouseover", () => {
  play = false;
});
img_slider.addEventListener("mouseout", () => {
  play = true;
});



//    categories 


let categories = document.querySelectorAll(".categories button");
let categoriesHover = document.querySelectorAll(".categories button:hover");
let featured = document.querySelector(".featured");
let latest = document.querySelector(".latest");
let best_seller = document.querySelector(".best_seller");

categories[0].addEventListener("click", () => {
  featured.style.display = "block";
  latest.style.display = "none";
  best_seller.style.display = "none";
  categories[0].style.transform = "scale(1.25)";
  categories[1].style.transform = "scale(1)";
  categories[2].style.transform = "scale(1)";
  categories[3].style.transform = "scale(1)";
  categories[0].style.color = "brown";
  categories[1].style.color = "aliceblue";
  categories[2].style.color = "aliceblue";
  categories[3].style.color = "aliceblue";
});

categories[1].addEventListener("click", () => {
  featured.style.display = "none";
  latest.style.display = "block";
  best_seller.style.display = "none";
  categories[1].style.transform = "scale(1.25)";
  categories[0].style.transform = "scale(1)";
  categories[2].style.transform = "scale(1)";
  categories[3].style.transform = "scale(1)";
  categories[1].style.color = "brown";
  categories[0].style.color = "aliceblue";
  categories[2].style.color = "aliceblue";
  categories[3].style.color = "aliceblue";
});

categories[2].addEventListener("click", () => {
  featured.style.display = "none";
  latest.style.display = "none";
  best_seller.style.display = "block";
  categories[2].style.transform = "scale(1.25)";
  categories[1].style.transform = "scale(1)";
  categories[0].style.transform = "scale(1)";
  categories[3].style.transform = "scale(1)";
  categories[2].style.color = "brown";
  categories[1].style.color = "aliceblue";
  categories[0].style.color = "aliceblue";
  categories[3].style.color = "aliceblue";
});

categories[3].addEventListener("click", () => {
  featured.style.display = "block";
  latest.style.display = "block";
  best_seller.style.display = "block";
  categories[3].style.transform = "scale(1.25)";
  categories[1].style.transform = "scale(1)";
  categories[2].style.transform = "scale(1)";
  categories[0].style.transform = "scale(1)";
  categories[3].style.color = "brown";
  categories[1].style.color = "aliceblue";
  categories[2].style.color = "aliceblue";
  categories[0].style.color = "aliceblue";
});

let countreDispaly = document.getElementById("count");
let addCart = document.querySelectorAll(".product_card button");
let counter = 0;

for (let i = 0; i < addCart.length; i++) {
  addCart[i].addEventListener("click", () => {
    counter++;
    countreDispaly.innerText = counter;
  });
}


//    to top of the page        

let topPage = document.getElementById("topPage");

window.addEventListener("scroll", () => {
  if (window.scrollY < 1000) {
    topPage.style.opacity = 0;
  } else {
    topPage.style.opacity = 1;
  }
});
topPage.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});




