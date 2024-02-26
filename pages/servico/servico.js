const imgPath = '../../assets/images';
const hrefBasePath = '../gift/index.html';
// Data array
const galleryItems = [
  {
    image: `${imgPath}/prato_jantar.jpeg`,
    description: `14 pratos de jantar`,
    price: `186 euros`,
    href: `${hrefBasePath}?presente=Pratos%20de%20jantar`,
  },
  {
    image: `${imgPath}/prato_sopa.jpeg`,
    description: `14 pratos de sopa`,
    price: `180 euros`,
    href: `${hrefBasePath}?presente=Pratos%20de%20sopa`,
  },
  {
    image: `${imgPath}/prato_sobremesa.jpeg`,
    description: `14 pratos de sobremesa`,
    price: `160 euros`,
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
    price: `77 euros`,
    href: `${hrefBasePath}?presente=Saladeiras`,
  },
  {
    image: `${imgPath}/travessa.jpeg`,
    description: `2 travessas`,
    price: `70 euros`,
    href: `${hrefBasePath}?presente=Travessas`,
  },

  {
    image: `${imgPath}/chavenas.jpeg`,
    description: `14 chavenas de café`,
    price: `193 euros`,
    href: `${hrefBasePath}?presente=Chavenas%de%café`,
  },

  
  {
    image: `${imgPath}/faqueiro.jpeg`,
    description: `faqueiro`,
    price: `1000 euros - 5 frações de 200 euros`,
    href: `${hrefBasePath}?presente=Fracção%do%faqueiro`,
  },

  {
    image: `${imgPath}/apadador.jpeg`,
    description: `aparador`,
    price: `2000 euros - 10 frações de 200 euros`,
    href: `${hrefBasePath}?presente=Aparador`,
  },


  {
    image: `${imgPath}/secretaria.jpg`,
    description: `secretária`,
    price: `1700 euros - 10 frações de 170 euros`,
    href: `${hrefBasePath}?presente=Secretária`,
  },

  {
    image: `${imgPath}/cadeirao.png`,
    description: `poltrona`,
    price: `300 euros`,
    href: `${hrefBasePath}?presente=Cadeirão`,
  },
  {
    image: `${imgPath}/sofa_cama.jpeg`,
    description: `sofá cama`,
    price: `280 euros`,
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
    price: `255 euros`,
    href: `${hrefBasePath}?presente=Candeeiro%20de%20mesa`,
  },

  {
    image: `${imgPath}/processador.jpeg`,
    description: `processador de alimentos`,
    price: `255 euros`,
    href: `${hrefBasePath}?presente=Processador%de%alimentos`,
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
