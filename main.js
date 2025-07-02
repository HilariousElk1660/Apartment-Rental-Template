function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopupAlert() {
  alert("Thank you for subscribing!");
  document.getElementById("popup").style.display = "none";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function changeImage(element) {
  let activeImage = document.getElementById("active__img");
  let caption = document.getElementById("image__description");

  activeImage.src = element.src;

  if (element.alt) {
    caption.innerHTML = element.alt;
  }
}
