'use client';

import React from 'react';
import Link from 'next/link';
import { products } from '../lib/products';
import Header from '../components/Header';

export default function CategoriesPage() {
  const categories = Array.from(new Set(products.map(p => p.category)));
  const categoryCount = categories.reduce((acc, category) => {
    acc[category] = products.filter(p => p.category === category).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <main>
      <Header />
      <div className="container">
        <section className="categories-header">
          <h1>Product Categories</h1>
          <p>Browse our products by category</p>
        </section>
        <div className="categories-grid">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/products?category=${category}`}
              className="category-card"
            >
              <h2>{category}</h2>
              <p>{categoryCount[category]} Products</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 