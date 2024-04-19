// 캐릭터 슬라이더 myWeb3
(function ($) {
  $(function () {
    var agSlideFlickity = $(".js-flickity-slider").flickity({
      autoPlay: 1300,
      imagesLoaded: true,
      percentPosition: false,
      prevNextButtons: false,
      initialIndex: 2,
      pageDots: false,
      groupCells: 1,
      contain: true, // 슬라이더가 부모 요소 안에서 유지되도록 하는 옵션 추가, 이 부분을 삭제하면 움직이는 영역이 더 넓어짐
    });

    var agCard = agSlideFlickity.find(".js-carousel-cell .js-card-bg"),
      agTransform =
        "string" == typeof document.documentElement.style.transform
          ? "transform"
          : "WebkitTransform",
      agSlide = agSlideFlickity.data("flickity");

    agSlideFlickity.on("scroll.flickity", function () {
      agSlide.slides.forEach(function (t, e) {
        var n = agCard[e],
          i = (-1 * (t.target + agSlide.x)) / 4;

        n.style[agTransform] = "translateX(" + i + "px)";
      });
    });

    agSlideFlickity.on("dragStart.flickity", function (t, e) {
      document.ontouchmove = function (t) {
        t.preventDefault();
      };
    });

    agSlideFlickity.on("dragEnd.flickity", function (t, e) {
      document.ontouchmove = function (t) {
        return true;
      };
    });
  });
})(jQuery);

// 캐릭터 슬라이더 팝업 열기
$(function () {
  $(".cell01").on("click", () => {
    $(".popup-bg1").show();
  });
  $(".closed").on("click", () => {
    $(".popup-bg1").hide();
  });
});

$(function () {
  $(".cell02").on("click", () => {
    $(".popup-bg2").show();
  });
  $(".closed").on("click", () => {
    $(".popup-bg2").hide();
  });
});

$(function () {
  $(".cell03").on("click", () => {
    $(".popup-bg3").show();
  });
  $(".closed").on("click", () => {
    $(".popup-bg3").hide();
  });
});

$(function () {
  $(".cell04").on("click", () => {
    $(".popup-bg4").show();
  });
  $(".closed").on("click", () => {
    $(".popup-bg4").hide();
  });
});

$(function () {
  $(".cell05").on("click", () => {
    $(".popup-bg5").show();
  });
  $(".closed").on("click", () => {
    $(".popup-bg5").hide();
  });
});
