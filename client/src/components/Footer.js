import React, { Component } from 'react'
import styled from 'styled-components'

export default class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
                            <h2 className="my-4 footer-brand"><span className="font-weight-bold">Logo</span></h2>
                            <p
                                className="mb-4"
                            >Nesciunt doloribus eveniet, harum fugit rem dolor alias nobis exercitationem facere repellendus. Blanditiis veritatis soluta officia nisi sint pariatur libero dolorum illum!</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">

                            <ul className="f-address">
                                <h5 className="my-4 font-weight-bold">ABOUT US</h5>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <br />
                                <li>
                                    <a href="#">Links</a>
                                </li>
                                <br />
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                                <br />
                                <li>
                                    <a href="#">API</a>
                                </li>
                                <br />
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
                            <h5 className="my-4 font-weight-bold text-center">LATEST UPDATES</h5>
                            <ul className="recent-post">
                                <li>
                                    <label className="mr-3">
                                        28
                          <br />
                                        <span>SEP</span>
                                    </label>
                                    <span>Rendomised words which dont look eveable.</span>
                                </li>
                                <li>
                                    <label className="mr-3">
                                        29
                          <br />
                                        <span>SEP</span>
                                    </label>
                                    <span>Rendomised words which dont look eveable.</span>
                                </li>
                                <li>
                                    <label className="mr-3">
                                        30
                          <br />
                                        <span>SEP</span>
                                    </label>
                                    <span>Rendomised words which dont look eveable.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
                            <h5 className="my-4 font-weight-bold">NEWSLETTER</h5>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Your Email Address" />
                                <button className="btn btn-primary">
                                    <i className="fas fa-check"></i>
                                </button>
                            </div>
                            <ul className="social-pet mt-4">
                                <li>
                                    <a href="#" title="facebook">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="twitter">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="google-plus">
                                        <i className="fab fa-google-plus-g"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="instagram">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-center text-white">&copy; 2019 Your Company. All Rights Reserved.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </FooterWrapper>
        )
    }
}

const FooterWrapper = styled.div` 
  color: #fff;
  background-attachment: fixed;
  background: #081c24;
  background-size: cover;
  background-position: bottom;
  margin-top: 70px;

.footer-brand {
  font-style: italic;
  font-family: "Tangerine", serif;
  font-size: 1.9rem;
}
footer p {
  color: #ccc;
}
footer a {
  color: #ccc;
}
.social-pet li {
  display: inline-block;
  margin-right: 10px;
}
.social-pet li a {
  height: 35px;
  width: 35px;
  border-radius: 50%;
  text-align: center;
  display: block;
  line-height: 35px;
  background-color: #3a5a95;
  color: #fff;
}
.social-pet li:nth-child(2) a {
  background-color: #57aced;
}
.social-pet li:nth-child(3) a {
  background-color: #dd4f43;
}
.social-pet li:nth-child(4) a {
  background-color: #6b27b2;
}
.social-pet li a:hover {
  background-color: #0141a2;
}
.social-pet li a:hover i {
  transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
}
.recent-post li {
  display: block;
  color: #ccc;
  margin-bottom: 25px;
}
.recent-post li label {
  float: left;
  border: 2px solid #ccc;
  padding: 1px 7px;
  text-align: center;
}
.recent-post li label span {
  color: #fff;
}
footer .input-group-addon {
  background-color: #0141a2;
  padding: 10px;
}
.f-address li {
  display: inline-block;
}
.f-address li i {
  color: #2995de;
  font-size: 18px;
}
.f-address li a {
  color: #ccc;
}

.copyright {
  background-color: #111;
  padding: 12px 0;
  font-size: 14px;
}
`