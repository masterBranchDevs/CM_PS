import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import I1 from './images/Img1.webp'
import I2 from './images/Img2.webp'
import I3 from './images/Img3.webp'
import I4 from './images/Img4.webp'
import I5 from './images/Img5.webp'
import I6 from './images/Img6.webp'
import I7 from './images/Img7.webp'
import I8 from './images/Img8.webp'
import I9 from './images/Img9.webp'

const OurCompany = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        I1,I2,I3,I4,I5,I6,I7,I8,I9,
    ];

    // Animation variants for images
    const imageVariants = {
        enter: { opacity: 0, x: 50 },
        center: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 50 }, 
    };

    // Update images every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length - 2)); // Loop through images
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); 
    }, [images]);

    // Calculate which images to show
    const currentImages = [
        images[currentIndex],
        images[currentIndex + 1],
        images[currentIndex + 2],
    ];

    return (
        <>
            {/* <div className=" "> */}
                <h3 className=" text-white text-center sm:p-1 md:p-1">Our Company</h3>
            {/* </div> */}
            <section className="pt-4 pb-1 ">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="carousel-inner d-flex">
                                <AnimatePresence>
                                    {currentImages.map((images, index) => (
                                        <motion.div
                                            key={images}  
                                            className="col-md-4 mb-1"
                                            initial="enter" 
                                            animate="center" 
                                            exit="exit" 
                                            variants={imageVariants} 
                                            transition={{ duration: 2 }} 
                                        >
                                            <img
                                                id="images"
                                                className="img-fluid rounded-pill shadow h-24 sm:h-24 md:h-60 lg:h-60 xl:h-60"
                                                alt={`carousel-${index}`}
                                                src={images}
                                            />
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurCompany;
