import React, { Component } from 'react';

class Resize extends Component {
  state = {
    width: 0,
    height: 0,
    newWidth: 0,
    newHeight: 0
  }

  handleChangeWidth = (event) => {
    this.setState({
      width: event.target.value
    })
  }

  handleChangeHeight = (event) => {
    this.setState({
      height: event.target.value
    })
  }

  handleChange = (event) => {
    let percentage = event.target.value
    let width = this.state.width * percentage
    let height = this.state.height * percentage

    this.setState({
      newWidth: width,
      newHeight: height
    })
  }

  render() {
    return (
      <div>
        <p>Width: <input type="text" value={this.state.width} onChange={this.handleChangeWidth}/></p>
        <p>Height: <input type="text" value={this.state.height} onChange={this.handleChangeHeight}/></p>
        <p>Percentage:
          <input 
          type="text" 
          value={this.state.percentage}
          onChange={this.handleChange}
          />
        </p>
        <p>
          New Size:
          <br/>
          Width: <strong>{this.state.newWidth}</strong>
          <br/>
          Height: <strong>{this.state.newHeight}</strong>
        </p>
      </div>
    )  
  }
}

export default Resize;
