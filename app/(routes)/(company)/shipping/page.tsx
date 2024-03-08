import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Shipping Policy',
    robots: {
        index: false,
        follow: true,
    }
}
const page = () => {
    return (
        <>
            <Navbar />
            <main className='bg-dusk-200/10 py-20'>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl text-center font-bold mb-4">Shipping Policy</h2>
                    <p className="mb-4">
                        Welcome to <strong>Mridakriti</strong> Shipping Policy. Please read the following information carefully before making a purchase from our website:
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Order Processing:</h3>
                    <p className="mb-4">
                        All orders are processed within 1 business days. Orders placed on weekends or holidays will be processed on the next business day.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Shipping Rates:</h3>
                    <p className="mb-4">
                        Shipping rates are calculated based on the weight and destination of the package. The shipping cost will be displayed at checkout before completing your purchase.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Delivery Time:</h3>
                    <p className="mb-4">
                        Estimated delivery times vary depending on the shipping method selected and the destination. Please refer to the shipping carrier&apos;s website for more information on delivery times.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">International Shipping:</h3>
                    <p className="mb-4">
                        We offer international shipping. Shipping rates and delivery times for international orders may vary. Any additional customs fees or taxes imposed by the destination country are the responsibility of the customer.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Order Tracking:</h3>
                    <p className="mb-4">
                        Once your order has shipped, you will receive a shipping confirmation email with a tracking number. You can track your order using the provided tracking information.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Lost or Damaged Items:</h3>
                    <p className="mb-4">
                        <strong>Mridakriti</strong> is not responsible for any lost or damaged items during transit. If you encounter any issues with your shipment, please contact the shipping carrier to file a claim.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Contact Us:</h3>
                    <p className="mb-4">
                        If you have any questions or concerns about our Shipping Policy, please contact us at [<a href="mailto:office@mridakriti.com" className='text-blue-700'>office@mridakriti.com</a> ].
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Policy Updates:</h3>
                    <p className="mb-4">
                        <strong>Mridakriti</strong> reserves the right to update or modify this Shipping Policy at any time. Changes will be effective immediately upon posting to our website. Please check this page periodically for the latest information.
                    </p>

                    <p>
                        By making a purchase from <strong>Mridakriti</strong>, you agree to comply with and be bound by the terms and conditions of this Shipping Policy.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default page