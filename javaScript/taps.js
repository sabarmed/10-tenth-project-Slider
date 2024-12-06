
// thos for toggel tabes
const allTaps = document.querySelectorAll(".my-btn:not(#creatccount")
const parenOfBtn= document.querySelector(".alltaps")
const parentArticle = document.querySelector(".paren-article")
allTaps.forEach( (item,index) => {
    item.addEventListener("click", (eo) => {
        // toggel between buttons
parenOfBtn.getElementsByClassName("active-btn")[0].classList.remove("active-btn")
        item.classList.add("active-btn")
        // toggel between article
       parentArticle.getElementsByClassName("active-article")[0].classList.remove("active-article")
       parentArticle.getElementsByClassName("fun-facts")[index].classList.add("active-article") 

    })
});