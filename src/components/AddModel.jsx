import React, { Component } from "react";
import { connect } from "react-redux";

class AddModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      isSuperAdmin: false
    };
  }

  handleChangeUserID = event => {
    this.setState({ userId: event.target.value });
  };
  isSuperAdminChecked = () => {
    this.setState({ isSuperAdmin: !this.state.isSuperAdmin });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { userId, isSuperAdmin, addedBy } = this.state;
    const data = {
      userId,
      isSuperAdmin: isSuperAdmin ? 1 : 0,
      addedBy,
      dealModelId: 1,
      isActive: 1,
      addedBy: 2154
    };
    this.props.dispatch({
      type: "ADD_ADMIN",
      data
    });
    this.props.handleOpenModel();
    this.state.userId = "";
    this.state.isSuperAdmin = false;
  };
  handleCancel = () => {
    this.props.handleOpenModel();
  };

  render() {
    const { isSuperAdmin, userId } = this.state;

    return (
      <div>
        <div className="col-sm-2" />
        <div className="col-sm-10">
          <form>
            <div className="form-group">
              <label htmlFor="email">Admin Id:</label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter user id of admin"
                required
                value={userId}
                onChange={this.handleChangeUserID}
              />
            </div>

            <div className="checkbox">
              <label>
                <input
                  type="checkbox"
                  name="superAdmin"
                  onChange={this.isSuperAdminChecked}
                  checked={isSuperAdmin}
                />{" "}
                Super Admin
              </label>
            </div>
            <div className="row">
              <button
                type="submit"
                className="btn btn-sm btn-success"
                onClick={this.handleSubmit}
              >
                SAVE
              </button>
              <button
                type="submit"
                className="btn btn-sm btn-danger"
                onClick={this.handleCancel}
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(AddModel);
