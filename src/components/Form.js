import React, { Component } from "react";
import { connect } from "react-redux";
import { addPokemon } from "../js/actions";

function mapDispatchToProps(dispatch) {
  return {
    addPokemon: pokemon => dispatch(addPokemon(pokemon))
  };
}

function mapStateToProps(state) {
  return {
    state
  }
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    this.props.addPokemon({ title });
    this.setState({ title: "" });
  }
  render() {
    console.log(this.props.state);
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedForm);

export default Form;