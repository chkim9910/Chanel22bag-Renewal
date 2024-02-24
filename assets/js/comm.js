$(document).ready(function () {
  AOS.init();
  gsap.registerPlugin(ScrollTrigger);
  Splitting();
  var scene = document.getElementById("scene");
  var parallaxInstance = new Parallax(scene);

  // 페이지가 로드될 때 스크롤을 맨 위로 이동
  window.onload = function () {
    window.scrollTo(0, 0);
    // 주석 풀기
    $("body").css("overflow", "hidden");
  };
  // intro
  // 주석 풀기
  $("#intro .btn-icon").on("click", function () {
    var a = document.getElementById("intro_video_inner");
    a.pause();
    $("#intro_video_inner ").fadeOut(1000);
    var tl = gsap.timeline();
    tl.to([$("#intro")], { height: 0, duration: 1 }, 1.5)
      .to($("#header"), { top: "0px" })
      .to($("body"), { overflow: "visible" })
      .fromTo(
        $(".poster1"),
        1.5,
        { x: -100, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.4 },
        2
      )
      .fromTo(
        $("#scene01 .content1"),
        1.5,
        { x: 100, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.4 },
        4
      );
    window.scrollTo(0, 0);
  });

  // gnb
  // gsap.set($("#header #gnb"), { autoAlpha: 0 });
  gsap.set($("#header #gnb"), { opacity: 0 });
  $("#header .menu").click(function () {
    // if gnb closed
    if ($("#header #gnb").css("display") === "none") {
      const gnbtl = gsap.timeline();
      gnbtl
        // .to($("#header #gnb .background"), { height: "110%" })
        // .to($("#header #gnb"), { top: "-100%" })
        .to($("#header #gnb"), { display: "block" })
        .to($("#header #gnb"), { opacity: 1, zIndex: 50 })
        .to($("#header #gnb .inner"), { zIndex: 60 })
        .to($("#header .menu"), {
          scaleX: 1,
          transform: "translateY(100%)",
          duration: 0.3,
        });

      // .to($("#header #gnb .background"), { height: "-110%" });
    }
    // if gnb opend
    else {
      const gnbtl2 = gsap.timeline();
      gnbtl2
        // .to($("#header #gnb .layer"), { height: "110%" })
        // .to($("#header #gnb"), { top: 0 })
        .to($("#header #gnb"), { opacity: 0, zIndex: 0 })
        .to($("#header #gnb .inner"), { zIndex: 0 })
        .to($("#header .menu"), {
          scaleX: -1,
          transform: "translateY(100%)",
          duration: 0.3,
        })
        .to($("#header #gnb"), { display: "none" });
      // .to($("#header #gnb .background"), { height: "110%" });
    }
  });

  // scene
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

  // scene2
  gsap.to(".fix-box-2", {
    x: -(sect02_total - innerWidth),
    scrollTrigger: {
      trigger: ".trigger-box-2",
      start: "top top",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      scrub: 3,
    },
  });

  const video02 = document.querySelector("#scene02_video");
  const video03 = document.querySelector("#scene03_video");
  const video04 = document.querySelector("#scene04_video");
  const video05 = document.querySelector("#scene05_video");

  const sect02page03tl = gsap.timeline();
  ScrollTrigger.create({
    animation: sect02page03tl,
    trigger: "#scene02",
    start: "1500px top",
    end: "bottom bottom",
    scrub: 2,
  });
  sect02page03tl
    .fromTo($(".jennie-img02"), { y: -500, x: 800 }, { y: 0, x: 0 }, -1.5)
    .fromTo($("#scene02 .set"), { y: 500, x: -500 }, { y: 0, x: 0 }, -1.3)
    .fromTo($("#jennie-img03"), { opacity: 0 }, { opacity: 1 });

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
  sect02tl.to(video02, { zIndex: -1 }).to(video03, { opacity: 0.8 });

  // scene3
  gsap.to(".fix-box-3", {
    x: -(sect03_total - innerWidth),
    scrollTrigger: {
      trigger: ".trigger-box-3",
      start: "top top",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      scrub: 2,
    },
  });

  const sect03page02tl = gsap.timeline();
  ScrollTrigger.create({
    animation: sect03page02tl,
    trigger: "#scene03",
    start: "1500px top",
    end: "bottom bottom",
    scrub: 1,
  });
  sect03page02tl
    .fromTo(
      $(".lily-img01"),
      { x: 0, yPercent: -100 },
      { x: 100, yPercent: 84 },
      -1.5
    )
    .fromTo($("#scene03 .set"), { y: 500, x: -500 }, { y: -100, x: 0 }, -1.5)
    .fromTo($("#lily-img03"), { opacity: 0 }, { opacity: 1 });

  const sect03tl = gsap.timeline();
  ScrollTrigger.create({
    animation: sect03tl,
    trigger: "#scene03",
    start: "center center",
    end: "center center",
    scrub: 1,
  });
  sect03tl.to(video03, { zIndex: -1 }).to(video04, { opacity: 0.6 });

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

  // scene4
  gsap.to(".fix-box-4", {
    x: -(sect04_total - innerWidth),
    scrollTrigger: {
      trigger: ".trigger-box-4",
      start: "top top",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      scrub: 3,
    },
  });

  const sect04page03tl = gsap.timeline();
  ScrollTrigger.create({
    animation: sect04page03tl,
    trigger: "#scene04",
    start: "00px top",
    end: "bottom bottom",
    scrub: 1,
  });
  sect04page03tl
    .fromTo($(".whitney-img01"), 0.5, { yPercent: -100 }, { yPercent: 0 }, -1)
    .fromTo($(".whitney-img02"), { scale: 0 }, { scale: 1 }, -1)
    .fromTo($("#scene04 .set"), { y: 500, x: -300 }, { y: 0, x: 0 })
    .fromTo($("#whitney-img04"), { opacity: 0 }, { opacity: 1 });

  const sect04tl = gsap.timeline();
  ScrollTrigger.create({
    animation: sect04tl,
    trigger: "#scene04",
    start: "center center",
    end: "center center",
    scrub: 1,
  });
  sect04tl.to(video04, { zIndex: -1 }).to(video05, { opacity: 0.6 });

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

  // scene5
  gsap.to(".fix-box-5", {
    x: -(sect05_total - innerWidth),
    scrollTrigger: {
      trigger: ".trigger-box-5",
      start: "top top",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      scrub: 3,
    },
    onComplete: () => {
      $(".trigger-box-5").css("z-index", "-1");
    },
  });

  const sect05page03tl = gsap.timeline();
  ScrollTrigger.create({
    animation: sect05page03tl,
    trigger: "#scene05",
    start: "1500px top",
    end: "bottom bottom",
    scrub: 1,
  });
  sect05page03tl
    .fromTo(
      $(".margaret-img02"),
      0.5,
      { yPercent: 100, scale: 0 },
      { yPercent: 0, scale: 1 },
      -1
    )
    .fromTo($("#scene05 .set"), { y: 500, x: -300 }, { y: 100, x: -50 }, -0.7)
    .fromTo($("#margaret-img06"), { opacity: 0 }, { opacity: 1 });

  const sect05tl = gsap.timeline();
  ScrollTrigger.create({
    animation: sect05tl,
    trigger: "#scene05",
    start: "center center",
    end: "center center",
    scrub: 1,
  });

  sect05tl
    .to(video05, { zIndex: -1 })
    .to($("#scene06 .page01"), { opacity: 1 });

  // scene6
  const sect06page01tl = gsap.timeline();
  ScrollTrigger.create({
    animation: sect06page01tl,
    trigger: "#scene05",
    start: "+=100%",
    // start: "+=9000px",
    end: "+=2000px",
    scrub: 1,
  });
  sect06page01tl
    .fromTo($("#scene06 .bag01"), 0.2, { x: -300 }, { x: 0 }, -1.5)
    .fromTo($("#scene06 .bag02"), 0.2, { x: 300 }, { x: 0 }, -1.5)
    .fromTo($("#footer"), { zIndex: -1 }, { zIndex: 0 });

  gsap.to("#scene06 .page02", {
    zIndex: 1,
    position: "relative",
    top: 0,
    // duration: 10,
    scrollTrigger: {
      trigger: "#scene06",
      start: "+=100vh",
      end: "+=1000%",
      scrub: true,
    },
  });

  const sect06page02tl = gsap.timeline();
  ScrollTrigger.create({
    animation: sect06page02tl,
    trigger: "#scene06",
    start: "+=500px",
    end: "+=2000px",
    scrub: 1,
  });
  sect06page02tl
    .fromTo(
      [$(".sect1 .title"), $(".sect2 .title"), $(".sect3 .title")],
      0.5,
      { y: 100, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, stagger: 1.2 },
      -2
    )
    .fromTo(
      $(".sect4 .cont"),
      { x: 100, autoAlpha: 0 },
      { x: 0, autoAlpha: 1 },
      2
    )
    .to($("#scene05 .trigger-box-5"), { display: "none" })
    .to($("#scene06 .page01"), { zIndex: -1 });
  // .to($("#scene06 .page02"), { yPercent: -100 })
  // .to($("#footer"), { zIndex: 0 });
});

const cursor = document.getElementById("cursor");
const links = document.getElementsByTagName("a");
const buttons = document.getElementsByTagName("button");

for (button of buttons) {
  button.addEventListener("mouseover", function (event) {
    cursor.classList.add("active");
  });
  button.addEventListener("mousemove", function (event) {
    cursor.classList.add("active");
  });
  button.addEventListener("mouseout", function (event) {
    cursor.classList.remove("active");
  });
}

for (link of links) {
  link.addEventListener("mouseover", function (event) {
    cursor.classList.add("active");
  });
  link.addEventListener("mousemove", function (event) {
    cursor.classList.add("active");
  });
  link.addEventListener("mouseout", function (event) {
    cursor.classList.remove("active");
  });
}

gsap.set("#cursor", { xPercent: -50, yPercent: -50 });
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.35;

const xSet = gsap.quickSetter(cursor, "x", "px");
const ySet = gsap.quickSetter(cursor, "y", "px");

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

gsap.ticker.add(() => {
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
});
