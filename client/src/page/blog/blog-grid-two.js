import React from 'react'
import BlogGridTwo from '../../component/Blog/BlogGridTwo'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'

import Footer from '../../component/Common/Footer'
const BlogGridTwos = () => {
    return (
        <>
            <Header/>
            <Banner title="Blog" />
           <BlogGridTwo/> 
          
            <Footer/>
        </>
    )
}

export default BlogGridTwos
