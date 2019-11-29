import React, {Component} from "react";
import Question from "./Question";

// -------------- KROK: wyświetlanie pytań ----------------

class ListOfQuestions extends Component {
    render() {
        return (
            <div className="listOfQuestions">
                {
                    this.props.dataArray.map(question => {
                        if (this.props.current === question.id)
                            return <Question score={this.props.score} current={this.props.current}
                                             setScore={this.props.setScore} setCurrent={this.props.setCurrent}
                                             question={question} key={question.id} {...this.props}/>
                    })
                }
            </div>
        );
    }
}

export default ListOfQuestions;
