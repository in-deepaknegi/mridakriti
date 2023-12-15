"use client"
import { useCart } from '@/library/CartContext'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react'

const Cart = () => {

    const { cart, removeFromCart, increaseQuantity, decreaseQuantity, itemQuantities } = useCart();

    const handleRemove = (index: any) => {
        removeFromCart(index);
    }

    const calculateSubtotal = () => {
        return cart.reduce((acc: number, item: { price: number; }, index: any) => {
            const quantity = itemQuantities[`item_${index}`] || 1;
            return acc + item.price * quantity;
        }, 0);
    };

    return (
        <div>
            <h1>Your Cart</h1>
            <ul>
                {cart.map((item: { imageSrc: string | StaticImport; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }, index: React.Key | null | undefined) => (
                    <li key={index}>
                        <Image
                            src={item.imageSrc}
                            alt='sdfsdf'
                            className='w-20'
                        />
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                        <button onClick={() => increaseQuantity(index)}>Add Quantity</button>
                        <button onClick={() => decreaseQuantity(index)}>Decrease Quantity</button>
                        <span>Quantity: {itemQuantities[`item_${index}`] || 1}</span>
                        <button onClick={() => handleRemove(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <div>
                <h2>Subtotal: ${calculateSubtotal()}</h2>
            </div>
        </div>
    )
}

export default Cart