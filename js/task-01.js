const categoriesList = document.getElementById('categories');
const categories = categoriesList.getElementsByClassName('item');

console.log('Number of categories:', categories.length);

for (const category of categories) {
  const header = category.querySelector('h2');
  const elements = category.querySelectorAll('li');

  console.log(`Category: ${header.textContent}`);
  console.log(`Elements: ${elements.length}`);
}