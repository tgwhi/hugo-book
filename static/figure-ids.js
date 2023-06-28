let figures = document.getElementsByTagName('figure');

if (typeof(figures) != 'undefined' && figures != null) {
  for (let i = 0; i < figures.length; i++) {
    figures[i].setAttribute('id', 'fig-' + (i + 1));
  }
}
