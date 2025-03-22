'use client';

import React, { useState } from 'react';
import { products } from '../lib/products';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import { Toaster } from 'react-hot-toast';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = ['all', ...new Set(products.map(p => p.category))];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <main>
      <Header />
      <Toaster position="bottom-right" />
      <div className="container">
        <section className="products-header">
          <h1>All Products</h1>
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
} 