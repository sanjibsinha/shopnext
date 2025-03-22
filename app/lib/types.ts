export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  quantity?: number;
}

export interface CartItem extends Product {
  quantity: number;
} 