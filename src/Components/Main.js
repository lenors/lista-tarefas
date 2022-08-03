import React, { Component } from "react";

export default class Main extends Component {
  state = {
    task: "",
    TaskList: []
  };

  handleChange = (event) => {
    this.setState({
      task: event.target.value
    });
  };

  handleClick = () => {
    this.setState({
      TaskList: this.state.TaskList.concat({
        task: this.state.task,
        id: Math.random()
      }),
      task: ""
    });
  };

  remover = (id) => {
    this.setState({
      TaskList: this.state.TaskList.filter((item) => {
        return item.id !== id;
      })
    });
  };

  render() {
    return (
      <>
        <h1>Lista de Tarefas</h1>
        <input
          type="text"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Enviar</button>
        <div>
          {this.state.TaskList.map((item) => (
            <ul>
              <li>{item.task}</li>
              <button
                onClick={() => {
                  this.remover(item.id);
                }}
              >
                x
              </button>
            </ul>
          ))}
        </div>
      </>
    );
  }
}
