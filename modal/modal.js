const showModal = document.querySelectorAll(".show-modal");
const modalElement = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
// a function that removes the modal popup
const removeModal = function () {
  modalElement.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", function () {
    modalElement.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}
// removing the modal popup by pressing close-modal button
closeModal.addEventListener("click", removeModal);

//removing the popup by pressing in the blankspace

overlay.addEventListener("click", removeModal);

// when  we press the ESC button on the keyboard we also remove the modal popup
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modalElement.classList.contains("hidden")) {
    removeModal();
  }
});
