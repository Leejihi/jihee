// 스크립트 영역 호버시 기타치기

$(document).ready(function () {
  $('.info-4').on('mouseover', () => {
    //.attr(); html의 속성 변경
    $('.gita').attr({ src: 'images/oz_img.gif', alt: '기타치는 모습' });
  });
});

// 스크립트 영역 꽃svg 이벤트
const mintPath = document.querySelector('.mint-line path');
const path01 = mintPath.getTotalLength();

mintPath.style.strokeDasharray = path01;
mintPath.style.strokeDashoffset = path01;

let scrolled02 = () => {
  const windScrollTop = document.documentElement.scrollTop;
  const scrollHt = document.documentElement.scrollHeight;
  const clientHt = document.documentElement.clientHeight;

  let total = (windScrollTop / (scrollHt - clientHt)) * 8.5;

  let action = path01 * total;

  mintPath.style.strokeDashoffset = path01 - action;
};

addEventListener('scroll', scrolled02);

// 솔루션 영역 도착시, 밑줄 발생
$(window).on('scroll', () => {
  let underHt = $('.direction').offset().top - 500;

  if (scrollY > underHt) {
    $('.vertical-line').addClass('start');
  } else {
    $('.vertical-line').removeClass('start');
  }
});
