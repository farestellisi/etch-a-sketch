/* creating container variable */

container = document.querySelector('.container');

/* creating 16x16 grid */

function createGrid(gridAmount) {
    for (let i = 1; i < gridAmount; i++) {
        const row = document.createElement('div');
        container.appendChild(row);
    
        for (let j = 0; j < gridAmount; j++) {
          const square = document.createElement('div');
          square.setAttribute('id', 'innerSquare');
          square.classList.add('square');
          square.style.width = `${960 / gridAmount}px`;
          square.style.height = `${500 / gridAmount}px`;
          row.appendChild(square);
    }
  }
};

createGrid(16);

/* hover effect */


container.addEventListener("mouseover",function(e){
  if (e.target.matches('.square')) {
    e.target.classList.add('active');
  }
});



