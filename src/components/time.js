// import React, { Component } from 'react'

// export default class Time extends Component {
// constructor (props){
//     super(props);
// this.state = {
//     start: false ,
//     timer :0 ,
//     S :0,
//     M :0,
//     H :0,

   
   
    


// };
// // this.setstate
// setInterval(() => {
//         if (this.state.start) 
//         { this.setState({ S: this.state.S + 1 }); }
//         }, 1000);
        
//                  }
// counttime(){
//     this.setState({
//         H: Math.floor(timer / 3600),
//         M: Math.floor((timer - (this.state.H * 3600)) / 60),
//         S : timer - (this.state.H * 3600) - (this.state.M * 60),
//                       }) 
// }
                



// start = () => {
//         this.setState({ start: !this.state.start });
//       }

    
//     render() {
        return (
        <div className="time">  
        <div className="times">  
        <h2>Second: {'0'+this.state.S}</h2>
        <h2>Minute : {'0' + this.state.M}</h2>   
        <h2>Hour : {'0' +this.state.H}</h2>       
                
                
                
//             </div>    
//             <div className="btn">
//             <button onClick={this.start}>
//             {this.state.start ? "start" : "stop"}
//             </button>
//                 <button>reset</button>
//             </div>
            
//         </div>
//         );
//     }
       
// }

