export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'living' | 'bedroom' | 'dining' | 'office';
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export type PaymentMethod = 'sberbank' | 'card';

export interface PaymentDetails {
  method: PaymentMethod;
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  phoneNumber?: string;
}