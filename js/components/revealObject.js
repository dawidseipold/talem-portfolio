const targets = document.querySelectorAll('.reveal');

const lazyLoad = (target) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const object = entry.target;
        object.style.animation = `${entry.target.dataset.animation} ${entry.target.dataset.duration} ${entry.target.dataset.delay} forwards ease-out`;

        observer.disconnect();
      }
    });
  });

  io.observe(target);
};

targets.forEach(lazyLoad);
