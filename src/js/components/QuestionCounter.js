import ReactDOM from 'react-dom';
import React, {Component} from "react";

class QuestionCounter extends Component {
    render() {
        return (
            <div className="questionCounter">
                <p> QUESTION <span> [ {this.props.current} ] </span> OUT
                    OF <span> [ {this.props.dataArray.length} ] </span></p>
            </div>
        );
    }
}

export default QuestionCounter;




