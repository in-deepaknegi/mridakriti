import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Terms and Conditions',
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
                    <h2 className="text-3xl text-center font-bold mb-4">Terms and Conditions</h2>
                    <p className="mb-4">
                        Welcome to <strong>Mridakriti</strong> website. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions:
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Use of the Website:</h3>
                    <p className="mb-4">
                        The content of this website is for your general information and use only. It is subject to change without notice. We reserve the right to modify or discontinue the website at any time without prior notice.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Intellectual Property:</h3>
                    <p className="mb-4">
                        All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of <strong>Mridakriti</strong> and is protected by copyright laws. You may not reproduce, distribute, or use any content from this website without our prior written permission.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">User Responsibilities:</h3>
                    <p className="mb-4">
                        You agree to use this website for lawful purposes and in a manner consistent with all applicable laws and regulations. You are prohibited from engaging in any activity that could damage, disable, or impair the functionality of the website.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Limitation of Liability:</h3>
                    <p className="mb-4">
                        <strong>Mridakriti</strong> shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your access to or use of this website.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Privacy Policy:</h3>
                    <p className="mb-4">
                        Your use of this website is also governed by our Privacy Policy. Please review the Privacy Policy to understand our practices.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Governing Law:</h3>
                    <p className="mb-4">
                        These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of [Your Jurisdiction].
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Changes to Terms:</h3>
                    <p className="mb-4">
                        <strong>Mridakriti</strong> reserves the right to modify or replace these terms and conditions at any time. Changes will be effective immediately upon posting to our website. Your continued use of the website after any changes to the terms and conditions constitutes acceptance of those changes.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Contact Us:</h3>
                    <p className="mb-4">
                        If you have any questions or concerns about our Terms and Conditions, please contact us at [<a href="mailto:office@mridakriti.com" className='text-blue-700'>office@mridakriti.com</a> ].
                    </p>

                    <p>
                        By using this website, you agree to the terms outlined in these Terms and Conditions.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default page