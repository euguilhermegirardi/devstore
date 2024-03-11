"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCart = exports.CartProvider = void 0;
const react_1 = require("react");
const CartContext = (0, react_1.createContext)({});
function CartProvider({ children }) {
    const [cartItems, setCartItems] = (0, react_1.useState)([]);
    function addToCart(productId) {
        setCartItems((state) => {
            const productInCart = state.some((item) => item.productId === productId);
            if (productInCart) {
                return state.map((item) => {
                    if (item.productId === productId) {
                        return Object.assign(Object.assign({}, item), { quantity: item.quantity + 1 });
                    }
                    else {
                        return item;
                    }
                });
            }
            else {
                return [...state, { productId, quantity: 1 }];
            }
        });
    }
    const value = (0, react_1.useMemo)(() => ({ items: cartItems, addToCart }), [cartItems]);
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
exports.CartProvider = CartProvider;
const useCart = () => (0, react_1.useContext)(CartContext);
exports.useCart = useCart;
