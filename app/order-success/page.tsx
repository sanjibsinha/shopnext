'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Header from '../components/Header';

export default function OrderSuccessPage() {
  return (
    <main>
      <Header />
      <div className="container">
        <div className="order-success">
          <CheckCircleIcon className="success-icon" />
          <h1>Thank you for your order!</h1>
          <p>Your order has been successfully placed.</p>
          <p className="order-email">We'll send you an email with your order details shortly.</p>
          <div className="success-actions">
            <Link href="/products" className="shop-button">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 