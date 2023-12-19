import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import BlogGridThree from '../../component/Blog/BlogGridThree'

import Footer from '../../component/Common/Footer'
const BlogGridThrees = () => {
    return (
        <>
            <Header/>
            <Banner title="Blog" />
            <BlogGridThree/>
            
            <Footer/>
        </>
    )
}

export default BlogGridThrees
