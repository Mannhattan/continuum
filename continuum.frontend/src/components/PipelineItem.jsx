import React, { Component } from 'react';

import "./PipelineItem.scss";

class PipelineItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.pipeline.success ? "pipeline_item success" : "pipeline_item failure"}>
                {this.props.pipeline.success ? <i class="fas fa-check"></i> : <i class="fas fa-times"></i>}
                
                <div>
                    <h2>{this.props.pipeline.name}</h2>
                    <h3>Branch <span>{this.props.pipeline.branch}</span></h3>
                    <h3>Commit <span>{this.props.pipeline.commit}</span></h3>
                </div>

                <i class="fas fa-cog"></i>

                <div className="pipeline_item_options">
                    
                </div>
            </div>
        );
    }
}

export default PipelineItem;