import React, { useEffect } from 'react'
import logo from '../../../assets/img/logo.png'
import payment from '../../../assets/img/common/payment.png'
import { Link } from 'react-router-dom'
import Cookie from '../Cookie'

import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'

const FooterData = [
    {
        title: "INFORMATION",
        links: [
            { linkTitle: "Home", link: "/" },
            { linkTitle: "About us", link: "/about" },
            { linkTitle: "Privacy Policy", link: "/privacy-policy" },
            { linkTitle: "Frequently Questions", link: "/faqs" },
            { linkTitle: "Order Tracking", link: "/order-tracking" },
            { linkTitle: "Compare", link: "/compare" }
        ]
    },
    {
        title: "SHOP",
        links: [
            { linkTitle: "Cart View One", link: "/cart" },
            { linkTitle: "Cart View Two", link: "/cartTwo" },
            { linkTitle: "Empty Cart", link: "/empty-cart" },
            { linkTitle: "Checkout View One", link: "/checkout-one" },
            { linkTitle: "Checkout View Two", link: "/checkout-two" },
            { linkTitle: "Wishlist", link: "/wishlist" }
        ]
    }
]

const Footer = () => {
    let dispatch = useDispatch();

    let promoCenter = useSelector((state) => state.settings.promoCenter);
    let promoStatus = useSelector((state) => state.settings.promoStatus);
    let stopPromo = useSelector((state) => state.settings.stopPromo);
    let cookie = useSelector((state) => state.settings.cookie);
    let stopCookie = useSelector((state) => state.settings.stopCookie);

    useEffect(() => {
        if (promoStatus) {
            return
        } else {
            dispatch({ type: "settings/promoStatus" })
            setTimeout(function () {
                dispatch({ type: "settings/promoCenter" })
            }, 2000)
        }

        if (stopCookie) {
            return
        } else {
            setTimeout(function () {
                dispatch({ type: "settings/cookie" })
            }, 6000)
        }
    }, [dispatch, promoStatus, stopCookie]);


    const startPromoModal = () => {
        if (stopPromo) {
            dispatch({ type: "settings/promoCenter" })
            return;
        } else {
            dispatch({ type: "settings/promoCenter" })
            setTimeout(function () {
                dispatch({ type: "settings/promoCenter" })
            }, 700000)
        }

    }

    const stopPromoModal = () => {
        dispatch({ type: "settings/stopPromo" })
    }

    const cancelCookie = () => {
        dispatch({ type: "settings/cookie" })
    }

    const acceptCookie = () => {
        // Write your function there
        dispatch({ type: "settings/cookie" })
    }

    return (
        <>
            <section id="copyright_one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="copyright_left">
                                <h6>© CopyRight 2023 <span></span></h6>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="copyright_right">
                                <img src={payment} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* {
                cookie ? <Cookie accept={acceptCookie} cancel={cancelCookie} /> : null
            } */}
           
        </>
    )
}

export default Footer