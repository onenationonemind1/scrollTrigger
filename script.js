gsap.registerPlugin(ScrollTrigger);

gsap.to(".a", {
  scrollTrigger: {
    trigger: ".a",
    toggleActions: "play pause reverse restart",
  },
  x: 400,
  rotation: 360,
  duration: 1,
});

gsap.to(".b", {
  scrollTrigger: {
    trigger: ".b",
    toggleActions: "play pause reverse restart",
  },
  x: 200,
  rotation: 360,
  duration: 1,
});

gsap.to(".c", {
  scrollTrigger: {
    start: "top center",
    trigger: ".c",
    toggleActions: "play none none reverse",
  },
  x: 400,
  rotation: 360,
  duration: 3,
});

//들어, 나가, 뒤로, 재설정
