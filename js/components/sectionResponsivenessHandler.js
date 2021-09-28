const menu = document.querySelectorAll('.responsive__content__menu');
const buttons = document.querySelectorAll(
  '.responsive__content__menu__element'
);

for (let button of buttons) {
  button.addEventListener('click', (e) => {
    const id = e.target.dataset.id;

    selectActive(id);
  });
}

function selectActive(id) {
  const allImages = document.querySelectorAll(
    '.responsive__content__section__image img'
  );

  for (let image of allImages) {
    if (image.dataset.image === id) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  }
}
