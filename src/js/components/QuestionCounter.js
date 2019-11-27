import ReactDOM from 'react-dom';
import React, {Component} from "react";

// -------------- KROK: wyświetlanie, na którym pytaniu obecnie jesteśmy i ile jeszcze pytań przed nami----------------

class QuestionCounter extends Component {
    render() {
        return (
            <div className="questionCounter">
                <p> QUESTION {this.props.current} OUT OF {this.props.dataArray.length} </p>
            </div>
        );
    }
}

export default QuestionCounter;




