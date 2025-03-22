'use client';

import React from 'react';
import { products } from './lib/products';
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <main>
      <Header />
      <Toaster position="bottom-right" />
      <div className="container">
        <section className="hero">
          <h1>Welcome to ShopNext</h1>
          <p>Discover amazing products at great prices</p>
        </section>
        <section className="featured">
          <h2>Featured Products</h2>
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
} 