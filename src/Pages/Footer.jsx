import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 px-5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand Section */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-3"> <a className="text-2xl md:text-3xl text-primary font-extrabold ">TOY <span className='text-secondary'>PIA</span></a></h2>
                    <p className="text-sm leading-6">
                        We always try to provide you with the best service. Your satisfaction is our top priority.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a className="hover:text-white" href="/">Home</a></li>
                        <li><a className="hover:text-white" href="/">About Us</a></li>
                        <li><a className="hover:text-white" href="/">Services</a></li>
                        <li><a className="hover:text-white" href="/">Contact</a></li>
                    </ul>
                </div>

                {/* Policy Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Important Links</h3>
                    <ul className="space-y-2">
                        <li><a className="hover:text-white" href="/">Terms & Conditions</a></li>
                        <li><a className="hover:text-white" href="/">Privacy Policy</a></li>
                        <li><a className="hover:text-white" href="/">FAQ</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
                    <div className="flex space-x-4 text-xl">
                        <a className="hover:text-white" href="#"><FaFacebookF /></a>
                        <a className="hover:text-white" href="#"><FaInstagram /></a>
                        <a className="hover:text-white" href="#"><FaLinkedinIn /></a>
                        <a className="hover:text-white" href="#"><FaYoutube /></a>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-5">
                © {new Date().getFullYear()} <a className="text-[18px] md:text-2xl text-primary font-extrabold ">TOY <span className='text-secondary'>PIA</span></a>. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
