import React, { Component } from 'react';

import "./Pipelines.scss";

import Menu from './../components/Menu.jsx';

import PipelineItem from "./../components/PipelineItem.jsx";

import PipelineModal from "./../components/PipelineModal.jsx";

class Pipelines extends Component {
    constructor() {
        super();

        this.state = {
            pipelines: [
                {
                    name: "test successful pipeline",
                    branch: "development",
                    commit: "Fixed bugs",
                    success: true
                },
                {
                    name: "test failed pipeline",
                    branch: "production",
                    commit: "Fixed bugs",
                    success: false
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <Menu pipelines/>
            
                <section className="content pipelines">
                    <div className="header">
                        <h1>Pipelines</h1>
                        <a href="" className="button image_add">Add pipeline</a>
                    </div>

                    {this.state.pipelines.map((pipe) => <PipelineItem pipeline={pipe} />)}

                    {/* <PipelineModal pipeline={this.state.pipelines[0]}/> */}
                </section>
            </div>
        );
    }
}

export default Pipelines;