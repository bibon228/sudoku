import React, { useState } from 'react';
import { CreditCard, Smartphone } from 'lucide-react';
import type { PaymentMethod, PaymentDetails } from '../types';
import { formatPrice } from '../utils/currency';

interface PaymentPageProps {
  total: number;
  onPaymentSubmit: (details: PaymentDetails) => void;
}

export function PaymentPage({ total, onPaymentSubmit }: PaymentPageProps) {
  const [method, setMethod] = useState<PaymentMethod>('card');
  const [details, setDetails] = useState<PaymentDetails>({
    method: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    phoneNumber: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPaymentSubmit(details);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Способ оплаты</h2>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex gap-4 mb-6">
          <button
            className={`flex-1 p-4 rounded-lg border ${
              method === 'card' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'
            }`}
            onClick={() => {
              setMethod('card');
              setDetails({ ...details, method: 'card' });
            }}
          >
            <CreditCard className="mx-auto mb-2" />
            <div className="text-center">Visa/Mastercard</div>
          </button>
          <button
            className={`flex-1 p-4 rounded-lg border ${
              method === 'sberbank' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'
            }`}
            onClick={() => {
              setMethod('sberbank');
              setDetails({ ...details, method: 'sberbank' });
            }}
          >
            <Smartphone className="mx-auto mb-2" />
            <div className="text-center">Сбербанк</div>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {method === 'card' ? (
            <>
              <div>
                <label className="block text-sm font-medium mb-1">Номер карты</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="1234 5678 9012 3456"
                  value={details.cardNumber}
                  onChange={(e) => setDetails({ ...details, cardNumber: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Срок действия</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="MM/YY"
                    value={details.expiryDate}
                    onChange={(e) => setDetails({ ...details, expiryDate: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">CVV</label>
                  <input
                    type="password"
                    className="w-full p-2 border rounded"
                    placeholder="123"
                    maxLength={3}
                    value={details.cvv}
                    onChange={(e) => setDetails({ ...details, cvv: e.target.value })}
                  />
                </div>
              </div>
            </>
          ) : (
            <div>
              <label className="block text-sm font-medium mb-1">Номер телефона</label>
              <input
                type="tel"
                className="w-full p-2 border rounded"
                placeholder="+7 (999) 123-45-67"
                value={details.phoneNumber}
                onChange={(e) => setDetails({ ...details, phoneNumber: e.target.value })}
              />
            </div>
          )}

          <div className="pt-4 border-t">
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Итого к оплате:</span>
              <span className="font-bold">{formatPrice(total)}</span>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Оплатить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}