import React, { Component } from 'react';
import './App.css';
import Button from "@material-ui/core/es/Button/Button";


const CONTENTS = Object.freeze({
    hello: 'hello',
    about: 'about',
    recommendations: 'recommendations',
    contracts: 'contracts',
    trademarks: 'trademarks',
    litigation: 'litigation'
});


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        };
    }

    contentComponent = content => {
        if (content === CONTENTS.hello) {

        } else if (content === CONTENTS.about) {

        } else if (content === CONTENTS.recommendations) {

        } else if (content === CONTENTS.litigation) {

        } else if (content === CONTENTS.contracts) {

        } else if (content === CONTENTS.trademarks) {

        } else {
            console.error('weird content: ' + content);
        }
    };

    render() {

        return (
            <div className="app">
                <header className="header">
                    <Button onClick={() => this.setState({content: CONTENTS.recommendations})}>ממליצים</Button>
                    <Button onClick={() => this.setState({content: CONTENTS.about})}>אודות</Button>
                    <Button onClick={() => this.setState({content: CONTENTS.hello})}>נעים להכיר</Button>
                </header>
                <div className="main">
                    <div className="sidebar">
                        <h2>תחומי עיסוק</h2>
                        <Button onClick={() => this.setState({content: CONTENTS.contracts})}>חוזים</Button>
                        <Button onClick={() => this.setState({content: CONTENTS.trademarks})}>סימני מסחר</Button>
                        <Button onClick={() => this.setState({content: CONTENTS.litigation})}>ליטיגציה</Button>
                    </div>
                    <div className="content">
                        {this.contentComponent(this.state.content)}
                    </div>
                    <div className="other-sidebar">

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
