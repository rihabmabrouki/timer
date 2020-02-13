import React, { Component } from 'react'

 class Timer  extends Component {
    constructor(props){
        super(props)
        this.state = {
            status: false,
            timer: 0,
            seconds:0,
            hours:0,
            minutes:0
        }
      
        setInterval(() => {
            if(this.state.status){ this.setState({
                timer: this.state.timer + 1
            })
            this.calcul(this.state.timer)
        } 
        },
            1000
            )
        }
    
    
    calcul = ( ms ) => {
        this.setState({
        hours: Math.floor(ms / 3600),
        minutes: Math.floor((ms - (this.state.hours * 3600)) / 60),
        seconds: parseInt((ms - (this.state.hours * 3600) - (this.state.minutes * 60)) )
        })
    }

    Click = () => {
        this.setState( {status: !this.state.status} )
    }
  
    Reset = () => {
        this.setState({ status:false, timer: 0, seconds:0, hours:0, minutes:0 });
    };
    

    render() {
   
return(
<div className="time">  
     <div className="times">  
     <h2>Second: {this.state.seconds.toString().padStart(2, '0')}</h2>
     <h2>Minute : { this.state.minutes.toString().padStart(2, '0')}</h2>   
     <h2>Hour : {this.state.hours.toString().padStart(2, '0') }</h2>    
            <div>
                <button className="btn" onClick={this.Click}>{this.state.status ? 'Stop' : 'Start'}</button>
                <button className="btn" onClick={this.Reset}>Reset</button>
            </div>   
        </div> 
</div>
        

)
}
}

export default Timer ;
