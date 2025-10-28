
//Edit Profile Modal//
const editProfileButton = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const closeModalButton = editProfileModal.querySelector(".modal__close-btn");

editProfileButton.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
});

closeModalButton.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});


//New Post Modal//
const profileAddBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const modalCloseBtn = newPostModal.querySelector(".modal__close-btn");

profileAddBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

modalCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});
