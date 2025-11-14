const initialCards = [
  {
    name: "Cliff Sitting on a Bike",
    link: "https://images.unsplash.com/photo-1534146789009-76ed5060ec70?q=80&w=709&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Early Evening Campfire",
    link: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxib29rbWFya3MtcGFnZXw0fHx8ZW58MHx8fHx8",
  },
  {
    name: "Hiking Beside Stone Cairns",
    link: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxib29rbWFya3MtcGFnZXw1fHx8ZW58MHx8fHx8",
  },
  {
    name: "Old Stone Bridge",
    link: "https://images.unsplash.com/photo-1662126459396-8b631baf492f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9sZCUyMGZvcmVzdCUyMGJyaWRnZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Jungle Canyon With a River",
    link: "https://images.unsplash.com/photo-1543076499-a6133cb932fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdmV8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Forest Trail with Lush Vegetation",
    link: "https://images.unsplash.com/photo-1669768185505-8c611f00c088?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG91dGRvb3IlMjBoaWtpbmd8ZW58MHx8MHx8fDA%3D",
  },
];

const editProfileButton = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const closeModalButton = editProfileModal.querySelector(".modal__close-btn");

const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

editProfileButton.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  openModal(editProfileModal);
});

closeModalButton.addEventListener("click", function () {
  closeModal(editProfileModal);
});

const profileAddBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const modalCloseBtn = newPostModal.querySelector(".modal__close-btn");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

const cardsList = document.querySelector(".cards__list");


const previewModal = document.querySelector("#preview-modal");
const previewModalImageEl = previewModal.querySelector(".modal__image");
const previewModalCaptionEl = previewModal.querySelector(".modal__caption")
const previewModalCloseBtnEl = previewModal.querySelector(".modal__close-btn");

previewModalCloseBtnEl.addEventListener("click", () => {
  closeModal(previewModal);
});

function getCardEl(data) {
  const cardEl = cardTemplate.cloneNode(true);
  const cardTitleEl = cardEl.querySelector(".card__title");
  const cardImageEl = cardEl.querySelector(".card__image");

  cardTitleEl.textContent = data.name;
  cardImageEl.alt = data.name;
  cardImageEl.src = data.link;

  const cardLikeBtnEl = cardEl.querySelector(".card__like-btn");
  cardLikeBtnEl.addEventListener("click", () => {
    cardLikeBtnEl.classList.toggle("card__like-btn_active");
  });

  const cardDeleteBtnEl = cardEl.querySelector(".card__delete-btn");
  cardDeleteBtnEl.addEventListener("click", () => {
    cardDeleteBtnEl.closest(".card").remove();
  });

  cardImageEl.addEventListener("click", () => {
    previewModalCaptionEl.textContent = data.name;
    previewModalImageEl.alt = data.name;
    previewModalImageEl.src = data.link;

    openModal(previewModal);
  });

  return cardEl;
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

function handleEditProfileModalSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;

  closeModal(editProfileModal);
}

editProfileForm.addEventListener("submit", handleEditProfileModalSubmit);

const newPostForm = newPostModal.querySelector(".modal__form");
const profileLinkInput = newPostModal.querySelector("#profile-link-input");
const profileCaptionInput = newPostModal.querySelector(
  "#profile-caption-input"
);

profileAddBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

modalCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

function handleNewPostModalSubmit(evt) {
  evt.preventDefault();

  console.log(profileLinkInput.value);
  console.log(profileCaptionInput.value);

  const cardElement = getCardEl({
    name: profileCaptionInput.value,
    link: profileLinkInput.value,
  });
  cardsList.prepend(cardElement);

  newPostForm.reset();

  closeModal(newPostModal);
}

const addCardModal = document.querySelector("#new-post-modal");
const addCardModalForm = addCardModal.querySelector(".modal__form");

addCardModalForm.addEventListener("submit", handleNewPostModalSubmit);

initialCards.forEach(function (item) {
  const cardElement = getCardEl(item);
  cardsList.prepend(cardElement);
});
