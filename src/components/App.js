import React, { Component } from "react";
import ColorPicker from "./ColorPicker";

class App extends Component {
  state = {
    color: {
        rgb:{
            r: 33,
            b: 143,
            g: 34,
            a: 1,
        },
        hex:'#21228f',
        hsl:{
            a: 1,
            h: 239,
            l: 0,
            s: 5,
        }
    },
  };

  onChange = (event) => {
    console.log(event);
    this.setState({ color: event });
  };

  render() {
    return (
      <div>
        <div className="App" style={{backgroundColor:`rgba(${this.state.color.rgb.r},${this.state.color.rgb.g},${this.state.color.rgb.b},${this.state.color.rgb.a})`}}>
          <div role="list" className="ui horizontal list">
            <div role="listitem" className="item">
              <div className="content">
                <div className="header"><ColorPicker onColorSelect={this.onChange} /></div>
              </div>
              <div className="ui content">
                <code style={{color:'white'}}>{JSON.stringify(this.state.color.hex)}</code>
              </div>
            </div>
          </div>
        </div>
    </div>
    );
  }
}
export default App;