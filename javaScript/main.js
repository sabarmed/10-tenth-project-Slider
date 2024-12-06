const body = document.getElementById("body");
const dark = document.getElementById("dark");

dark.addEventListener("click", () => {
  body.classList.toggle("dark");
});

// this for slider to change pictur and remove action on the other button
const sliderContainer = document.getElementById("sliercontainer");
const previous = document.getElementById("pre");
const next = document.getElementById("next");
const allBtns = document.querySelectorAll(".my-slider-bttn");
const parentButtons = document.getElementsByClassName("button-numbers")[0];

const arrImage = [
  `<img src="/my image/bitcoin-defi-1200x800.jpg" class="img-slider">`,
  `<img src="/my image/1677140856046.jpeg" class="img-slider">`,
  `<img src="/my image/7282934-metaverse-a-different-point-of-view.jpg" class="img-slider">`,
  `<img src="/my image/ai-generated-8571839_960_720.webp" class="img-slider">`,
  `<img src="/my image/appl-gpt-feature.webp" class="img-slider">`,
];
// for pre (privous button) hide it and give acces to next button
let i = 0;
sliderContainer.innerHTML += arrImage[i];
previous.setAttribute("disabled", "disabled");
sliderContainer.innerHTML += `<p>slide #${i + 1} of ${arrImage.length}</p>`;

next.addEventListener("click", (eo) => {
 
  previous.removeAttribute("disabled");
  i++;
  sliderContainer.innerHTML += arrImage[i];
  sliderContainer.innerHTML += `<p>slide #${i + 1} of ${arrImage.length} </p>`;
  if (i + 1 == arrImage.length) {
    next.setAttribute("disabled", "disabled");
  }
  parentButtons
  .getElementsByClassName("active-num")[0]
  .classList.remove("active-num");
parentButtons.getElementsByTagName("button")[i].classList.add("active-num")

});
// for changing between pictuires and add and remove the setAtrebutes
previous.addEventListener("click", (eo) => {
  next.removeAttribute("disabled");
  i--
  sliderContainer.innerHTML += arrImage[i];
  sliderContainer.innerHTML += `<p>slide #${i + 1} of ${arrImage.length} </p>`;
  if (i == 0) {
    previous.setAttribute("disabled", "disabled");
  }
  parentButtons
  .getElementsByClassName("active-num")[0]
  .classList.remove("active-num");
parentButtons.getElementsByTagName("button")[i].classList.add("active-num")
});

//  for moving between slider numbers under the pictures


allBtns.forEach( (item, index) => {
  item.addEventListener("click", (eo) => {
    parentButtons
      .getElementsByClassName("active-num")[0]
      .classList.remove("active-num");
    // item.classList.add("active-num")
    eo.target.classList.add("active-num");

    sliderContainer.innerHTML += arrImage[index];
    sliderContainer.innerHTML += `<p>slide #${index + 1} of ${
      arrImage.length
    } </p>`;

    i = index;

    if (index == arrImage.length - 1) {
      next.setAttribute("disabled", "disabled");
      previous.removeAttribute("disabled");
    } else if (index == 0) {
      next.removeAttribute("disabled");
      previous.setAttribute("disabled", "disabled");
    } else {
      next.removeAttribute("disabled");
      previous.removeAttribute("disabled");
    }
  });
});
