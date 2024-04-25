const shareIcon = document.querySelector(".share-icon");
const sharePopup = document.querySelector(".share-popup");

shareIcon.addEventListener("click", (e) => {
  sharePopup.classList.toggle("visible") ;
});
