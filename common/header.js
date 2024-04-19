// 헤더 myWeb 영역 도착시 블랜드모드 해제
const elem = document.documentElement;
$(window).on('scroll', () => {
  const webTop = $('.myWeb').offset().top;

  if (scrollY > webTop) {
    $('header').addClass('blend-none');
  } else {
    $('header').removeClass('blend-none');
  }
});
