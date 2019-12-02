import React, { Component } from 'react'
import styled from 'styled-components';
import Modal from './ModalItem.js';
import { getItems, deleteItem } from '../actions/itemActions';
import { Link } from 'react-router-dom';

export default class Products extends Component {

    state = {
        items: []
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.loadItems();
    }

    loadItems = () => {

        getItems().then(res => {
            
            (res.sort((prev, curr) =>
                prev.id > curr.id ? -1 : 1
            ));
            this.setState({
                items: res
            })
        })
    }

    removeItem = (id) => {

        deleteItem(id).then(() => {
            this.loadItems();
        })
    }

    render() {
        return (
            <ProductWrapper>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mx-auto">
                            <form className="input-group-prepend mx-3 my-2">
                                <h4>Movies</h4>
                                <ul className="ml-auto">
                                    <Modal type="create" />
                                </ul>
                            </form>
                        </div>
                        <div className="col-lg-12 mx-auto">
                            <div className="container">
                                <div className="row">
                                    {this.state.items.map(item => {
                                        return (
                                            <div key={item.id} className="col-md-6">
                                                <div className="card">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <Link to={`/details/${item.name}/${item.id}`} className="black">
                                                                <img src={require('../public/images/' + item.image)} className="card-img-top" />
                                                            </Link>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="ml-3 mt-3 mr-3">
                                                                <h6 className="card-name">
                                                                    <Link to={`/details/${item.name}/${item.id}`} id={item.id} className="black">
                                                                        {item.name}
                                                                    </Link>
                                                                </h6>
                                                                <div className="text-muted">
                                                                    {item.created_at}
                                                                </div>
                                                                <div className="card-description mt-3">
                                                                    {item.description.length > 211 ? <div>{`${item.description.substring(0, 211)}...`}
                                                                    </div> : item.description}
                                                                </div>
                                                                <div className="card-bottom">
                                                                    <button className="btn">
                                                                        <Link to={`/details/${item.name}/${item.id}`} id={item.id} className="black">
                                                                            More Info
                                                            </Link>
                                                                    </button>
                                                                    <div className="btns-right d-flex">
                                                                        <Modal type="update" id={item.id} />
                                                                        <button className="btn btn-icon" onClick={() => this.removeItem(item.id)}>
                                                                            <i className="fas fa-trash red" />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ProductWrapper >
        )
    }
}


const ProductWrapper = styled.div`
    margin-top: 170px;

    .btn-custom {
        border: 1px solid #a5a5a5;

        &:hover {
            background: #a5a5a5;
            color: #fff;
        }

        i {
            color: #a5a5a5;
        }

        &:hover i {
            color: #fff;
        }
    }

    .card {
        margin-top: 20px;
        font-size: 12px;
        border: none;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

        img {
            position: absolute;
            top: 0;
            bottom: 0;
            height: 100%;
        }
        .card-name {
            font-weight: bold;
            height: 30px;
        }
        .card-description {
            margin-bottom: 120px;
            height: 90px;
        }
        .card-bottom {
            position: absolute;
            bottom: 5px;
            margin: 15px;
            border-top: 1px solid lightgrey;
            right: 0;
            left: 0;
            display: flex;
            font-size: 12px;

            .btns-right {
                position: absolute;
                right: 20px;
            }

        }
    }

    @media screen and (max-width: 992px) {
        .card {
            font-size: 10px;
            
            .card-bottom {
                bottom: 10px;

                .btn {
                    font-size: 10px;
                }
            }
        }
    }

    @media screen and (max-width: 767px) {
        .card {
            max-width: 250px;
            margin: 0 auto;
            text-align: center;
            
            img {
                position: relative;
            }
        }
    }
`
