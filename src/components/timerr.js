// import React, { Component } from "react";

// export default class timerr extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       start: false,
//       timer: 0
//     };
//     setInterval(() => {
//       if (this.state.start) {
//         this.setState({ timer: this.state.timer + 1 });
//       }
//     }, 1000);
//   }
//   start = () => {
//     this.setState({ start: !this.state.start });
//   };
//   render() {
//     return (
//       <div>
//         <h3>{this.state.timer}</h3>
//         <button onClick={this.start}>
//           {this.state.start ? "start" : "stop"}
//         </button>
//       </div>
//     );
//   }
// }
