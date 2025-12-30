(function () {
  // Luo wrapper div
  const wrapper = document.createElement("div");
  wrapper.style.position = "fixed";
  wrapper.style.left = "16px";
  wrapper.style.bottom = "16px";
  wrapper.style.width = "110px";
  wrapper.style.height = "110px";
  wrapper.style.borderRadius = "14px";
  wrapper.style.overflow = "hidden";
  wrapper.style.zIndex = "9999";
  wrapper.style.boxShadow = "0 8px 24px rgba(0,0,0,.25)";
  wrapper.style.cursor = "pointer"; // näyttää klikattavalta

  // Luo videoelementti
  const video = document.createElement("video");
  video.src = "https://digiapusi.github.io/digicard-video-1/esittely.mp4"; // oma video
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.style.width = "100%";
  video.style.height = "100%";
  video.style.objectFit = "cover";

  // Lisää video wrapperiin
  wrapper.appendChild(video);
  document.body.appendChild(wrapper);

  // Click event fullscreenille
  wrapper.addEventListener('click', () => {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitEnterFullscreen) { // Safari
      video.webkitEnterFullscreen();
    } else {
      video.play(); // fallback mobiilille
    }
  });

  // Mobiilissa varmista toisto touch-eventilla
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    video.autoplay = false; // estetään automaattinen virhe
    wrapper.addEventListener('touchstart', () => {
      video.play();
    }, { once: true });
  }
})();
