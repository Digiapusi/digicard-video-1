(function () {
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

  const video = document.createElement("video");
  video.src = "https://Digiapusi.github.io/digicard-video-1/esittely.mp4"; // Vaihda oma käyttäjänimesi
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;

  video.style.width = "100%";
  video.style.height = "100%";
  video.style.objectFit = "cover";

  wrapper.appendChild(video);
  document.body.appendChild(wrapper);
})();
