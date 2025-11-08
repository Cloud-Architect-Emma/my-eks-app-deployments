function goToService(service) {
  const urls = {
    orders: 'http://localhost:3001/api/orders',
    payment: 'http://localhost:3004/api/payment',
    shipping: 'http://localhost:3002/api/shipping',
    catalog: 'http://localhost:3003/api/catalog',
    feedback: 'http://localhost:3006/api/feedback'
  };

  fetch(urls[service])
    .then(res => res.json())
    .then(data => {
      document.getElementById('response').innerText = JSON.stringify(data, null, 2);
    })
    .catch(err => {
      document.getElementById('response').innerText = `Error: ${err.message}`;
    });
}

function explore() {
  alert("Explore our banking services and discover your financial potential!");
}
