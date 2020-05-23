const productData = [];

for(let i = 1; i <= 12; i += 1) {
  productData.push({
    id: i,
    image: 'http://placehold.jp/640x480.png?text=placeholder',
    title: 'Product Title',
    price: 100,
    description: `this is a product description`
  });
}

export default productData;
