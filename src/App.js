import React from 'react';
import axios from 'axios'; //'npm install --save axios' use this before using axios

import './App.css';

class App extends React.Component{
    state = {
        advice:''
    };

    componentDidMount(){
        console.log('COMPONENT DID MOUNT');
        this.fetchQuote();
    };

    fetchQuote = ()=>{
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const {advice} = response.data.slip;

            this.setState({advice: advice}); 
            //Or this.setState((advice)) If both state and local variables have same name

            console.log(advice);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    render(){
        const {advice} = this.state; 
        return(
            <div className='app'>
                <div className="card"> 
                    <h1 className = "heading"> {advice}</h1>
                    <button className='button' onClick={this.fetchQuote}>
                        <span>
                            GIVE ME ADVICE
                        </span>
                    </button>
                </div>
            </div>
        )
    }
}

export default App;