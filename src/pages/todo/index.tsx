import { Col, Row } from "antd";
import React, { ReactText, useState } from "react";
import Layout from "../../components/Layout";
import TodoForm from "../../components/Todo-form";
import TodoList, { TodoValuesWithKeyProp } from "../../components/Todo-list";
import api from '../../service/api';

function Todo() {
  const [todos, setTodos] = useState<TodoValuesWithKeyProp[]>(api.todoList);

  return (
    <Layout>
      <Row gutter={16} style={{ marginTop: "2em" }}>
        <Col offset={1}>
          <TodoForm
            onSubmit={value => {
              setTodos(
                [...todos, value].map((item, index) => ({
                  ...item,
                  key: parseInt(Math.random() * 10000000 + "").toString(32), 
                }))
              );
              api.todoList = [...todos];
            }}
          />
        </Col>
        <Col offset={2}>
          <TodoList
            todos={todos}
            remove={(keys: ReactText[]) => {
              setTodos(todos.filter(item => !keys.includes(item.key)));
              api.todoList = [...todos];
            }}
          />
        </Col>
      </Row>
    </Layout>
  );
}

export default Todo;
