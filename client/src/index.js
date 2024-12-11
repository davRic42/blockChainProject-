var contract
var accounts
var web3

const getHello = async () => {
  hello = await contract.methods.hello().call()
  document.getElementById("p_hello").innerHTML = hello
}

const setHello = async () => {
  var hello = document.getElementById('input_hello').value
  const result = await contract.methods.setHello(hello)
  .send({ from: accounts[0], gas: 400000 })
}

const addProduct = () => {
  const productName = document.getElementById('input_name').value.trim();
  const productCount = document.getElementById('input_count').value.trim();

  if (!productName || !productCount) {
    alert('Por favor, ingrese el nombre y la cantidad del producto.');
    return;
  }

  const noProductsMessage = document.getElementById('no-products');
  if (noProductsMessage) {
    noProductsMessage.classList.add('d-none');
  }

  const cardContainer = document.getElementById('card-container');
  const card = document.createElement('div');
  card.className = 'card mb-3';
  card.style.width = '100%';

  card.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${productName}</h5>
      <p class="card-text">Cantidad: ${productCount}</p>
    </div>
  `;

  cardContainer.appendChild(card);

  // Mostrar la notificación
  showNotification('Producto agregado exitosamente');

  // Limpiar campos del formulario
  document.getElementById('input_name').value = '';
  document.getElementById('input_count').value = '';
};


const showNotification = (message) => {
  // Crear el elemento de notificación
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;

  // Agregar al body y verificar si fue exitoso
  const body = document.querySelector('body');
  if (!body) {
    console.error('No se encontró el elemento <body>.');
    return;
  }
  body.appendChild(notification);

  // Remover después de 4 segundos
  setTimeout(() => {
    notification.remove();
  }, 4000);
};



