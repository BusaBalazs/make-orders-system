const orderFormElement = document.querySelector("#order-form");
const input = document.querySelector('#order-form input');


const qrCodeSubmitting = async (e) => {
  e.preventDefault();
  const orderId = orderFormElement.dataset.orderid;
  const orders = input.value;
  const respons = await fetch(`/orders/${orderId}`, {
  method: 'POST',
  body: JSON.stringify({
    orderId: orderId,
    orders: orders,
  }),
  headers: {
    'Content-Type': 'application/json'
  }
});
};

orderFormElement.addEventListener("submit", qrCodeSubmitting);
