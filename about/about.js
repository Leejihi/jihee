//header

// 상단 nav 레이어 팝업 열기
$(function () {
  $('.flex_wrap').on('click', () => {
    $('.nav').toggle();
  });
});

// 상단 nav 컨텍 팝업 열기
$(function () {
  $('.sub-btn').on('click', () => {
    $('.sub-popup').show();
  });
  $('.close-btn').on('click', () => {
    $('.sub-popup').hide();
  });
});

// 버튼클릭시 부드러운 이동
$('.up-btn').click(function () {
  $('html, body').animate({ scrollTop: 0 }, 500);
  return false;
});

/*  dance-me */
/*
gsap.registerPlugin(ScrollTrigger);
let speed = 100;

let scene1 = gsap.timeline();
ScrollTrigger.create({
  animation: scene1,
  trigger: '.scrollElement',
  start: 'top top',
  end: '45% 80%',
  scrub: 3,
});

scene1.to('.dance-me', { y: 2 * speed, x: 1 * speed }, 0.03);
*/
