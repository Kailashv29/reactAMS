import React, { Component } from "react";
import Output from "./Output";
export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: { first: "" },
      isOpened: false,
      colors: [],
      color: "#7CF75B"
    };
  }

  handleOpenBox = color => {
    this.setState({
      isOpened: !this.state.isOpened,
      color: color
    });
  };
  closeOutput = () => {
    this.setState({
      isOpened: !this.state.isOpened
    });
  };
  handleChangeName = event => {
    const name = this.state.name;
    name.first = event.target.value;
    this.setState({ name });
  };
  generateRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  getRandomColors = () => {
    let colorArray = [];
    for (var i = 0; i < 3; i++) {
      colorArray.push(this.generateRandomColor());
    }
    return colorArray;
  };
  componentWillMount() {
    let randomColors = this.getRandomColors();
    this.setState({ colors: randomColors });
  }

  createButton = () => {
    const { colors } = this.state;
    let count = 0;
    return colors.map(element => {
      count++;
      return (
        <div key={count} className="col-sm-4">
          <button
            type="submit"
            className="btn btn-default, btn-lg"
            onClick={() => {
              this.handleOpenBox(element);
            }}
            style={{ background: element }}
          >
            Submit
          </button>
        </div>
      );
    });
  };

  render() {
    const { isOpened, name, color } = this.state;
    console.log("inside input", this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="form-group  mb-3">
            <label htmlFor="name">Name : </label>
            <input
              className="form-control"
              value={name.first}
              type="text"
              onChange={this.handleChangeName}
              required
            />
          </div>
        </div>

        <div className="row">{this.createButton()}</div>

        <div className="row">
          {isOpened ? (
            <Output
              name={name.first}
              color={color}
              closeOutput={this.closeOutput}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
