import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

class ListAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenEdit: false,
      userId: null,
      editedUserId: null
    };
  }
  isSuperAdminChecked = () => {
    this.setState({ isSuperAdmin: !this.state.isSuperAdmin });
  };

  handleDelete = userId => {
    this.props.dispatch({
      type: "DELETE_ADMIN",
      userId
    });
  };
  handleEdit = userId => {
    this.setState({
      isOpenEdit: !this.state.isOpenEdit,
      userId: userId,
      editedUserId: userId
    });
  };
  cancelEditAction = () => {
    this.setState({
      isOpenEdit: !this.state.isOpenEdit,
      userId: null,
      editedUserId: null
    });
  };
  saveEditedValue = userId => {
    const data = {
      editedUserId: this.state.editedUserId,
      isSuperAdmin: 1,
      actualUserId: userId
    };
    this.props.dispatch({
      type: "EDIT_ADMIN",
      data
    });
    this.setState({
      isOpenEdit: !this.state.isOpenEdit,
      userId: null,
      editedUserId: null
    });
  };
  handleEditChangeValue = event => {
    this.setState({ editedUserId: event.target.value });
  };
  createAdminList = admins => {
    let count = 0;
    return admins.map(element => {
      count++;
      return (
        <div key={count}>
          <ul className="unordered-list">
            <li>
              <div className="row">
                <div className="col-sm-10" title={element.userId}>
                  {element.userId}
                </div>
                <div className="col-sm-1">
                  <span
                    className="icon-btn"
                    onClick={() => {
                      this.handleEdit(element.userId);
                    }}
                  >
                    <i className="fas fa-edit" />
                  </span>
                </div>
                <div className="col-sm-1">
                  <span
                    className="icon-btn"
                    onClick={() => {
                      this.handleDelete(element.userId);
                    }}
                  >
                    <i className="fa fa-trash" />
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      );
    });
  };

  createAdminListOnEdit = (admins, userId) => {
    let count = 0;
    return admins.map(element => {
      count++;
      return (
        <div key={count}>
          <ul className="unordered-list">
            <li>
              {element.userId != userId ? (
                <div className="row">
                  <div className="col-sm-10" title={element.userId}>
                    {element.userId}
                  </div>
                  <div className="col-sm-1">
                    <span className="icon-btn">
                      <i className="fas fa-edit" />
                    </span>
                  </div>
                  <div className="col-sm-1">
                    <span className="icon-btn">
                      <i className="fa fa-trash" />
                    </span>
                  </div>
                </div>
              ) : (
                <div className="row">
                  <div className="col-sm-10" title={element.userId}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="usr"
                        value={this.state.editedUserId}
                        onChange={this.handleEditChangeValue}
                      />
                    </div>
                  </div>
                  <div className="col-sm-1">
                    <span
                      className="icon-btn"
                      onClick={() => {
                        this.saveEditedValue(element.userId);
                      }}
                    >
                      <i className="fa fa-check" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="col-sm-1">
                    <span
                      className="icon-btn"
                      onClick={() => {
                        this.cancelEditAction();
                      }}
                    >
                      <i className="fa fa-window-close" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      );
    });
  };

  render() {
    const { isOpenEdit, userId } = this.state;
    const { admins } = this.props;
    console.log(admins);
    return (
      <div>
        {isOpenEdit
          ? this.createAdminListOnEdit(admins, userId)
          : this.createAdminList(admins)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    admins: state
  };
};
export default connect(mapStateToProps)(ListAdmin);
