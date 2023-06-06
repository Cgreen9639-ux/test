const dropdownBtn: HTMLElement = document.getElementById("btn")!;
const dropdownMenu: HTMLElement = document.getElementById("dropdown")!;
const toggleArrow: HTMLElement = document.getElementById("arrow")!;

const toggleDropdown = function () {
    dropdownMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow");
};

dropdownBtn.addEventListener("click", function (e: Event) {
    e.stopPropagation();
    toggleDropdown();
});

