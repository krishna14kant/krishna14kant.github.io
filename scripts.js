//declaring variables
const openList = document.querySelector(".open");
const navList = document.querySelector(".nav-list");
const closeList = document.querySelector(".close");
//opening the navigation bar
openList.addEventListener("click", () => {
    navList.classList.add("active");
});
//closing the navigation bar
closeList.addEventListener("click", () => {
    navList.classList.remove("active");
});