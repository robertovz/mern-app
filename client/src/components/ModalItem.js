import React, { Component } from 'react'
import styled from 'styled-components';
import { createItem, updateItem, getItem } from '../actions/itemActions';

export default class ModalItem extends Component {
    state = {
        isOpen: false,
        item: [],
        id: '',
        name: '',
        category: '',
        description: '',
        file: null
    }

    componentDidMount() {
        this.loadItem();
    }

    loadItem = () => {

        if (this.props.id !== '' && this.props.id !== undefined) {

            getItem(this.props.id).then(res => {
                this.setState({
                    name: res[0].name,
                    description: res[0].description,
                    category: res[0].category
                })
            })
        }
    }

    toggle = () => {

        if (this.state.isOpen) {
            this.loadItem();
        }
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleChange = (e) => {

        this.setState({ [e.target.name]: e.target.value })
    }

    createItem = () => {
        const { name, description, category, file } = this.state;

        if (description === '' || category === '') {
            return null;
        }

        var data = new FormData();
        data.append('name', name);
        data.append('description', description);
        data.append('category', category);
        data.append('file', file);

        createItem(data).then(() => {
            this.toggle();
        })
    }

    onChange = (e) => {
        this.setState({ file: e.target.files[0] });
    }

    clearForm = () => {
        this.setState({ name: '', description: '', category: '', file: null })
    }

    editItem = () => {
        const { name, description, category, file } = this.state;

        if (description === '' || category === '') {
            return null;
        }

        var data = new FormData();
        data.append('name', name);
        data.append('description', description);
        data.append('category', category);
        data.append('file', file);

        updateItem(this.props.id, data).then(() => {
            this.toggle();
        })
    }

    render() {
        return (
            <div>
                <button type="button" className={this.props.type === 'create' ? 'btn btn-custom' : 'btn btn-icon'} onClick={this.toggle}>
                    <span className={this.props.type === 'create' ? 'd-block' : 'd-none'}>Add new <i className="fas fa-plus" /></span>
                    <span className={this.props.type === 'update' ? 'd-block' : 'd-none'}><i className="fas fa-edit blue" /></span>
                </button>
                <Modal className={this.state.isOpen ? "d-block" : "d-none"}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="modal-wrapper">
                                    <div className="modal-header">
                                        <h5 className="text-capitalize">{this.props.type} item</h5>
                                        <i className="mx-2 fas fa-times close-modal float-right" onClick={() => this.toggle()} />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">

                                            <div className="modal-body">
                                                <div className="form-group">
                                                    <label>Name</label>
                                                    <input className="form-control" placeholder="Enter movie name" required="required"
                                                        name="name" onChange={this.handleChange} value={this.state.name} ></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>Category</label>
                                                    <select className="form-control" name="category" required="required" onChange={this.handleChange} value={this.state.category} >
                                                        <option value="">Select Movie Category</option>
                                                        <option value="action">Action</option>
                                                        <option value="adventure">Adventure</option>
                                                        <option value="comedy">Comedy</option>
                                                        <option value="sport">Sport</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label>Description</label>
                                                    <textarea className="form-control text-review" placeholder="Enter movie description"
                                                        name="description" required="required" onChange={this.handleChange} value={this.state.description} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="modal-body">
                                                <div className="form-group">
                                                    <label>Image</label>
                                                    <input type="file" name="image" className="form-control" required="required" onChange={this.onChange} />
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-dark mr-2" onClick={this.clearForm}>Clear</button>
                                                <button type="button" className={this.props.type === 'create' ? 'btn btn-primary d-block' : 'd-none'} onClick={() => this.createItem()}>Create</button>
                                                <button type="button" className={this.props.type === 'update' ? 'btn btn-success d-block' : 'd-none'} onClick={() => this.editItem()}>Update</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        )

    }
}

const Modal = styled.div`
    position: fixed;
    padding: 0.75em;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.5);
    .modal-wrapper {
        background: #fff;
        box-shadow: 0 0 12px 2px rgba(0,0,0,.35);
        max-height: 530px;
        max-width: 95%;
        overflow-y: scroll;
        overflow-x: hidden;
        animation-name: modalFade;
        animation-duration: 1s;
    }
    .modal-header, .modal-body, .modal-footer {
        padding: 25px;
    }
    .close-modal {
        cursor: pointer;
        font-size: 17px;
    }
    .text-review {
        height: 170px;
    }
    @media screen and (max-width: 768px) {
        .modal-list {
            width: 100%;
        }
    }
    @keyframes modalFade {
        from {transform: translateY(-100%);opacity: 0;}
        to {transform: translateY(0);opacity: 1;}
    }
`