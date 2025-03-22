import React from 'react';
import Link from 'next/link';
import { ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useCartStore } from '../lib/store';

export default function Header() {
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <nav className="container nav">
        <div className="flex items-center">
          <Link href="/" className="logo">
            ShopNext
          </Link>
          <div className="nav-links">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/products" className="nav-link">
              Products
            </Link>
            <Link href="/categories" className="nav-link">
              Categories
            </Link>
          </div>
        </div>
        <div className="nav-icons">
          <button className="icon-button">
            <MagnifyingGlassIcon className="icon" />
          </button>
          <Link href="/cart" className="icon-button">
            <ShoppingCartIcon className="icon" />
            {itemCount > 0 && (
              <span className="ml-1.5 text-xs font-medium text-blue-600">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
} 