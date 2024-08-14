const images = [...document.getElementsByTagName("img")];

images.map((image) => {
  image.classList.add("animation");
});