"use client"
import React, { createContext, useState, useContext, useEffect } from 'react';

const CART_STORAGE_KEY = 'shopping_cart';
const QUANTITY_STORAGE_KEY = 'item_quantities';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [itemQuantities, setItemQuantities] = useState({});

    useEffect(() => {
        // Load cart data from local storage on component mount
        const savedCart = localStorage.getItem(CART_STORAGE_KEY);
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }

        const savedQuantities = localStorage.getItem(QUANTITY_STORAGE_KEY);
        if (savedQuantities) {
            setItemQuantities(JSON.parse(savedQuantities));
        }
    }, []);

    const saveCartToLocalStorage = (cartData) => {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartData));
    };
    const saveQuantitiesToLocalStorage = (quantities) => {
        localStorage.setItem(QUANTITY_STORAGE_KEY, JSON.stringify(quantities));
    };


    const addToCart = (item) => {
        const updatedCart = [...cart, item];
        setCart(updatedCart);
        saveCartToLocalStorage(updatedCart);
    };

    const removeFromCart = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
        saveCartToLocalStorage(newCart);

        // Remove the corresponding quantity when an item is removed from the cart
        const newQuantities = { ...itemQuantities };
        delete newQuantities[`item_${index}`];
        setItemQuantities(newQuantities);
        saveQuantitiesToLocalStorage(newQuantities);
    };

    const increaseQuantity = (index) => {
        const newQuantities = { ...itemQuantities };
        const itemKey = `item_${index}`;
        newQuantities[itemKey] = (newQuantities[itemKey] || 0) + 1;
        setItemQuantities(newQuantities);
        saveQuantitiesToLocalStorage(newQuantities);
    };

    const decreaseQuantity = (index) => {
        const newQuantities = { ...itemQuantities };
        const itemKey = `item_${index}`;
        if (newQuantities[itemKey] > 1) {
            newQuantities[itemKey] -= 1;
            setItemQuantities(newQuantities);
            saveQuantitiesToLocalStorage(newQuantities);
        }
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, itemQuantities }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
