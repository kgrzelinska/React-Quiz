import ReactDOM from 'react-dom';
import React, {Component} from "react";

class Results extends Component {
    render() {
        let resultsPercent = (this.props.score / this.props.dataArray.length * 100);
        return (
            <div className="result">
                <h2> You have completed the quiz</h2>
                <h3> You got <span> {this.props.score} </span> out of <span> {this.props.dataArray.length} </span> points </h3>
                <button className="btn btn-default"><a href="/">Take again</a></button>
            </div>
        );
    }
}

export default Results;
