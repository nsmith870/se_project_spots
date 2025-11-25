// const checkInputValidity = (inputEl, formEl) => {
//   if (!inputEl.validity.valid) {
//     formEl.disabled = true;
//   }
// };

// const setEventListeners = (formEl) => {
//   const inputList = Array.from(formEl.querySelectorAll(".modal__input"));
//   const buttonEl = formEl.querySelector(".modal__submit-btn");

//   console.log(inputList);
//   console.log(buttonEl);

//   inputList.forEach((modalInputEl) => {
//     modalInputEl.addEventListener("change", function () {
//       checkInputValidity(modalInputEl, buttonEl);
//       toggleButtonState(inputList, buttonEl);
//     });
//   });
// };

// const enableValidation = () => {
//   const formList = Array.from(document.querySelectorAll(".modal__form"));
//   formList.forEach((formEl) => {
//     setEventListeners(formEl);
//   });
// };

// enableValidation();


const config = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-btn",
  errorClass: "modal__error_visible",
  inputErrorClass: "modal__input_error",
};

const showError = (inputEl, errorMessage) => {
  const errorEl = inputEl.parentElement.querySelector(".modal__error");
  errorEl.textContent = errorMessage;
  errorEl.classList.add(config.errorClass);
  inputEl.classList.add(config.inputErrorClass);
};

const hideError = (inputEl) => {
  const errorEl = inputEl.parentElement.querySelector(".modal__error");
  errorEl.textContent = "";
  errorEl.classList.remove(config.errorClass);
  inputEl.classList.remove(config.inputErrorClass);
};

const checkInputValidity = (inputEl) => {
  if (inputEl.validity.valid) {
    hideError(inputEl);
  } else {
    showError(inputEl, inputEl.validationMessage);
  }
};

const toggleButtonState = (inputList, buttonEl) => {
  const isValid = inputList.every((input) => input.validity.valid);
  buttonEl.disabled = !isValid;
  buttonEl.classList.toggle("modal__submit-btn_disabled", !isValid);
};

const setEventListeners = (formEl) => {
  const inputList = Array.from(formEl.querySelectorAll(config.inputSelector));
  const buttonEl = formEl.querySelector(config.submitButtonSelector);


  toggleButtonState(inputList, buttonEl);

  inputList.forEach((inputEl) => {
    inputEl.addEventListener("input", () => {
      checkInputValidity(inputEl);
      toggleButtonState(inputList, buttonEl);
    });
  });


  formEl.addEventListener("reset", () => {
    setTimeout(() => {
      inputList.forEach(hideError);
      toggleButtonState(inputList, buttonEl);
    }, 0);
  });
};

const enableValidation = () => {
  document.querySelectorAll(".modal__form").forEach(setEventListeners);
};


enableValidation();
