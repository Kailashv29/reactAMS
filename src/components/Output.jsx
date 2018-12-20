import React, { Component } from "react";
import _ from "lodash";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    };
  }
  closeTextBox = () => {
    this.setState(state => ({ isShow: !state.isShow }));
    this.props.closeOutput();
  };
  render() {
    const { name, color } = this.props;
    const { isShow } = this.state;
    console.log(this.props, this.state);
    return (
      <div className="row">
        {isShow ? (
          <div className="col-sm-12">
            <br />
            <div
              style={{
                background: color,
                width: "1000px",
                border: "25px",
                padding: "25px",
                margin: "25px"
              }}
            >
              <h3> {_.toUpper(name)}</h3>
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-danger btn-lg"
              onClick={this.closeTextBox}
            >
              Close
            </button>
          </div>
        ) : (
          undefined
        )}
      </div>
    );
  }
}
