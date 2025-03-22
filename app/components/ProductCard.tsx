import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/24/solid';
import { useCartStore } from '../lib/store';
import { Product } from '../lib/types';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product);
    toast.success('Added to cart!');
  };

  return (
    <div className="product-card">
      <Link href={`/products/${product.id}`} className="product-image-container">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="product-image"
        />
      </Link>
      <div className="product-info">
        <Link href={`/products/${product.id}`} className="product-name">
          {product.name}
        </Link>
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={i < product.rating ? 'star-filled' : 'star-empty'}
              />
            ))}
          </div>
          <span className="reviews">({product.reviews} reviews)</span>
        </div>
        <p className="product-category">{product.category}</p>
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <button onClick={handleAddToCart} className="add-to-cart">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}