import Popup from "./Popup.js";
import { resetValidation, settings } from "../utils/validation.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".modal__form");
  }

  _getInputValues() {
    return {
      name: this._form.querySelector("#profile-name-input")?.value,
      description: this._form.querySelector("#profile-description-input")?.value,
      caption: this._form.querySelector("#profile-caption-input")?.value,
      link: this._form.querySelector("#profile-link-input")?.value,
    };
  }

  open() {
    super.open();
    resetValidation(this._form, settings);
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
      this._form.reset();
    });
  }
}