import React, { Component } from "react";
import { connect } from "react-redux";
import ListAdmin from "./ListAdmin";
import _ from "lodash";

class SearchWithAddButtonAndList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      userId: ""
    };
  }
  handleOpenBox = () => {
    this.props.handleOpenModel();
  };
  handleSearch = event => {
    let value = event.target.value;
    if (!_.isNil(value) && value.trim().length) {
      this.props.dispatch({
        type: "SEARCH_ADMIN",
        userId: value
      });
    }
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-7">
            <div className="form-group">
              <input
                type="search"
                className="form-control"
                id="usr"
                placeholder="search.."
                onChange={this.handleSearch}
              />
            </div>
            <div>
              <ListAdmin />
            </div>
          </div>
          <div className="col-sm-3">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                this.handleOpenBox();
              }}
            >
              Add Admin
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(SearchWithAddButtonAndList);
