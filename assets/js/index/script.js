document.addEventListener("DOMContentLoaded", function () {
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
  gsap.registerPlugin(ScrollTrigger, Flip);

  let galleryItem = document.querySelectorAll(".gallery .gallery-item");

  galleryItem.forEach((el) => el.classList.add("flip"));

  let state = Flip.getState(
    [".gallery .gallery-item", ".gallery .gallery-item .img"],
    {
      props: "borderRadius",
    },
  );

  galleryItem.forEach((el) => el.classList.remove("flip"));

  Flip.to(state, {
    scale: true,
    simple: true,
    scrollTrigger: {
      trigger: ".gallery",
      start: "center center",
      end: "+=200%",
      scrub: true,
      pin: true,
      markers: true,
    },
  });
});
