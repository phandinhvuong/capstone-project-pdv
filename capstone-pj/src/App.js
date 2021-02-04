import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state={index:1};
    }
    
    render() {
        return (
            <div>
               <p>Giá trị: {this.state.index}</p>
               <button name="button1" onClick={()=>{this.setState({index:this.state.index+1})}}>Tăng</button>
               <button name="button2" onClick={()=>{this.setState({index:this.state.index-1})}}>Giảm</button>
            </div>
        );
    }
}

export default App;