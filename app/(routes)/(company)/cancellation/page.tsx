import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Cancellation Policy',
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
                    <h2 className="text-3xl text-center font-bold mb-4">Cancellation Policy</h2>
                    <p className="mb-4">
                        Thank you for choosing <strong>Mridakriti</strong>. We appreciate your business and look forward to providing you with our [product/service]. Please review our cancellation policy below:
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Cancellation Period:</h3>
                    <ul className="list-disc ml-6 mb-4">
                        <li>Cancellations made within 10 days of booking will be eligible for a full refund.</li>
                        <li>Cancellations made after 10 days of booking but before 12 days of the scheduled [purchase] will be eligible for a [40]% refund.</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">No-shows:</h3>
                    <p className="mb-4">
                        In the event of a no-show without any prior notice, the full amount will be charged, and no refund will be issued.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Refund Process:</h3>
                    <p className="mb-4">
                        Refunds will be processed using the original payment method within 5-7 business days.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Modifications:</h3>
                    <p className="mb-4">
                        <strong>Mridakriti</strong> understands that plans may change. If you need to modify your booking, please contact us at [<a href="mailto:office@mridakriti.com" className='text-blue-700'>office@mridakriti.com</a> ] as soon as possible, and we will do our best to accommodate your request.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Exceptions:</h3>
                    <p className="mb-4">
                        Exceptions to this policy may be considered on a case-by-case basis in extenuating circumstances. Please contact us directly to discuss your situation.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Contact Information:</h3>
                    <p className="mb-4">
                        For any cancellation or modification requests, please contact us at [<a href="mailto:office@mridakriti.com" className='text-blue-700'>office@mridakriti.com</a> ].
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Policy Updates:</h3>
                    <p className="mb-4">
                        <strong>Mridakriti</strong> reserves the right to modify or update this cancellation policy at any time. Please check our website for the latest version.
                    </p>

                    <p>
                        By making a booking with <strong>Mridakriti</strong>, you agree to comply with and be bound by the terms and conditions of this cancellation policy.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default page