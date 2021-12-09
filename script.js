let editBtn = document.querySelector('.profile__btn-edit')
let popUp = document.querySelector('.popup')
let closeBtn = document.querySelector('.popup__close')
let saveBtn = document.querySelector('.popup__save')
let profileName = document.querySelector('.profile__name')
let profileDescr = document.querySelector('.profile__name-descr')
let popupTitle = document.querySelector('.form__name')
let popupDescr = document.querySelector('.form__descr')

function openPopup() {
  popUp.classList.add('popup__open');
  popupTitle.value = profileName.textContent.trim();
  popupDescr.value = profileDescr.textContent.trim();
  console.log(profileName.textContent)
  console.log(profileDescr.textContent)
}

function closePopup() {
  popUp.classList.remove('popup__open');
}

function popupSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = popupTitle.value;
  profileDescr.textContent = popupDescr.value;
  closePopup();
}

editBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
saveBtn.addEventListener('click', popupSubmit);
