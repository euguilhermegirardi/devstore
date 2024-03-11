"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cart_context_1 = require("@/context/cart-context");
const header_1 = __importDefault(require("../../components/header"));
function StoreLayout({ children }) {
    return (<cart_context_1.CartProvider>
      <div className="mx-auto gap-5 p-8 min-h-screen grid w-full max-w-[1600px] grid-rows-app">
        <header_1.default />
        {children}
      </div>
    </cart_context_1.CartProvider>);
}
exports.default = StoreLayout;
