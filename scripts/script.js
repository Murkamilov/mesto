const editBtn = document.querySelector('.profile__btn-edit');
const popUp = document.querySelector('.popup');
const closeBtn = document.querySelector('.popup__close');
const closeBtnAdd = document.querySelector('.popup-add__close')
const profileName = document.querySelector('.profile__name');
const form = document.querySelector('.popup__form');
const profileDescr = document.querySelector('.profile__name-descr');
const popupTitle = document.querySelector('.popup__input_type_name');
const popupDescr = document.querySelector('.popup__input_type_profession');
const popupAdd = document.querySelector('.popup-add');
const addBtn = document.querySelector('.profile__btn-add');
const opencards = document.querySelector('.opencards')
const opencardsLink = document.querySelector('.opencards__img');
const opencardsCloseBtn = document.querySelector('.opencards__close-btn');
const opencardsTitle = document.querySelector('.opencards__title');
const newCardsName = document.querySelector('.popup__input_type_title');
const newCardsLink = document.querySelector('.popup__input_type_link');
const elementsSection = document.querySelector('.elements');
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

function close(node) {
  node.classList.remove('popup_open')
}

function open(node) {
  node.classList.add('popup_open')
}

function closeCards(node) {
  node.classList.remove('opencards_active')
}

function popupSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupTitle.value;
  profileDescr.textContent = popupDescr.value;
  close(popUp);
}

editBtn.addEventListener('click', () => {
  open(popUp)
  popupTitle.value = profileName.textContent.trim();
  popupDescr.value = profileDescr.textContent.trim();
});
opencardsCloseBtn.addEventListener('click', () => {
  closeCards(opencards)
});

const newCardSubmit = function (evt) {
  evt.preventDefault();
  initialCards.unshift({
    name: newCardsName.value,
    link: newCardsLink.value,
  });
  close(popupAdd);
  render(initialCards)
};

addBtn.addEventListener('click', () => open(popupAdd));
closeBtn.addEventListener('click', () => close(popUp));
closeBtnAdd.addEventListener('click', () => close(popupAdd));
form.addEventListener('submit', popupSubmit);
popupAdd.addEventListener('submit', newCardSubmit);

function render(list) {
  const cards = list.map((card, index) => {
    return `
           <div data-id="${index}" class="restangle">
            <button class="restangle__delite">
            </button>
            <img class="restangle__image" src="${card.link}" alt="${card.name}" />
            <div class="restangle__box">
              <h2 class="restangle__text">${card.name}</h2>
              <button type="button" class="restangle__like-btn">
              </button>
            </div>
          </div>
  `
  })
  elementsSection.innerHTML = cards.join('');
}

elementsSection.addEventListener('click', (event) => {
  const target = event.target.classList;
  if (target.contains('restangle__like-btn')) {
    target.toggle('restangle__like-btn_active');
  } else if (target.contains('restangle__delite')) {
    const id = event.target.closest('.restangle').dataset.id;
    const card = document.querySelector(`[data-id="${id}"]`);
    card.remove();
  } else if (target.contains('restangle__image')) {
    opencardsLink.src = event.target.src;
    opencardsTitle.innerHTML = event.target.alt;
    opencards.classList.toggle('opencards_active');
  }
})

render(initialCards);