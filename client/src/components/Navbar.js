import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    state = {
        isOpen: false,
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions)
    }


    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen, open: false })
    }

    updateDimensions = () => {
        let { isOpen } = this.state;
        if (window.innerWidth >= 768) {
            isOpen = false;
        }
        this.setState({
            isOpen
        });
    }

    render() {
        return (
            <NavWrapper>
                <nav className="nav-top">
                    <div className="container">
                        <ul className="nav-wrap ml-auto">
                            <li className="nav-item">
                                <a
                                    href="#"
                                    className="nav-link"
                                >Login</a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#"
                                    className="nav-link"
                                >Register</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="nav-middle">
                    <div className="container">
                        <div className="row">
                            <button type="button" className="nav-btn"
                                onClick={this.handleToggle}><i className="fas fa-bars" /></button>
                            <div className="col-md-1">
                                <div className="ml-3">
                                    <h4 className="navbar-brand">Logo</h4>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <ul className={this.state.isOpen ? "nav-menu show-nav" : "nav-menu mr-auto"}>
                                    <li className="nav-item active"><a href="/" className="nav-link">Products</a>
                                    </li>
                                    <li className="nav-item active"><a className="nav-link">About</a>
                                    </li>
                                    <li className="nav-item active"><a className="nav-link">Contact</a>
                                    </li>
                                    <li className="nav-item active"><a className="nav-link">Account</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="form-inline my-0">
                    <input className="form-control" type="search" aria-label="Search" />
                    <div className="container">
                        <div className="search-wrapper">
                            <button className="btn btn-search my-2 my-sm-0" type="submit"><i className="fas fa-search" /></button>
                        </div>
                    </div>
                </form>
            </NavWrapper>
        )
    }
}


const NavWrapper = styled.div`
    background: #081c24;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;

    .nav-wrap {
        display: flex;
        list-style: none;
        font-size: 12px;
        float: right;
        
        .nav-item {
            margin-left: -10px;
            
            .nav-link {
                color: grey;
            }
        }
    }

    .nav-middle {
        margin-top: 20px;

        .nav-btn {
            display: none;
        }
    }

    .navbar-brand {
        color: #fff;
        margin-top: 17px;
    }

    .nav-menu {
        display: flex;
        list-style: none
        margin-top: 20px;
        
        .nav-item {
            
            .nav-link {
                color: #fff;
                font-weight: bold;
                text-transform: uppercase;
                font-size: 15px;
            }
        }
    }
    form {
        position: absolute;
        left: 0;
        right: 0;

        input {
            width: 100%!important;
            margin: 0;
            border-radius: 0;
            border: none;
            border-bottom: 1px solid lightgrey;
            content: "";
            padding: 0 170px;
            font-style: italic;
        }
        
        .search-wrapper {
            position: absolute;
            top: 0;
            color: grey;
            i {
                color: grey;
            }
        }
    }
    
    @keyframes modalFadeNav {
        from {transform: translateX(-105%);opacity: 0;}
        to {transform: translateX(0);opacity: 1;}
    }

    @media screen and (max-width: 992px) {
        
        input {
            padding: 0 105px;
        }
        
    }

    @media screen and (max-width: 767px) {
        
        input {
            padding: 15px 50px!important;
        }
        
        .nav-middle {
            height: 70px;
            
            .nav-btn {
                display: block!important;
                position: absolute;
                background: transparent;
                border: none;
                color: #fff;
                top: 35px;
                left: 20px;
                font-size: 20px;
                z-index: 1000;
            }

            .navbar-brand {
                margin-top: 10px;
                margin-left: 95px;
            }

            .show-nav {
                position: fixed;
                top: 105px;
                left: 0;
                background: #fff;
                box-shadow: 0 3px 27px rgba(0,0,0,.24);
                width: 320px;
                height: 100%;
                display: block;
                padding: 20px;
                animation-name: modalFadeNav;
                animation-duration: 0.7s;
                
                .navbar-brand {
                    text-align: center;
                }

                .nav-link {
                    color: #333!important;
                }

            }
        }
    }
`

