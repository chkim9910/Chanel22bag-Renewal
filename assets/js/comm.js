$(document).ready(function () {
  // 페이지가 로드될 때 스크롤을 맨 위로 이동
  window.onload = function () {
    window.scrollTo(0, 0);
    $("body").css("overflow", "hidden");
  };
  gsap.set($(".scrollBox .wrap > div").not("#intro"), { yPercent: 100 });
  // intro
  $("#intro .btn-icon").on("click", function () {
    var a = document.getElementById("intro_video_inner");
    a.pause();
    $("#intro_video_inner ").fadeOut(1000);
    var tl = gsap.timeline();
    tl.to([$("#intro")], { height: 0, duration: 1 }, 2)
      .to($("#header"), { top: "0px" })
      .to($(".scrollBox .wrap > div").not("#intro"), {
        yPercent: 0,
        duration: 0.6,
      })
      .to($("body"), { overflow: "visible" });
    window.scrollTo(0, 0);
  });

  let sectionCount = $(".fix-box-2 .page");
  let sect02_total = 0;

  for (let i = 0; i < sectionCount.length; i++) {
    sect02_total += $(".fix-box-2 .page").eq(i).width();
  }

  gsap.registerPlugin(ScrollTrigger);

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
    onStart: () => {
      console.log("sect02에 들어왔습니다.");
    },
  });

  // gsap.to("#scene02 .page01", {
  //   scrollTrigger: {
  //     trigger: "#scene02",
  //     start: "-600 top",
  //     end: "bottom bottom",
  //     scrub: true,
  //     toggleClass: "on",
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
