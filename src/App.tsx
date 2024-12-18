import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { CartPage } from './components/CartPage';
import { PaymentPage } from './components/PaymentPage';
import { ReviewsPage } from './components/ReviewsPage';
import { products } from './data/products';
import type { Product, CartItem, PaymentDetails, Review } from './types';

type Page = 'products' | 'cart' | 'payment' | 'reviews';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('products');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<string>('');

  const handleAddToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCart(prevCart =>
      quantity === 0
        ? prevCart.filter(item => item.id !== id)
        : prevCart.map(item =>
            item.id === id ? { ...item, quantity } : item
          )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const handlePaymentSubmit = (details: PaymentDetails) => {
    console.log('Payment submitted:', details);
    // Here you would typically process the payment
    setCart([]);
    setCurrentPage('products');
    alert('Оплата прошла успешно!');
  };

  const handleAddReview = (reviewData: Omit<Review, 'id' | 'date'>) => {
    const newReview: Review = {
      ...reviewData,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toLocaleDateString('ru-RU'),
    };
    setReviews(prev => [...prev, newReview]);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'cart':
        return (
          <CartPage
            items={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onCheckout={() => setCurrentPage('payment')}
          />
        );
      case 'payment':
        return (
          <PaymentPage
            total={cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
            onPaymentSubmit={handlePaymentSubmit}
          />
        );
      case 'reviews':
        return (
          <ReviewsPage
            productId={selectedProductId}
            reviews={reviews.filter(r => r.productId === selectedProductId)}
            onAddReview={handleAddReview}
          />
        );
      default:
        return (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Discover Premium Furniture
              </h1>
              <p className="text-xl text-gray-600">
                Transform your space with our curated collection of modern furniture
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map(product => (
                <div key={product.id}>
                  <ProductCard
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                  <button
                    onClick={() => {
                      setSelectedProductId(product.id);
                      setCurrentPage('reviews');
                    }}
                    className="w-full mt-2 text-blue-600 hover:text-blue-700"
                  >
                    Отзывы
                  </button>
                </div>
              ))}
            </div>
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        cartItemsCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
        onCartClick={() => setCurrentPage('cart')}
        onHomeClick={() => setCurrentPage('products')}
      />
      {renderPage()}
    </div>
  );
}

export default App;