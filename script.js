let editBtn = document.querySelector(".profile__btn-edit");
let popUp = document.querySelector(".popup");
let closeBtn = document.querySelector(".popup__close");
let profileName = document.querySelector(".profile__name");
let form = document.querySelector(".popup__container");
let profileDescr = document.querySelector(".profile__name-descr");
let popupTitle = document.querySelector(".popup__input_name");
let popupDescr = document.querySelector(".popup__input_profession");

function openPopup() {
  popUp.classList.add("popup__open");
  popupTitle.value = profileName.textContent.trim();
  popupDescr.value = profileDescr.textContent.trim();
}

function closePopup() {
  popUp.classList.remove("popup__open");
}

function popupSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupTitle.value;
  profileDescr.textContent = popupDescr.value;
  closePopup();
}

editBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);
form.addEventListener("submit", popupSubmit);
