"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const Hero = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [size, setSize] = useState('A4');
    const [message, setMessage] = useState('');
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);
    const sizeCosts = {
        A3: 1000,
        A4: 1500,
        A5: 2000,
    };
    const [totalCost, setTotalCost] = useState(sizeCosts[size]);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(name);
        console.log(email);
        console.log(phone);
        console.log(size);
        console.log(message);

        const cost = sizeCosts[size];

        const res = await fetch('/api/booking', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, size, message, cost
            })
        })

        const { msg, success } = await res.json();
        setError(msg);
        setSuccess(success);

        if (success) {
            setName("");
            setEmail("");
            setPhone("");
            setSize("A4");
            setMessage("");
            setTotalCost(sizeCosts['A4']);

            setTimeout(() => {
                router.push('/');
            }, 2000);
        }
    };

    const handleSizeChange = (e) => {
        const newSize = e.target.value;
        setSize(newSize);

        // Update total cost based on the selected size
        setTotalCost(sizeCosts[newSize]);
    };

    return (
        <section className='isolate relative bg-black -mt-20 overflow-hidden'>
            <div className='mx-auto max-w-7xl py-20'>
                <form onSubmit={handleSubmit} className="form space-y-5 max-w-xl px-4 mx-auto my-10">
                    <div>
                        <label htmlFor="name" >Your name</label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            type="name"
                            id="name"
                            placeholder="name" required />
                    </div>
                    <div>
                        <label htmlFor="email" >Your email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            id="email"
                            placeholder="name@gmail.com"
                            required />
                    </div>
                    <div>
                        <label htmlFor="phone" >Your Phone No.</label>
                        <input
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                            type="phone"
                            id="phone"
                            placeholder="+91 11111 00000"
                            required />
                    </div>

                    <div>
                        <label htmlFor="size">Painting Size</label>
                        <select
                            onChange={handleSizeChange}
                            value={size}
                            id="size"
                            className="block w-full py-2 pl-3 pr-10 mt-1 text-base bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-primary-300 focus:border-primary-300 sm:text-sm">
                            <option value="A3">A3</option>
                            <option value="A4">A4</option>
                            <option value="A5">A5</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>

                    {/* Display the cost of the selected size */}
                    <p className='text-gray-300 text-base'>Cost: ₹{totalCost}</p>


                    <div className="sm:col-span-2">
                        <label htmlFor="message" >Any extra cutomization</label>
                        <textarea
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            id="message"
                            rows="3"
                            placeholder="Mention your needs..."></textarea>
                    </div>

                    <div className='flex'>
                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center bg-primary text-white rounded-lg sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300">
                            {success ? (
                                <span>
                                    Request send successfully...
                                </span>
                            ) : (
                                <span>
                                    Join our waiting list
                                </span>
                            )}
                        </button>
                        <div className='my-auto ml-4'>
                            {error && error.map((e) => (
                                <div key={error} className={`${success ? 'text-green-600' : 'text-red-500'} text-sm font-semibold`}>
                                    <svg className="flex-shrink-0 inline w-4 h-4 mr-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"></path>
                                    </svg>
                                    <span className='my-auto'>{e}</span>
                                </div>
                            ))
                            }
                        </div>
                    </div>

                </form>
            </div>
        </section>
    )
}

export default Hero