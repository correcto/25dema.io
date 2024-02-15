const imgPath = '../../assets/images';
const hrefBasePath = '../gift/index.html';
// Data array
const galleryItems = [
  {
    image: `${imgPath}/prato_jantar.jpeg`,
    description: `14 pratos de jantar`,
    price: `182 euros`,
    href: `${hrefBasePath}?presente=Pratos%20de%20jantar`,
  },
  {
    image: `${imgPath}/prato_sopa.jpeg`,
    description: `14 pratos de sopa`,
    price: `175 euros`,
    href: `${hrefBasePath}?presente=Pratos%20de%20sopa`,
  },
  {
    image: `${imgPath}/prato_sobremesa.jpeg`,
    description: `14 pratos de sobremesa`,
    price: `154 euros`,
    href: `${hrefBasePath}?presente=Pratos%20de%20sobremesa`,
  },
  {
    image: `${imgPath}/assadeira.jpeg`,
    description: `2 assadeiras`,
    price: `91 euros`,
    href: `${hrefBasePath}?presente=Assadeiras`,
  },
  {
    image: `${imgPath}/saladeira.jpeg`,
    description: `2 saladeiras`,
    price: `75 euros`,
    href: `${hrefBasePath}?presente=Saladeiras`,
  },
  {
    image: `${imgPath}/travessa.jpeg`,
    description: `2 travessas`,
    price: `67 euros`,
    href: `${hrefBasePath}?presente=Travessas`,
  },
  {
    image: `${imgPath}/faqueiro.jpeg`,
    description: `faqueiro`,
    price: `1000 euros - 10 frações de 100 euros`,
    href: `${hrefBasePath}?presente=Fracção do faqueiro`,
  },
  {
    image: `${imgPath}/cadeiras.jpeg`,
    description: `2x cadeira`,
    price: `220 euros cada`,
    href: `${hrefBasePath}?presente=Cadeira`,
  },
  {
    image: `${imgPath}/sofa_cama.jpeg`,
    description: `sofá cama`,
    price: `279 euros`,
    href: `${hrefBasePath}?presente=Sofá cama`,
  },
  {
    image: `${imgPath}/candeeiro.png`,
    description: `candeeiro de pé`,
    price: `685 euros - 5 frações de 137 euros`,
    href: `${hrefBasePath}?presente=Candeeiro%20de%20pé`,
  },
  {
    image: `${imgPath}/candeeiro_de_mesa.png`,
    description: `candeeiro de mesa`,
    price: `200 euros`,
    href: `${hrefBasePath}?presente=Candeeiro%20de%20mesa`,
  },
  {
    image: `${imgPath}/secretaria.jpg`,
    description: `secretária`,
    price: `1700 euros - 10 frações de 170 euros`,
    href: `${hrefBasePath}?presente=Secretária`,
  },
];

// Function to create a gallery item
function createGalleryItem(item) {
  // Create elements
  const itemDiv = document.createElement('div');
  itemDiv.className = 'gallery-item';

  const link = document.createElement('a');
  link.href = item.href;

  const img = document.createElement('img');
  img.src = item.image;

  const description = document.createElement('p');
  description.textContent = item.description;

  const price = document.createElement('p');
  price.textContent = item.price;

  // Append elements
  link.appendChild(img);
  itemDiv.appendChild(link);
  itemDiv.appendChild(description);
  itemDiv.appendChild(price);

  return itemDiv;
}

// Insert items into the DOM
const galleryContainer = document.querySelector('.gallery');
galleryItems.forEach((item) => {
  galleryContainer.appendChild(createGalleryItem(item));
});
