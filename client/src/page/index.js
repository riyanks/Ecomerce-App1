import React, { useEffect } from 'react';
import Banner from '../component/Fashion/Banner'
import BannerBottom from '../component/Fashion/BannerBottom'
import HotProduct from '../component/Fashion/HotProduct'
import Footer from '../component/Common/Footer'
import Header from '../component/Common/Header'
import { useAuth } from '../auth'
import { useHistory } from "react-router-dom";

const Fashion = () => {
    const history = useHistory();
    const [logged] = useAuth();

  
    // Panggil fungsi untuk memeriksa otentikasi ketika komponen dimuat
    useEffect(() => {
        const checkAuthentication = () => {
            if (!logged || (typeof logged === 'function' && !logged())) {
                console.log("User not authenticated, redirecting to /");
                history.push('/');
            }
        };

        checkAuthentication();
    }, [logged, history]);
  
    return (
      <>
        <Header />
        <Banner />
        <BannerBottom />
        <HotProduct />
        <Footer />
      </>
    );
  };
export default Fashion