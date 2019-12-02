import React, { Component } from 'react'
import styled from 'styled-components'
import { getItem } from '../actions/itemActions'

export default class Details extends Component {
    state = {
        isOpen: false,
        item: [],
        name: '',
        category: '',
        description: '',
        image: '',
        file: null
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.loadItem();
    }

    loadItem = () => {
        const id = this.props.match.params.id;

        getItem(id).then(res => {
            this.setState({
                item: res
            })
        })
    }

    render() {
        return (
            <div>
                <DetailsWrapper>
                    <div className="container">
                        {this.state.item.map(item => {
                            return (
                                <div className="row" key={item.id}>
                                    <div className="col-md-3">
                                        <img src={require('../public/images/' + item.image)} className="card-img-top py-3" />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="p-5 white">
                                            <h4>
                                                {item.name}
                                            </h4>
                                            <div className="py-2">
                                                <ul className="info-menu">
                                                    <li className=""><i className="fas fa-list"></i></li>
                                                    <li className=""><i className="fas fa-heart"></i></li>
                                                    <li className=""><i className="fas fa-bookmark"></i></li>
                                                </ul>
                                            </div>
                                            <h5>
                                                Overview
                                    </h5>
                                            <div>
                                                {item.description}
                                            </div>
                                            <div className="mt-5 d-flex">
                                                <h6 className="font-weight-bold">Category: </h6><span className="ml-2 text-capitalize"> {item.category}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </DetailsWrapper>

            </div>
        )
    }
}


const DetailsWrapper = styled.div` 
    margin-top: 130px;
    background: #444;
    font-size: 14px;

    .info-menu {
        font-size: 17px;
        display: flex;
        list-style: none;
        padding: 0;

        li {
            margin-right: 20px;
            border-radius: 50%;
            border: 2px solid #fff;
            cursor: pointer;
            transition: all 0.3s ease-in-out;

            &:hover {
                background: #fff;

                i {
                    color: #444;
                }
            }
            
            i {
                height: 40px;
                width: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
`