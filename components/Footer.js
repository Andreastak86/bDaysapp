// components/Footer.js
import React from "react";

const Footer = () => {
    return (
        <footer className='bg-[#A9BCD0] p-4 mt-auto'>
            <div className='container mx-auto'>
                <p className='text-center text-gray-900'>
                    © {new Date().getFullYear()}{" "}
                    <a href='https://www.you.no' target='_blank'>
                        John Doe
                    </a>{" "}
                    All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
