import React, { Component } from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Task = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;

  border-radius: 5px;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: red;
  color: white;
`;

class TaskList extends Component {
  static tasks = [
    {
      id: 1,
      text: "Зробити домашнє завдання",
    },
    {
      id: 2,
      text: "Вивчити React",
    },
    {
      id: 3,
      text: "Погуляти",
    },
  ];

  deleteTask = (id) => {
    TaskList.tasks = TaskList.tasks.filter((task) => task.id !== id);

    this.forceUpdate();
  };

  render() {
    return (
      <List>
        {TaskList.tasks.map((task) => (
          <Task key={task.id}>
            <span>{task.text}</span>

            <Button onClick={() => this.deleteTask(task.id)}>Видалити</Button>
          </Task>
        ))}
      </List>
    );
  }
}

export default TaskList;
