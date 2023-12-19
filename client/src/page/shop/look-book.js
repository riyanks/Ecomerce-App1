import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import LookBooks from '../../component/LookBook'

import Footer from '../../component/Common/Footer'
const LookBook = () => {
    return (
        <>
            <Header />
            <Banner title="Lookbook" />
            <LookBooks />

            <Footer />
        </>
    )
}

export default LookBook