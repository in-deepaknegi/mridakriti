import React from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Form from '@/components/booking/ram-mandir/Form'

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Form />
            </main>
            <Footer />
        </>
    )
}

export default page