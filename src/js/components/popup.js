import React from 'react';
import ReactDOM from 'react-dom';


// --------------------komponent popup------------------------ //
class Popup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: 'start',
            title: 'Welcome to Quiz',
            text: 'This is my first quiz application built using ReactJS.',
            btnText: 'START THE QUIZ'
        };

        popupHandle()
        {
            let {time} = this.state;
            if (time === 'start') {
                this.setState({
                    time: 'end',
                    title: 'Congratulations!',
                    btnText: 'Restart'
                })
            }
        }
    }

    return
}