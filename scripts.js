    const tabs = document.querySelectorAll('nav a.tab');
    const aboutLink = document.querySelector('nav a.about-me');
    const aboutSection = document.getElementById('about');
    const contentSections = document.querySelectorAll('section.content-section');

    function showSection(id) {
      // cacher tout
      contentSections.forEach(s => s.style.display = 'none');
      aboutSection.style.display = 'none';

      if (id === 'about') {
        aboutSection.style.display = 'block';
      } else {
        const el = document.getElementById(id);
        if (el) el.style.display = 'block';
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // clics sur onglets
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-section');
        showSection(target);
      });
    });

    // clic sur About Me (à droite)
    aboutLink.addEventListener('click', () => showSection('about'));

    // affichage initial : about visible
    showSection('about');
  </script>

// clic sur About Me (à droite)
aboutLink.addEventListener('click', () => showSection('about'));

// affichage initial : about visible
showSection('about');
