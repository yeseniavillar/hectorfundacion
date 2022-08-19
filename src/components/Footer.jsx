import React, { Fragment } from 'react'

export default function Footer () {
  return (
        <Fragment>
            <footer id="footer">
               <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>FUNDACION HECTOR A RODRIGUEZ</h3>
                                <p>
                                    Santo Domingo <br />
                                    , NY 535022<br />
                                    Republica Dominicana <br /><br />
                                    <strong>Phone:</strong> 849-403-2603<br />
                                    <strong>Email:</strong> fundacionhectorarodriguez@gmail.com<br />
                                </p>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#header">Home</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#about">About us</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#news">News</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Gallery</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#team">Team</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/">Web Design</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/">Web Development</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/">Product Management</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/">Marketing</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/">Graphic Design</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Social Networks</h4>
                                    <div className="social-links mt-3">
                                    <a href="/" className="twitter"><i className="bx bxl-twitter"></i></a>
                                    <a href="/" className="facebook"><i className="bx bxl-facebook"></i></a>
                                    <a href="https://www.instagram.com/fundacionhectorarodriguez/" className="instagram"><i className="bx bxl-instagram"></i></a>
                                    <a href="/" className="youtube"><i className='bx bxl-youtube'></i></a>
                                    </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container py-4">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Fundación Hector a Rodriguez</span></strong>. All Rights Reserved
                    </div>
                </div>
            </footer>

        </Fragment>

  )
}
