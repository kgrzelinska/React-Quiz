import ReactDOM from 'react-dom';
import React, {Component} from "react";

// -------------- KROK: wyświetlanie osiągniętego wyniku i podsumowania wiadomości w zależności od niego ----------------

class Results extends Component {
    render() {
        let resultsPercent = (this.props.score / this.props.dataArray.length * 100);
        if (resultsPercent > 60) {
            let mess = "Good job!";
        } else {
            let mess = "You can do better";
        }
        return (
            <div className="result">
                <h3> You got {this.props.score} out of {this.props.dataArray.length} </h3>
                <h2> {this.resultsPercent} % - {this.mess} </h2>
                <a className="btn btnReset" href="#"> Take test again </a>
            </div>
        );
    }
}

export default Results;
