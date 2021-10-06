const masonry = new Macy({
  container: '.grid-gallery__container',
  mobileFirst: true,
  columns: 1,
  breakAt: {
    768: 2,
    1024: 3,
    1366: 4,
  },
  margin: {
    x: 20,
    y: 20,
  },
});
