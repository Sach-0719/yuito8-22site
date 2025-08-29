document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tabs li a');
  const sections = document.querySelectorAll('section');

  function highlightTab() {
    const scrollPos = window.scrollY || window.pageYOffset;

    sections.forEach((section, index) => {
      const top = section.offsetTop - 80; // ナビバーの高さを考慮
      const bottom = top + section.offsetHeight;

      if (scrollPos >= top && scrollPos < bottom) {
        tabs.forEach(tab => tab.classList.remove('active'));
        tabs[index].classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', highlightTab);
  highlightTab(); // 初期表示用
});
