let figures = document.getElementsByTagName('figure');
let tables = document.getElementsByTagName('table');

if (typeof(figures) != 'undefined' && figures != null) {
  for (let i = 0; i < figures.length; i++) {
    figures[i].setAttribute('id', 'figure-' + (i + 1));
  }
}

if (typeof(tables) != 'undefined' && tables != null) {
  for (let j = 0; j < tables.length; j++) {
    let currentId = tables[j].getAttribute('id');
    tables[j].setAttribute('id', currentId + ' table-' + (j + 1));
  }
}
