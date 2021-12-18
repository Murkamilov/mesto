let editBtn = document.querySelector(".profile__btn-edit");
let popUp = document.querySelector(".popup");
let closeBtn = document.querySelector(".popup__close");
let profileName = document.querySelector(".profile__name");
let form = document.querySelector(".popup__form");
let profileDescr = document.querySelector(".profile__name-descr");
let popupTitle = document.querySelector(".popup__input__type_name");
let popupDescr = document.querySelector(".popup__input__type_profession");

function openPopup() {
  popUp.classList.add("popup_open");
  popupTitle.value = profileName.textContent.trim();
  popupDescr.value = profileDescr.textContent.trim();
}

function closePopup() {
  popUp.classList.remove("popup_open");
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
