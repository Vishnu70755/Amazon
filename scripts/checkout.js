import { cart, removeFromCart } from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js';

// ✅ Update header quantity (Checkout X items)
function updateCartQuantity() {
  let totalQuantity = 0;

  cart.forEach((item) => {
    totalQuantity += item.quantity;
  });

  const quantityElement = document.querySelector('.return-to-home-link');

  if (quantityElement) {
    quantityElement.innerHTML =
      `${totalQuantity} ${totalQuantity === 1 ? 'item' : 'items'}`;
  }
}

// ✅ Render cart items
function renderCart() {
  let cartSummaryHTML = '';

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    const matchingProduct = products.find(
      (product) => product.id === productId
    );

    // ❗ Safety check
    if (!matchingProduct) {
      console.log('Product not found:', productId);
      return;
    }

    cartSummaryHTML += `
      <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
          Delivery date: Tuesday, June 21
        </div>

        <div class="cart-item-details-grid">
          <img class="product-image"
            src="${matchingProduct.image}">

          <div class="cart-item-details">
            <div class="product-name">
              ${matchingProduct.name}
            </div>

            <div class="product-price">
              $${formatCurrency(matchingProduct.priceCents)}
            </div>

            <div class="product-quantity">
              <span>
                Quantity:
                <span class="quantity-label">
                  ${cartItem.quantity}
                </span>
              </span>

              <span class="delete-quantity-link link-primary js-delete-link"
                data-product-id="${matchingProduct.id}">
                Delete
              </span>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  // ✅ Inject into HTML
  const summaryElement = document.querySelector('.js-order-summary');

  if (summaryElement) {
    summaryElement.innerHTML = cartSummaryHTML;
  }

  // ✅ Delete functionality
  document.querySelectorAll('.js-delete-link')
    .forEach((link) => {
      link.addEventListener('click', () => {
        const productId = link.dataset.productId;

        removeFromCart(productId);

        renderCart(); // 🔥 re-render everything
      });
    });

  // ✅ Update header count
  updateCartQuantity();
}

// ✅ Run after DOM loads
document.addEventListener('DOMContentLoaded', () => {
  renderCart();
});