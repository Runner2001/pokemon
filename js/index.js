const menu = document.getElementById("menu")
const menu_item = document.getElementById("item")

menu.addEventListener("click", () => {
    menu_item.classList.toggle("show");
});