const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('#ingredients');


ingredients.forEach(ingredient => {
   const li = document.createElement('li');
   listEl.appendChild(li);
   li.textContent = ingredient;
});

