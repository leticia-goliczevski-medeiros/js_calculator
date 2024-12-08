const page = document.querySelector(".page");

const lightOption = document.querySelector(".form__light-option");

lightOption.addEventListener('click', ()=> {
  page.classList.remove("dark-theme");
  document.querySelector(".form__input_light").checked = true;
})

const darkOption = document.querySelector(".form__dark-option");

darkOption.addEventListener('click', ()=> {
  page.classList.add("dark-theme");
  document.querySelector(".form__input_dark").checked = true;
})