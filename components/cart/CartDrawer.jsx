'use client';

import { useState } from "react";
import { useCart } from "@/context/CartContext";

const CURRENCY = "USD";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    clearCart,
    subtotal,
  } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [error, setError] = useState(null);

  const checkoutDisabled = items.length === 0 || isCheckingOut;

  const handleCheckout = async () => {
    if (checkoutDisabled) return;
    setIsCheckingOut(true);
    setError(null);
    try {
      const response = await fetch("/api/shopify/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((item) => ({
            variantId: item.variantId,
            quantity: item.quantity,
          })),
        }),
      });

      const payload = await response.json();
      if (!response.ok || !payload?.url) {
        throw new Error(payload?.error || "Unable to start checkout.");
      }

      window.location.href = payload.url;
    } catch (err) {
      setError(err.message || "Checkout failed. Please try again.");
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Your Cart</p>
            <h2 className="text-2xl font-serif text-charcoal">
              {items.length} {items.length === 1 ? "Item" : "Items"}
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="text-gray-500 hover:text-charcoal transition"
            aria-label="Close cart"
          >
            &times;
          </button>
        </div>

        <div className="flex flex-col h-[calc(100%-220px)]">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-1 px-6 text-center text-gray-500">
              <p className="mb-2 text-lg font-semibold text-charcoal">Your cart is empty</p>
              <p className="text-sm text-gray-500">Add some items to begin your ritual.</p>
            </div>
          ) : (
            <ul className="flex-1 overflow-y-auto divide-y divide-gray-100">
              {items.map((item) => (
                <li key={item.variantId} className="flex gap-4 px-6 py-5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 rounded-lg object-cover border border-gray-100"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between gap-2">
                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                          {item.vendor || "Shopify"}
                        </p>
                        <p className="text-base font-semibold text-charcoal">{item.title}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.variantId)}
                        className="text-xs uppercase text-gray-400 hover:text-rose-500 transition"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {item.subtitle || item.description}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-gray-200 rounded-full">
                        <button
                          onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                          className="px-3 py-1 text-gray-600 hover:text-charcoal"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="w-10 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                          className="px-3 py-1 text-gray-600 hover:text-charcoal"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm font-semibold text-charcoal">
                        {formatCurrency((Number(item.price) || 0) * item.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-gray-200 px-6 py-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm uppercase tracking-[0.3em] text-gray-400">Subtotal</span>
            <span className="text-xl font-serif text-charcoal">
              {formatCurrency(subtotal)}
            </span>
          </div>
          {error && <p className="text-sm text-rose-600">{error}</p>}
          <div className="flex gap-3">
            <button
              onClick={clearCart}
              disabled={items.length === 0}
              className="flex-1 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-600 hover:text-charcoal disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Clear Cart
            </button>
            <button
              onClick={handleCheckout}
              disabled={checkoutDisabled}
              className="flex-1 rounded-full bg-charcoal text-white px-4 py-2 text-sm font-medium hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {isCheckingOut ? "Preparing..." : "Checkout"}
            </button>
          </div>
          <p className="text-[11px] text-gray-400 text-center">
            Taxes & shipping calculated during Shopify checkout.
          </p>
        </div>
      </aside>
    </>
  );
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: CURRENCY,
  }).format(value || 0);
}
