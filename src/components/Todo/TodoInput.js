import React, {Component} from 'react'
import { Button, Input } from 'antd';
import 'antd/dist/antd.css'; 

export default class TodoInput extends Component {
  state = {
    inputValue: ''
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value});
  };

  dispatch = () => {
    this.props.onNewTodoAdded(this.state.inputValue);
    this.setState({inputValue: ''})
  };

  render() {
    return (
      <div className="todo-input" >
        <Input placeholder="Input Item" size="large" type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
        <Button type="primary" shape="round" onClick={this.dispatch}> Add Item </Button>
      </div>
    )
  }
}
