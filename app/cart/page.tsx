'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useCartStore } from '../lib/store';
import Header from '../components/Header';
import { Toaster } from 'react-hot-toast';

export default function CartPage() {
  const { items, total, removeItem, updateQuantity } = useCartStore();

  if (items.length === 0) {
    return (
      <main>
        <Header />
        <div className="container">
          <div className="empty-cart">
            <h1>Your cart is empty</h1>
            <p>Looks like you haven't added any items to your cart yet.</p>
            <Link href="/products" className="shop-button">
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Header />
      <Toaster position="bottom-right" />
      <div className="container">
        <section className="cart">
          <h1>Shopping Cart</h1>
          <div className="cart-content">
            <div className="cart-items">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="product-image"
                    />
                  </div>
                  <div className="cart-item-details">
                    <Link href={`/products/${item.id}`} className="cart-item-name">
                      {item.name}
                    </Link>
                    <p className="cart-item-price">${item.price}</p>
                  </div>
                  <div className="cart-item-controls">
                    <div className="quantity-controls">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="quantity-button"
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="quantity-button"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="remove-button"
                    >
                      <TrashIcon className="icon" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="summary-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Link href="/checkout" className="checkout-button">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 