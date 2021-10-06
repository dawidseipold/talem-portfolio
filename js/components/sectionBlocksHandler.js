const block1 = document.getElementById('block1');
const block2 = document.getElementById('block2');
const block3 = document.getElementById('block3');
const block4 = document.getElementById('block4');

const bigSide = 80;
const smallSide = 100 - bigSide;

const bigSquare = 'width: ' + bigSide + 'vmin; height: ' + bigSide + 'vmin';
const smallSquare =
  'width: ' + smallSide + 'vmin; height: ' + smallSide + 'vmin';
const wideRectangle =
  'width: ' + bigSide + 'vmin; height: ' + smallSide + 'vmin';
const highRectangle =
  'width: ' + smallSide + 'vmin; height: ' + bigSide + 'vmin';

block1.addEventListener('mouseenter', function () {
  //container.setAttribute("style","grid-template-columns: 4fr 1fr; grid-template-rows: 4fr 1fr;"); <-- unfortunately this doesn't work as transition
  block1.setAttribute('style', bigSquare);
  block2.setAttribute('style', highRectangle);
  block3.setAttribute('style', wideRectangle);
  block4.setAttribute('style', smallSquare);
});

block2.addEventListener('mouseenter', function () {
  block1.setAttribute('style', highRectangle);
  block2.setAttribute('style', bigSquare);
  block3.setAttribute('style', smallSquare);
  block4.setAttribute('style', wideRectangle);
});

block3.addEventListener('mouseenter', function () {
  block1.setAttribute('style', wideRectangle);
  block2.setAttribute('style', smallSquare);
  block3.setAttribute('style', bigSquare);
  block4.setAttribute('style', highRectangle);
});

block4.addEventListener('mouseenter', function () {
  block1.setAttribute('style', smallSquare);
  block2.setAttribute('style', wideRectangle);
  block3.setAttribute('style', highRectangle);
  block4.setAttribute('style', bigSquare);
});

block1.addEventListener('mouseleave', reset);
block2.addEventListener('mouseleave', reset);
block3.addEventListener('mouseleave', reset);
block4.addEventListener('mouseleave', reset);

function reset() {
  block1.setAttribute('style', 'width: 50vmin; height: 50vmin ');
  block2.setAttribute('style', 'width: 50vmin; height: 50vmin ');
  block3.setAttribute('style', 'width: 50vmin; height: 50vmin ');
  block4.setAttribute('style', 'width: 50vmin; height: 50vmin ');
}
