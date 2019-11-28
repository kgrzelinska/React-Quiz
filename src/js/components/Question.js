import React, {Component} from "react";

// -------------- KROK: wyświetlanie pytania z odpowiedziami /mapowanie/, ----------------
// -------------- akcja dodania +1 po wybraniu poprawnej odpowiedzi   ----------------

class Question extends Component {
    handleChange = (e) => {
        const {question} = this.props;

        // e.preventDefault();
        const selected = parseInt(e.target.value);
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
                    <li>
                        <input
                            onChange={this.handleChange} name="name" type="radio" value="0"/> <span>A</span> <p> {question.answers[0]} </p>
                    </li>
                    <li>
                        <input
                            onChange={this.handleChange} name="name" type="radio" value="1"/> <span>B</span> <p> {question.answers[1]} </p>
                    </li>
                    <li>
                        <input
                            onChange={this.handleChange} name="name" type="radio" value="2"/> <span>C</span> <p> {question.answers[2]} </p>
                    </li>
                    <li>
                        <input
                            onChange={this.handleChange} name="name" type="radio" value="3"/> <span>D</span><p> {question.answers[3]} </p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Question;