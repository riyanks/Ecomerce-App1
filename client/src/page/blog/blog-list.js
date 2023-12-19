import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import BlogList from '../../component/Blog/BlogList'

import Footer from '../../component/Common/Footer'
const BlogListView = () => {
    return (
        <>
            <Header/>
            <Banner title="Blog" />
            <BlogList/>
           
            <Footer/>
        </>
    )
}

export default BlogListView
