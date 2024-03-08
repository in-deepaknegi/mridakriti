import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy',
    robots: {
        index: false,
        follow: true,
    }
}
const page = () => {
    return (
        <>
            <Navbar />
            <main className='bg-dusk-200/30 py-20'>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl text-center font-bold mb-4">Privacy Policy</h2>
                    <p className="mb-4">
                        Thank you for visiting <strong>Mridakriti</strong> website. This Privacy Policy outlines how we collect, use, and safeguard your personal information. Please read the following information carefully:
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Information We Collect:</h3>
                    <p className="mb-4">
                        We collect personal information, such as your name, email address, and other relevant details, when you voluntarily provide it to us through our website or other communication channels.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">How We Use Your Information:</h3>
                    <p className="mb-4">
                        We use the collected information to provide and improve our services, respond to inquiries, and send relevant updates. Your information is handled with the utmost confidentiality and is not shared with third parties without your consent.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Data Security:</h3>
                    <p className="mb-4">
                        We take appropriate measures to ensure the security of your personal information. However, please be aware that no data transmission over the internet is completely secure, and we cannot guarantee the absolute security of your data.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Cookies:</h3>
                    <p className="mb-4">
                        Our website may use cookies to enhance your browsing experience. You can choose to disable cookies in your browser settings, but this may affect the functionality of certain features on our site.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Third-Party Links:</h3>
                    <p className="mb-4">
                        Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. Please review the privacy policies of those websites for more information.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Policy Updates:</h3>
                    <p className="mb-4">
                        <strong>Mridakriti</strong> reserves the right to update or modify this Privacy Policy at any time. Changes will be effective immediately upon posting to our website. We encourage you to review this page periodically for the latest information on our privacy practices.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Contact Us:</h3>
                    <p className="mb-4">
                        If you have any questions or concerns about our Privacy Policy, please contact us at 
                        [<a href="mailto:office@mridakriti.com" className='text-blue-700'>office@mridakriti.com</a> ].
                    </p>

                    <p>
                        By using our website, you agree to the terms outlined in this Privacy Policy.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default page