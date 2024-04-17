const imgPath = '../../assets/images';
const hrefBasePath = '../gift/index.html';
// Data array
const galleryItems = [
  {
    image: `${imgPath}/prato_jantar.jpeg`,
    description: `14 pratos de jantar`,
    price: `OFERECIDO`,
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
    description: `3 assadeiras`,
    price: `136 euros`,
    href: `${hrefBasePath}?presente=Assadeiras`,
  },
  {
    image: `${imgPath}/saladeira.jpeg`,
    description: `2 saladeiras`,
    price: `OFERECIDO`,
  },
  {
    image: `${imgPath}/travessa.jpeg`,
    description: `3 travessas`,
    price: `OFERECIDO`,
  },

  {
    image: `${imgPath}/chavenas.jpeg`,
    description: `14 chavenas de café`,
    price: `193 euros`,
    href: `${hrefBasePath}?presente=Chavenas%20de%20café`,
  },
  {
    image: `${imgPath}/servicocha.png`,
    description: `serviço chá 27 peças`,
    price: 'OFERECIDO',
  },
  
  {
    image: `${imgPath}/faqueiro.jpeg`,
    description: `faqueiro - 2/5 oferecido`,
    price: `1000 euros - 5 frações de 200 euros`,
    href: `${hrefBasePath}?presente=Contribuição%20para%20o%20faqueiro`,
  },

  {
    image: `${imgPath}/apadador.jpeg`,
    description: `aparador`,
    price: `2000 euros - 10 frações de 200 euros`,
    href: `${hrefBasePath}?presente=Contribuição%20para%20o%20aparador`,
  },

  {
    image: `${imgPath}/mesajantar.png`,
    description: `mesa de jantar`,
    price: `1600 euros - 5 frações de 320 euros`,
    href: `${hrefBasePath}?presente=Contribuição%20para%20a%20mesa%20de%20jantar`,
  },

  {
    image: `${imgPath}/secretaria.jpg`,
    description: `secretária - 3/10 oferecido`,
    price: `1700 euros - 10 frações de 170 euros`,
    href: `${hrefBasePath}?presente=Contribuição%20para%20a%20secretária`,
  },

  {
    image: `${imgPath}/cadeirao.png`,
    description: `poltrona`,
    price: `OFERECIDO`,
  },

  {
    image: `${imgPath}/tapete.png`,
    description: `tapete`,
    price: `400 euros`,
    href: `${hrefBasePath}?presente=Tapete`,
  },
  {
    image: `${imgPath}/sofa_cama.jpeg`,
    description: `sofá cama`,
    price: `OFERECIDO`,
  },
  {
    image: `${imgPath}/candeeiro.png`,
    description: `candeeiro de pé`,
    price: `685 euros - 5 frações de 137 euros`,
    href: `${hrefBasePath}?presente=Contribuição%20para%20o20candeeiro%20de%20pé`,
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
    price: `OFERECIDO`,
  },
  
  {
    image: `${imgPath}/tremcozinha.png`,
    description: `trem de cozinha`,
    price: `350 euros`,
    href: `${hrefBasePath}?presente=Trem%20de%20cozinha`,
  },



];

function createGalleryItem(item) {
  // Create elements
  const itemDiv = document.createElement('div');
  itemDiv.className = 'gallery-item';

  const img = document.createElement('img');
  img.src = item.image;

  // Only create and append the link if the href is provided
  if (item.href) {
    const link = document.createElement('a');
    link.href = item.href;
    link.appendChild(img); // Append img to link
    itemDiv.appendChild(link); // Then append link to itemDiv
  } else {
    itemDiv.appendChild(img); // If no href, just append img directly to itemDiv
  }

    // If the item is offered, add the 'offered-item' class to apply different styling
  if (item.price === 'OFERECIDO') {
    itemDiv.classList.add('offered-item'); // Or img.classList.add('offered-item') if you wish to apply to img only
  }  

  const description = document.createElement('p');
  description.textContent = item.description;

  const price = document.createElement('p');
  price.textContent = item.price;

  // Append elements
  itemDiv.appendChild(description);
  itemDiv.appendChild(price);

  return itemDiv;
}

// Insert items into the DOM
const galleryContainer = document.querySelector('.gallery');
galleryItems.forEach((item) => {
  galleryContainer.appendChild(createGalleryItem(item));
});
