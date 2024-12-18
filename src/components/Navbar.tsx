import React from 'react';
import { ShoppingCart, Sofa } from 'lucide-react';

interface NavbarProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onHomeClick: () => void;
}

export function Navbar({ cartItemsCount, onCartClick, onHomeClick }: NavbarProps) {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={onHomeClick}>
            <Sofa className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">FurniCraft</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-blue-600">Living Room</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Bedroom</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Dining</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Office</a>
            <div className="relative cursor-pointer" onClick={onCartClick}>
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-blue-600" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}