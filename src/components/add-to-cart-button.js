"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddToCartButton = void 0;
const cart_context_1 = require("@/context/cart-context");
function AddToCartButton({ productId }) {
    const { addToCart } = (0, cart_context_1.useCart)();
    function handleAddProductToCart() {
        addToCart(productId);
    }
    return (<button type="button" className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white" onClick={handleAddProductToCart}>
      Add to cart
    </button>);
}
exports.AddToCartButton = AddToCartButton;
