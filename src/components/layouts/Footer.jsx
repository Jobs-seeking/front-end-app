import React from "react";
import { ReactComponent as LogoPNV } from '../../assets/images/LogoPNV.svg';
import { FaFacebookF,FaLinkedinIn,FaYoutube } from "react-icons/fa";
export default function Footer() {
    return (
        <section className="Footer">
            <div className="footer--content">
                <div className="logo">
                    <a href="#"><LogoPNV className="logopvn"/></a>
                </div>
                <div className="footer--infomation">
                    <div className="footer--phone">
                        <a href="tel:843753530"> Phone: (+)84 554 266</a>
                    </div>
                    <div className="footer--address">
                        <a href="https://www.google.com/maps/place/99+T%C3%B4+Hi%E1%BA%BFn+Th%C3%A0nh,+Ph%C6%B0%E1%BB%9Bc+M%E1%BB%B9,+S%C6%A1n+Tr%C3%A0,+%C4%90%C3%A0+N%E1%BA%B5ng+550000,+Vi%E1%BB%87t+Nam/@16.0597632,108.2414633,17z/data=!4m13!1m7!3m6!1s0x3142177f2ced6d8b:0xeac35f2960ca74a4!2zOTkgVMO0IEhp4bq_biBUaMOgbmgsIFBoxrDhu5tjIE3hu7ksIFPGoW4gVHLDoCwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!3b1!8m2!3d16.0597966!4d108.2434978!3m4!1s0x3142177f2ced6d8b:0xeac35f2960ca74a4!8m2!3d16.0597966!4d108.2434978?hl=vi-VN">
                        Address: 99 To Hien Thanh, Da Nang
                        </a>
                    </div>
                    <div className="footer--Website">
                        <a href="https://www.passerellesnumeriques.org/">
                            Website: https://www.passerellesnumeriques.org/
                        </a>
                    </div>
                </div>
                <div className="footer--page">
                    <div className="footer--page-home">
                        <a href="#!">Home</a>
                    </div>
                    <div className="footer--page-home">
                        <a href="#!">Jobs</a>
                    </div>
                    <div className="footer--page-home">
                        <a href="#!">Apply</a>
                    </div>
                </div>
                <div className="footer--media">
                    <div className="footer--media-face">
                        <a href="https://www.facebook.com/PNVietnam">
                        <FaFacebookF/>
                        </a>
                    </div>
                    <div className="footer--media-linked">
                        <a href="https://www.linkedin.com/company/passerellesnum-riques/mycompany/">
                            <FaLinkedinIn/>
                        </a>
                    </div>
                    <div className="footer--media-youtobe">
                        <a href="#">
                            <FaYoutube/>
                        </a>
                    </div>
                </div>
            </div>
            
        </section>
    )
}