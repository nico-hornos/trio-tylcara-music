const menu = document.querySelector(".nav__menu");
const openMenuButton = document.querySelector(".menu-button-open");
const closeMenuButton = document.querySelector(".menu-button-close");
const menuLinks = document.querySelectorAll(".menu__link");

const openMenu = () => {
  menu.classList.add("menu-active");
};

const closeMenu = () => {
  menu.classList.remove("menu-active");
};

openMenuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (menu.classList.contains("menu-active")) {
      menu.classList.remove("menu-active");
    }
  });
});

// Obtener todos los elementos con la clase "video-container"
const videoContainers = document.querySelectorAll(".video-container");

// insertVideo inserta un video de YouTube en el contenedor donde se hace clic
function insertVideo() {
  // Si algún video se encuentra activo, lo detenemos llamando a la función stopVideo
  const activeVideo = document.querySelector(".video-container.active-video");

  if (activeVideo) {
    stopVideo(activeVideo);
  }

  const currentContainer = this; // contenedor clickeado

  // Creamos un iframe y configuramos sus atributos, incluyendo una URL dinámica
  const iframe = document.createElement("iframe");

  iframe.classList.add("iframe-video");
  iframe.src = currentContainer.dataset.videoUrl;
  iframe.title = "YouTube video player";
  iframe.frameborder = "0";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowfullscreen = true;

  // Insertamos el video en el contenedor actual (y pasa a estar activo)
  currentContainer.innerHTML = "";
  currentContainer.appendChild(iframe);
  currentContainer.classList.add("active-video");
}

// stopVideo detiene el video activo y devuelve el contenido original del contenedor
function stopVideo(videoContainer) {
  videoContainer.classList.remove("active-video");
  videoContainer.innerHTML = `<i class="play-icon fa-brands fa-youtube"></i><img class="thumbnail-video" src="imagenes/thumbnails/thumbnail-video.jpg" alt="portada video youtube" />`;
}

// Agregamos un evento clic a cada contenedor de video para insertar el iframe
videoContainers.forEach((container) => container.addEventListener("click", insertVideo));
