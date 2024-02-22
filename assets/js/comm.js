$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);
  // 페이지가 로드될 때 스크롤을 맨 위로 이동
  window.onload = function () {
    window.scrollTo(0, 0);
    // 주석 풀기
    // $("body").css("overflow", "hidden");
  };
  // intro
  // 주석 풀기
  // $("#intro .btn-icon").on("click", function () {
  //   var a = document.getElementById("intro_video_inner");
  //   a.pause();
  //   $("#intro_video_inner ").fadeOut(1000);
  //   var tl = gsap.timeline();
  //   tl.to([$("#intro")], { height: 0, duration: 1 }, 1.5)
  //     .to($("#header"), { top: "0px" })
  //     .to($("body"), { overflow: "visible" });
  //   window.scrollTo(0, 0);
  // });

  let section02Count = $("#scene02 .fix-box-2 .page");
  let sect02_total = 0;
  let section03Count = $("#scene03 .fix-box-3 .page");
  let sect03_total = 0;
  let section04Count = $("#scene04 .fix-box-4 .page");
  let sect04_total = 0;
  let section05Count = $("#scene05 .fix-box-5 .page");
  let sect05_total = 0;

  for (let i = 0; i < section02Count.length; i++) {
    sect02_total += $("#scene02 .fix-box-2 .page").eq(i).width();
  }
  for (let i = 0; i < section03Count.length; i++) {
    sect03_total += $("#scene03 .fix-box-3 .page").eq(i).width();
  }
  for (let i = 0; i < section04Count.length; i++) {
    sect04_total += $("#scene04 .fix-box-4 .page").eq(i).width();
  }
  for (let i = 0; i < section05Count.length; i++) {
    sect05_total += $("#scene05 .fix-box-5 .page").eq(i).width();
  }

  gsap.to(".fix-box-2", {
    x: -(sect02_total - innerWidth),
    scrollTrigger: {
      trigger: ".trigger-box-2",
      start: "top top",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      scrub: true,
    },
  });

  const video02 = document.querySelector("#scene02_video");
  const video03 = document.querySelector("#scene03_video");
  const video04 = document.querySelector("#scene04_video");
  const video05 = document.querySelector("#scene05_video");

  gsap.to("#scene02", {
    scrollTrigger: {
      trigger: "#scene02",
      start: "-500 top",
      end: "bottom bottom",
      scrub: true,
      onEnter: () => {
        video02.play();
      },
      onLeaveBack: () => {
        video02.currentTime = 0;
        video02.pause();
      },
    },
  });

  gsap.to("#scene02", {
    scrollTrigger: {
      trigger: "#scene02",
      start: "bottom center",
      end: "+=100%",
      scrub: true,
      onEnter: () => {
        video03.play();
      },
      onLeaveBack: () => {
        video03.currentTime = 0;
        video03.pause();
      },
    },
  });

  const sect02tl = gsap.timeline();
  ScrollTrigger.create({
    animation: sect02tl,
    trigger: "#scene02",
    start: "center center",
    end: "center center",
    scrub: 1,
  });
  sect02tl
    .fromTo(
      video02,
      { opacity: 0.6 },
      {
        opacity: 0,
      },
      0
    )
    .to(video03, { opacity: 0.8 });

  gsap.to(".fix-box-3", {
    x: -(sect03_total - innerWidth),
    scrollTrigger: {
      trigger: ".trigger-box-3",
      start: "top top",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      scrub: true,
    },
  });

  const sect03tl = gsap.timeline();
  ScrollTrigger.create({
    animation: sect03tl,
    trigger: "#scene03",
    start: "center center",
    end: "center center",
    scrub: 1,
  });
  sect03tl
    .fromTo(
      video03,
      { opacity: 0.6 },
      {
        opacity: 0,
      },
      0
    )
    .to(video04, { opacity: 0.6 });

  gsap.to("#scene03", {
    scrollTrigger: {
      trigger: "#scene03",
      start: "bottom center",
      end: "+=100%",
      scrub: true,
      onEnter: () => {
        video04.play();
      },
      onLeaveBack: () => {
        video04.currentTime = 0.05;
        video04.pause();
      },
    },
  });

  gsap.to(".fix-box-4", {
    x: -(sect04_total - innerWidth),
    scrollTrigger: {
      trigger: ".trigger-box-4",
      start: "top top",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      scrub: true,
    },
  });

  const sect04tl = gsap.timeline();
  ScrollTrigger.create({
    animation: sect04tl,
    trigger: "#scene04",
    start: "center center",
    end: "center center",
    scrub: 1,
  });
  sect04tl
    .fromTo(
      video04,
      { opacity: 0.6 },
      {
        opacity: 0,
      },
      0
    )
    .to(video05, { opacity: 0.6 });

  gsap.to("#scene04", {
    scrollTrigger: {
      trigger: "#scene04",
      start: "bottom center",
      end: "+=100%",
      scrub: true,
      onEnter: () => {
        video05.play();
      },
      onLeaveBack: () => {
        video05.currentTime = 0.05;
        video05.pause();
      },
    },
  });

  gsap.to(".fix-box-5", {
    x: -(sect05_total - innerWidth),
    scrollTrigger: {
      trigger: ".trigger-box-5",
      start: "top top",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      scrub: true,
    },
  });

  const sect05tl = gsap.timeline();
  ScrollTrigger.create({
    animation: sect05tl,
    trigger: "#scene05",
    start: "center center",
    end: "center center",
    scrub: 1,
  });
  sect05tl
    .fromTo(
      video05,
      { opacity: 0.6 },
      {
        opacity: 0,
      },
      0
    )
    .to($("#scene06 .page01"), { opacity: 1 });

  gsap.to("#scene06 .page02", {
    zIndex: 1,
    position: "relative",
    top: 0,
    scrollTrigger: {
      trigger: "#scene06",
      start: "+=100vh",
      end: "+=200vh",
      // pin: true,
      pinSpacing: false,
      scrub: true,
    },
  });

  // gsap.to(".fix-box-2", {
  //   x: -(sect02_total - innerWidth),
  //   scrollTrigger: {
  //     trigger: ".trigger-box-2",
  //     start: "top top",
  //     end: "bottom bottom",
  //     pin: true,
  //     pinSpacing: false,
  //     scrub: true,
  //   },
  //   // onPin: () => {
  //   //   console.log(".fix-box-2가 pin 되었습니다.");
  //   // },
  //   // onUnpin: () => {
  //   //   console.log(".fix-box-2가 pin 되지 않았습니다.");
  //   // },
  //   // onStart: () => {
  //   //   console.log("sect02에 들어왔습니다.");
  //   // },
  // });

  // gsap.to("#scene02 .page01", {
  //   scrollTrigger: {
  //     trigger: "#scene02 .page01",
  //     start: "top top",
  //     end: "+=2000",
  //     pin: true,
  //     scrub: true,
  //     // toggleClass: "on",
  //   },
  // });

  // gsap.to("#scene02 .page02", {
  //   scrollTrigger: {
  //     trigger: "#scene02",
  //     start: "300 top",
  //     end: "bottom bottom",
  //     scrub: true,
  //     onEnter: () => {
  //       $("#scene02 .page02").addClass("on");
  //     },
  //     onEnterBack: () => {
  //       $("#scene02 .page02").addClass("on");
  //     },
  //     onLeave: () => {
  //       $("#scene02 .page02").removeClass("on");
  //     },
  //     onLeaveBack: () => {
  //       $("#scene02 .page02").removeClass("on");
  //     },
  //   },
  // });

  // gsap.to("#scene02 .page03 .txt", {
  //   y: -innerHeight * 2,
  //   scrollTrigger: {
  //     trigger: "#scene02",
  //     // start: "top top",
  //     start: () => "+=" + innerHeight * 1.5,
  //     end: "bottom bottom",
  //     scrub: true,
  //   },
  // });

  // gsap.to("#scene02 .page04", {
  //   scrollTrigger: {
  //     trigger: "#scene02",
  //     start: "3000 top",
  //     end: "bottom bottom",
  //     scrub: true,
  //     onEnter: () => {
  //       $("#scene02 .page04").addClass("on");
  //     },
  //     onEnterBack: () => {
  //       $("#scene02 .page04").addClass("on");
  //     },
  //     onLeave: () => {
  //       $("#scene02 .page04").removeClass("on");
  //     },
  //     onLeaveBack: () => {
  //       $("#scene02 .page04").removeClass("on");
  //     },
  //   },
  // });
});
