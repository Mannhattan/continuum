import React, { Component } from 'react';

import "./Images.scss";

import Menu from './../components/Menu.jsx';

import ImageItem from './../components/ImageItem.jsx';

class Images extends Component {
    constructor() {
        super();

        this.state = {
            images: [
                {
                    repository: "[repo name]",
                    tag: "[tag]",
                    id: "[id]",
                    created: "[creation time]",
                    size: "[size]"
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <Menu images/>
            
                <section className="content images">
                    <div className="header">
                        <h1>Images</h1>
                        <a href="" className="button image_add">Add image</a>
                    </div>

                    {this.state.images.map((image) => <ImageItem image={image} key={image.id}/>)}
                </section>
            </div>
        );
    }
}

export default Images;