import React, { Component } from 'react';

import "./ImageItem.scss";

import Menu from './Menu.jsx';

class ImageItem extends Component {
    constructor(props) {
        super(props);
    }

    delete(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="image-item">
                <h2>{this.props.image.repository}</h2>
                <span>{this.props.image.tag}</span>
                <h3>{this.props.image.id}</h3><h4>{this.props.image.size}</h4>
                <h5>Created: {this.props.image.created}</h5>

                <div className="image_item_options">
                    <a href="" onClick={(e) => this.delete(e)}><i className="fas fa-info"></i></a>
                    <a href="" onClick={(e) => this.delete(e)}><i className="fas fa-trash"></i></a>
                </div>
            </div>
        );
    }
}

export default ImageItem;