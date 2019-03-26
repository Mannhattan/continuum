import React, { Component } from 'react';

import "./PipelineModal.scss";

class PipelineModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pipeline_modal">
                <div className="container">
                    <div className={this.props.pipeline.success ? "modal_banner success" : "modal_banner failure"}>
                        {this.props.pipeline.success ? <i class="fas fa-check"></i> : <i class="fas fa-times"></i>}

                        {/* <a href="" className="close"><i class="fas fa-times"></i></a> */}

                        <div>
                            <h2><i class="fas fa-scroll"></i> test name for a pipeline</h2>
                            <h3><i class="fas fa-code-branch"></i> <span>master</span></h3>
                            <h3><i class="far fa-dot-circle"></i> <span>[commit name]</span></h3>
                            <h4><i class="far fa-clock"></i> time pipeline fired last</h4>
                        </div>

                        <div>
                            <a href="" className="modal_action">Stop</a>
                            <a href="" className="modal_action">Restart</a>
                            <a href="" className="modal_action">Run manually</a>
                        </div>

                        <div className="modal_menu">
                            <a href="" className="link active">Pipeline</a>
                            <a href="" className="link">Tests</a>
                            <a href="" className="link">Logs</a>
                            <a href="" className="link">Deploy</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PipelineModal;