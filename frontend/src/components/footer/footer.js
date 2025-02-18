import React from 'react'

const footer = () => {
    return (
        <>
            <div className=" my-" style={{ backgroundColor: "#212b33" }}>

                <footer className="text-center text-lg-start border border-dark mt-xl-5 pt-4">
                    {/* <!-- Grid container --> */}
                    <div className="container p-4">
                        {/* <!--Grid row--> */}
                        <div className="row">
                            {/* <!--Grid column--> */}
                            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                                <h5 className="text-uppercase mb-4 text-white">Contact Us</h5>

                                <table className="">
                                    <tbody>
                                        <tr>
                                            <td><i className="fas fa-envelope me-3" style={{ color: "white" }}></i></td>
                                            <td><a href="mailto:cmcomputerclasses@gmail.com" className="text-white">cmcomputerclasses@gmail.com</a></td>
                                        </tr>
                                        <tr>
                                            <td><i className="fas fa-phone me-3" style={{ color: "white" }}></i></td>
                                            <td><a href="tel:+919825000000" className="text-white">+91 9825000000</a></td>
                                        </tr>
                                        <tr>
                                            <td><i className="fas fa-map-marker-alt me-3" style={{ color: "white" }}></i></td>
                                            <td className="text-white">Shop no 16, Ruchi shopping center, Kavas, Surat, Gujarat 394510</td>
                                        </tr>
                                        <tr>
                                            <td><i className="fas fa-globe me-3" style={{ color: "white" }}></i></td>
                                            <td><a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="text-white">www.cmcomputerclasses.com</a></td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                                <h5 className="text-uppercase mb-4 text-white">Services</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!" className="text-white">Contact us</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Size Guide</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Shipping Information</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Returns & Exchanges</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Payment</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                                <h5 className="text-uppercase mb-4 text-white" >Careers</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!" className="text-white">Jobs</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!--Grid column Add Map--> */}
                            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                                <h5 className="text-uppercase mb-4 text-white">Location</h5>
                                <iframe
                                    title="Google Maps"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.220272845673!2d72.71026060495811!3d21.183406878142776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be053f805641cbd%3A0x257df2f7760b6978!2sCm%20Computer%20And%20Spoken%20Classes!5e0!3m2!1sen!2sin!4v1739855854473!5m2!1sen!2sin"
                                    width="100%"
                                    height="200"
                                    style={{
                                        border: "5px solid #000",
                                        borderRadius: "15px",
                                        boxShadow: "0 0 20px 0 rgb(0, 0, 0)",
                                        maxWidth: "500px", // Ensures it doesn't become too wide on larger screens
                                        display: "block",
                                        margin: "0 auto" // Centers the map in the column
                                    }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>

                            </div>
                            {/* <!--Grid column--> */}


                            {/* <!--Grid column--> */}
                        </div>

                        {/* <!--Grid row--> */}
                    </div>
                    {/* <!-- Grid container --> */}

                    {/* <!-- Copyright --> */}
                    <div className="text-center p-3 border-top border-white text-white">
                        © 2020 Copyright:
                        <a className="text-white" href="#"> CM Placement Services</a>
                    </div>
                    {/* <!-- Copyright --> */}
                </footer>

            </div>
        </>
    );
}

export default footer;