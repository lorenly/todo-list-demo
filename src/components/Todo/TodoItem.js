import React, { Component } from 'react';
import './TodoItem.css';
import { Checkbox} from 'antd';
import 'antd/dist/antd.css'; 

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.todo.status,
    };
  }
  changeValue = (e) => {
    e && e.preventDefault();
    const { status } = this.state;
    const isCompleted = status === 'completed' ;
    this.props.onChange({...this.props.todo, status: isCompleted ? 'active': 'completed'});
    this.setState({status: isCompleted ? 'active': 'completed'})
  };

  render() {
    const { todo } = this.props;
    const isCompleted = this.state.status === 'completed' ;
    return (
      <div className="todo-item" onClick={this.changeValue}>
        <div>
          <label className="checkbox-label">
          <Checkbox
            checked={this.state.checked}
            disabled={this.state.disabled}
            onChange={this.onChange}
          >
              <input type="checkbox" checked={isCompleted} onChange={this.changeValue} />
              <span className="checkbox-custom rectangular"/>
          </Checkbox>
          </label>
        </div>
        <div className="content">
          <label className={this.state.status === 'completed' ? 'cross-line' : ''}>{todo.content}</label>
        </div>
      </div>
    )
  }
}
