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
                            onChange={this.handleChange} name="name" type="radio" value="0"/> {question.answers[0]}
                    </li>
                    <li>
                        <input
                            onChange={this.handleChange} name="name" type="radio" value="1"/> {question.answers[1]}
                    </li>
                    <li>
                        <input
                            onChange={this.handleChange} name="name" type="radio" value="2"/> {question.answers[2]}
                    </li>
                    <li>
                        <input
                            onChange={this.handleChange} name="name" type="radio" value="3"/> {question.answers[3]}
                    </li>
                </ul>
            </div>
        );
    }
}

export default Question;