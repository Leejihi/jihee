// 솔루션 영역 도착시, 밑줄 발생
$(window).on("scroll", () => {
  let underHt = $(".direction").offset().top - 500;

  if (scrollY > underHt) {
    $(".vertical-line").addClass("start");
  } else {
    $(".vertical-line").removeClass("start");
  }
});
