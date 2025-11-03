
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

  newPostForm.reset();
}

const addCardModal = document.querySelector("#new-post-modal");
const addCardModalForm = addCardModal.querySelector(".modal__form");

addCardModalForm.addEventListener("submit", handleNewPostModalSubmit);
