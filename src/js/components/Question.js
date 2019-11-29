import React, {Component} from "react";

// -------------- KROK: wyświetlanie pytania z odpowiedziami /mapowanie/, ----------------
// -------------- akcja dodania +1 po wybraniu poprawnej odpowiedzi   ----------------

class Question extends Component {
    handleChange = (e) => {
        const {question} = this.props;

        // e.preventDefault();
        const selected = parseInt(e.currentTarget.dataset.id);
        this.props.setCurrent(this.props.current + 1);
        if (selected === question.correct) {
            this.props.setScore(this.props.score + 1);
        }
    }

    render() {
        const {question} = this.props;
        return (
            <div className="questionAndAnswersText">
                <h2> {question.question} </h2>
                <ul className={"listOfAnswers"}>
                    <li data-id="0" onClick={this.handleChange}><span>A</span> <p> {question.answers[0]} </p>
                    </li>
                    <li data-id="1" onClick={this.handleChange}><span>B</span> <p> {question.answers[1]} </p>
                    </li>
                    <li data-id="2" onClick={this.handleChange}><span>C</span> <p> {question.answers[2]} </p>
                    </li>
                    <li data-id="3" onClick={this.handleChange}><span>C</span> <p> {question.answers[3]} </p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Question;