const products = [
  'Camiseta de Metallica',
  'Pantalón vaquero',
  'Gorra de beisbol',
  'Camiseta de Basket',
  'Cinturón de Orión',
  'AC/DC Camiseta'
];

for (let item of products) {
  if (item.includes('Camiseta')) {
    console.log(item);
  }
}
