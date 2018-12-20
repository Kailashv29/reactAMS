import React, { Component } from "react";
import AddModel from "./AddModel";
import SideBar from "./SideBar";
import SearchWithAddButtonAndList from "./SearchWithAddButtonList";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayAddModel: false
    };
  }
  handleOpenModel = () => {
    this.setState({
      isDisplayAddModel: !this.state.isDisplayAddModel
    });
  };

  render() {
    const { isDisplayAddModel } = this.state;

    return (
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">
                  Deal Vector
                </a>
              </div>
            </div>
          </nav>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-2">
            <SideBar />
          </div>
          <div className="col-sm-10">
            {!isDisplayAddModel ? (
              <SearchWithAddButtonAndList
                handleOpenModel={this.handleOpenModel}
              />
            ) : (
              <AddModel handleOpenModel={this.handleOpenModel} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
