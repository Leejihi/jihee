//header

// 상단 nav 레이어 팝업 열기
$(function () {
  $(".flex_wrap").on("click", () => {
    $(".nav").toggle();
  });
});

// max-width: 999px까지 적용

$(function () {
  // Check window width before applying the click event
  if ($(window).width() <= 999) {
    $(".flex_wrap").on("click", () => {
      // Calculate the height of .nav-title and .nav
      const navTitleHeight = $(".nav-title").outerHeight();
      const navHeight = $(".nav").outerHeight();
      const hNavTotalHeight = navTitleHeight + navHeight;

      // Toggle .nav visibility
      $(".nav").toggle();

      // Adjust .h-nav's height to match .nav-title and .nav
      if ($(".nav").is(":visible")) {
        $(".h-nav").css("height", hNavTotalHeight + "px");
      } else {
        $(".h-nav").css("height", "");
      }
    });
  }
});

// 상단 nav 컨텍 팝업 열기
$(function () {
  $(".sub-btn").on("click", () => {
    $(".sub-popup").show();
  });
  $(".close-btn").on("click", () => {
    $(".sub-popup").hide();
  });
});

// 메뉴 버튼 이벤트

$("#toggle_btn").on("click", function () {
  // function 함수 사용시 this 키워드가 지칭하는 대상은 클릭한 바로 그 #toggle_btn
  $(this).toggleClass("closeMenu");
});

//웹작업 배너 위치 도착시 header 변경
$(window).on("scroll", () => {
  const myWeb = $(".myWeb").offset().top;

  if (scrollY > myWeb) {
    $("header").addClass(".blend-none");
  } else {
    $("header").addClass(".blend-none");
  }
});

// ************************* main
// section1 .m-banner 타이틀

let typeSplit;

function runSplit() {
  typeSplit = new SplitType(".split-lines", {
    types: "lines",
    tagName: "span",
  });
  $(".split-lines .line").wrap("<span class='line-mask'></span>");
  $(".split-lines").css("opacity", "1");
}

// Update on window resize
let windowWidth = $(window).innerWidth();
window.addEventListener("resize", function () {
  if (windowWidth !== $(window).innerWidth()) {
    windowWidth = $(window).innerWidth();
    typeSplit.revert();
    runSplit();
  }
});

runSplit();

let tl = gsap.timeline({ defaults: { ease: "power3.easeOut", duration: 0.7 } });

tl.from(" .split-lines .line", {
  yPercent: 100,
  rotation: 7,
  stagger: 0.1,
});

// 어바웃 미 버튼
document
  .querySelectorAll(".button")
  .forEach(
    (button) =>
      (button.innerHTML =
        "<div><span>" +
        button.textContent.trim().split("").join("</span><span>") +
        "</span></div>")
  );

// 슬라이드

$(window).on("scroll", () => {
  let slideHeight = $(".slide").offset().top - 500;

  if (scrollY > slideHeight) {
    $(".slide").addClass("start");
  } else {
    $(".slide").removeClass("start");
  }
});

// 커리어 영역 svg 이벤트

let objPath = document.querySelector(".obj path");
let path = objPath.getTotalLength();
console.log(path);

objPath.style.strokeDasharray = path;
objPath.style.strokeDashoffset = path;

let scrolled = () => {
  const windScrollTop = document.documentElement.scrollTop;
  const scrollHt = document.documentElement.scrollHeight;
  const clientHt = document.documentElement.clientHeight;

  let total = (windScrollTop / (scrollHt - clientHt)) * 8;

  let action = path * total;

  objPath.style.strokeDashoffset = path - action;
};
addEventListener("scroll", scrolled);

// 커리어 영역 svg 이벤트 미디어쿼리

// 커리어 영역 호버시 이미지 보여지도록!!

$(document).ready(function () {
  $(".box1").on("mouseover", () => {
    //.attr(); html의 속성 변경
    $(".careerImg").attr({ src: "images/career-kt.jpg", alt: "kt" });
  });
  $(".box2").on("mouseover", () => {
    $(".careerImg").attr({ src: "./images/career-nef.png", alt: "nef leb" });
  });
  $(".box3").on("mouseover", () => {
    $(".careerImg").attr({ src: "./images/career-hd.gif", alt: "현대" });
  });
  $(".box4").on("mouseover", () => {
    $(".careerImg").attr({
      src: "./images/career-rolly.png",
      alt: "고용노동부",
    });
  });
  $(".box5").on("mouseover", () => {
    $(".careerImg").attr({ src: "./images/career-go.png", alt: "고용노동부" });
  });
  $(".box6").on("mouseover", () => {
    $(".careerImg").attr({
      src: "./images/career-pan.png",
      alt: "팬케익 오리지널 스토리",
    });
  });
});

// 앤써영역 svg 이벤트

let anPath = document.querySelector(".answer path");
let anpath = anPath.getTotalLength();
console.log(path);

anPath.style.strokeDasharray = path;
anPath.style.strokeDashoffset = path;

let scrolle = () => {
  const windScrollTop = document.documentElement.scrollTop;
  const scrollHt = document.documentElement.scrollHeight;
  const clientHt = document.documentElement.clientHeight;

  let total = (windScrollTop / (scrollHt - clientHt)) * 3.3;

  let action = anpath * total;

  anPath.style.strokeDashoffset = anpath - action;
};
addEventListener("scroll", scrolle);

// 밑줄효과

AOS.init();

// 버튼클릭시 부드러운 이동
$(".up-btn").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
  return false;
});

// 어바웃미 클릭 이벤트가 발생했을 때 실행되는 코드
document.getElementById("aboutMeButton").addEventListener("click", function () {
  window.location.href = "https://leejihi.github.io/portfolio/about/about";
});
