import React, { Component } from "react";
export default class ModelAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      superAdmins: [],
      userValidationStatus: { title: "", description: "", validation: true }
    };
  }
  renderNormal = () => {
    return;
  };
  renderForm = () => {
    return;
  };
  render() {
    return;
  }
}
