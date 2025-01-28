import React from 'react'

const footer = () => {
    return (
        <>
            <div className=" my-" style={{backgroundColor: "#212b33"}}>

                <footer className="text-center text-lg-start border border-dark mt-xl-5 pt-4">
                    {/* <!-- Grid container --> */}
                    <div className="container p-4">
                        {/* <!--Grid row--> */}
                        <div className="row">
                            {/* <!--Grid column--> */}
                            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                                <h5 className="text-uppercase mb-4 text-white">OUR WORLD</h5>

                                <ul className="list-unstyled mb-4">
                                    <li>
                                        <a href="#!" className="text-white">About us</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Collections</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Environmental philosophy</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Artist collaborations</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                                <h5 className="text-uppercase mb-4 text-white">Assistance</h5>

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
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            {/* <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                                <h5 className="text-uppercase mb-4">Sign up to our newsletter</h5>

                                <div className="form-outline form-white mb-4">
                                    <input type="email" id="form5Example2" className="form-control" />
                                    <label className="form-label" for="form5Example2">Email address</label>
                                </div>

                                <button type="submit" className="btn btn-outline-white btn-block">Subscribe</button>
                            </div> */}
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