const titleProducts = document.querySelectorAll('#undefined-12 > div > div > div > div.showcase-description > div.Showcase__details > div.Showcase__details__text > button');

const ProductTexts = [];
titleProducts.forEach(paragraph => {
paragraphTexts.push(paragraph.textContent.trim());
});

console.log('Productos:');
ProductTexts.forEach((text, index) => {
  console.log(`Producto ${index + 1}: ${text}`);
});