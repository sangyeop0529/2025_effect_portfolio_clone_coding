// Splitting 호출
Splitting();

// header 영역 스크롤 방향 이벤트
const headerEl = document.querySelector("header");
let prevScrollTop = 0;

const handleHeaderScroll = () => {
  const nowScrollTop = window.scrollY;
  const isScrollingDown = nowScrollTop > prevScrollTop;

  headerEl.classList.toggle("active", isScrollingDown);
  prevScrollTop = nowScrollTop;
};

document.addEventListener("scroll", handleHeaderScroll);

// scrolla.js
$(function () {
  $(".animate").scrolla({
    mobile: true,
    once: false,
  });
});

// svg path length
document.addEventListener("DOMContentLoaded", () => {
  ["svgAni01", "svgAni02", "svgAni03", "svgAni04", "svgAni05"].forEach(
    (pathId) => {
      const path = document.getElementById(pathId);
      const length = path?.getTotalLength();

      if (length) {
        console.log(`${pathId}의 길이 : `, length);
      }
    }
  );
});

// con01 gsap animation
gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".con01",
      start: "top 80%",
      end: "bottom bottom",
      scrub: 1,
      // markers: true,
    },
  })
  .to(
    ".wrap",
    {
      backgroundColor: "#fff",
      color: "#000",
      ease: "none",
    },
    0
  )
  .to(
    ".svgAni path",
    {
      stroke: "#000",
      ease: "none",
    },
    0
  )
  .to(
    ".scroll",
    {
      opacity: 0,
      ease: "none",
    },
    0
  )
  .fromTo(
    ".videoWrap video",
    {
      clipPath: "inset(60% 60% 60% 60% round 30%)",
    },
    {
      clipPath: "inset(0% 0% 0% 0% round 0%)",
      ease: "none",
    },
    0
  );

// con02 gsap animation
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".con02",
      start: "0 100%",
      end: "0 20%",
      scrub: 1,
      // markers: true,
    },
  })
  .fromTo(
    ".con02 .title .a",
    {
      x: "-100%",
    },
    {
      x: "0%",
      ease: "none",
      duration: 5,
    },
    0
  )
  .fromTo(
    ".con02 .title .b",
    {
      x: "100%",
    },
    {
      x: "0%",
      ease: "none",
      duration: 5,
    },
    0
  );

// con03 gsap animation
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".workList",
      start: "0 100%",
      end: "0 100%",
      scrub: 1,
      // markers: true,
    },
  })
  .to(
    ".wrap",
    {
      backgroundColor: "#000",
      color: "#fff",
      ease: "none",
      duration: 5,
    },
    0
  )
  .to(
    ".con02 .title",
    {
      position: "fixed",
      ease: "none",
      left: 0,
      top: 0,
      width: "100%",
      duration: 5,
    },
    0
  )
  .fromTo(
    ".workList",
    {
      margin: "0 auto",
    },
    {
      margin: "100vh auto 0",
      position: "relative",
      zIndex: 10,
      duration: 1,
    },
    0
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".workList",
      start: "100% 50%",
      end: "100% 0%",
      scrub: 1,
      // markers: true,
    },
  })
  .to(
    ".con02 .title .a",
    {
      x: "-100%",
      ease: "none",
      duration: 5,
    },
    0
  )
  .to(
    ".con02 .title .b",
    {
      x: "100%",
      ease: "none",
      duration: 5,
    },
    0
  );

// simplyscroll
$(function () {
  $(".con03 .list").simplyScroll({
    speed: 4,
    pauseOnHover: false,
    pauseOnTouch: false,
  });
});
