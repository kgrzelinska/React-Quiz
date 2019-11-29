import ReactDOM from 'react-dom';
import React, {Component} from "react";
import QuestionCounter from './QuestionCounter';
import ListOfQuestions from "./ListOfQuestions";
import Results from './Results';
import Footer from "./Footer";
import dataArray from "../data/dataArray";

// import './../sass/style.scss';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            current: 1
        }
    }

    setCurrent = (current) => {
        this.setState({current});
    }

    setScore = (score) => {
        this.setState({score});
    }

    render() {
        if (this.state.current > dataArray.length) {
            return <Results className="col-lg-10 col-lg-offset-1 flex-box" dataArray={dataArray}
                            setScore={this.setScore} setCurrent={this.setCurrent} {...this.state}/>
        }
        return (
            <div className="container">
                <QuestionCounter className="questionCounter" dataArray={dataArray}
                                 setCurrent={this.setCurrent} {...this.state} />
                <ListOfQuestions dataArray={dataArray} setScore={this.setScore}
                                 setCurrent={this.setCurrent} {...this.state} />
                <Footer/>
            </div>
        );
    }
}

export default Main;