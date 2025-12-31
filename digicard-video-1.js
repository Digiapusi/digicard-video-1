document.addEventListener("DOMContentLoaded", function () {

  const wrapper = document.createElement("div");
  wrapper.style.position = "fixed";
  wrapper.style.left = "16px";
  wrapper.style.bottom = "16px";
  wrapper.style.width = "120px";
  wrapper.style.height = "120px";
  wrapper.style.borderRadius = "16px";
  wrapper.style.overflow = "hidden";
  wrapper.style.zIndex = "9999";
  wrapper.style.boxShadow = "0 8px 24px rgba(0,0,0,0.3)";
  wrapper.style.backgroundColor = "#000";
  wrapper.style.cursor = "pointer";

  const video = document.createElement("video");
  video.src = "https://digiapusi.github.io/digicard-video-1/esittely.mp4";
  video.muted = true;              // 🔇 nurkkavideo aina mykistetty
  video.loop = true;
  video.autoplay = true;
  video.playsInline = true;
  video.controls = false;
  video.style.width = "100%";
  video.style.height = "100%";
  video.style.objectFit = "cover";

  wrapper.appendChild(video);
  document.body.appendChild(wrapper);

  wrapper.addEventListener("click", function () {

    // 👉 fullscreen = käyttäjän ele → ääni sallittu
    video.muted = false;
    video.controls = true;

    video.play().catch(() => {});

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitEnterFullscreen) {
      video.webkitEnterFullscreen(); // iOS Safari
    }
  });

});
