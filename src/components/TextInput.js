import React from "react";
import "./TextInput.css";

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div class="input">
        <label class={this.props.input} id={this.props.font}>{this.props.value}</label>
        <input class="text" value={this.state.value} onChange={this.handleChange} id={this.props.id}/>
      </div>
    );
  }
}

export default TextInput;
