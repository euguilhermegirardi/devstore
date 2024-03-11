"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartWidget = void 0;
const cart_context_1 = require("@/context/cart-context");
const lucide_react_1 = require("lucide-react");
function CartWidget() {
    const { items } = (0, cart_context_1.useCart)();
    return (<div className="flex items center gap-2">
      <lucide_react_1.ShoppingBag className="w-4 h-4"/>
      <span className="text-sm">Cart ({items.length})</span>
    </div>);
}
exports.CartWidget = CartWidget;
