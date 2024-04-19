// 스크립트 영역 호버시 기타치기

$(document).ready(function () {
  $(".info-4").on("mouseover", () => {
    //.attr(); html의 속성 변경
    $(".gita").attr({ src: "images/oz_img.gif", alt: "기타치는 모습" });
  });
});

// 솔루션 영역 도착시, 밑줄 발생
$(window).on("scroll", () => {
  let underHt = $(".direction").offset().top - 500;

  if (scrollY > underHt) {
    $(".vertical-line").addClass("start");
  } else {
    $(".vertical-line").removeClass("start");
  }
});
