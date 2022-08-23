import React, { Component } from 'react';

class Timer extends Component{
    state = {}
    render(){
        return(
            <div className='Time'>
                <h1>  {this.props.date.toLocaleTimeString()}
</h1>
              
            </div>
        );
    
    }
}

export default Timer;