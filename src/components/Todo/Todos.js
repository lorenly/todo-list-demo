import React, { Component } from 'react'
import TodoItem from "./TodoItem";

export default class Todos extends Component {
  
  patchStatus = (todoItem) => {
    this.props.patchStatus(todoItem);
  };
  render() {
    const {todos} = this.props;
    return (
      <div className="todo-list">
        {todos.map((todo, i) =>
          <li key={i}>
           <TodoItem 
              todo={todo} 
              onChange={this.patchStatus}/>
          </li>)
        }
      </div>
    )
  }
}
