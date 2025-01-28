import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OurCompany = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
        "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
        "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
        "https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
        "https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
        "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
        "https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
        "https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    ];

    // Animation variants for images
    const imageVariants = {
        enter: { opacity: 0, x: 50 }, // Enter from the right
        center: { opacity: 1, x: 0 }, // Center position
        exit: { opacity: 0, x: 50 }, // Exit to the left
    };

    // Update images every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length - 2)); // Loop through images
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [images]);

    // Calculate which images to show
    const currentImages = [
        images[currentIndex],
        images[currentIndex + 1],
        images[currentIndex + 2],
    ];

    return (
        <>
            <div className="">
                <h3 className="mb-3 text-white text-center ">Our Company</h3>
            </div>
            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="carousel-inner d-flex">
                                <AnimatePresence>
                                    {currentImages.map((image, index) => (
                                        <motion.div
                                            key={image}  // Ensure that each image is re-rendered correctly
                                            className="col-md-4 mb-1"
                                            initial="enter" // Fade in when entering
                                            animate="center" // Stay in the center
                                            exit="exit" // Fade out when leaving
                                            variants={imageVariants} // Use variants for animations
                                            transition={{ duration: 2 }} // Duration of the transition
                                        >
                                            <img
                                                className="img-fluid rounded-pill shadow"
                                                alt={`carousel-${index}`}
                                                src={image}
                                                style={{
                                                    height: '15rem',
                                                }}
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
