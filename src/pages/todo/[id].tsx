import { Button } from "antd";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import api from "../../service/api";

function TodoDetail(): JSX.Element {
  const router = useRouter();
  const { id } = router.query;
  const todo = api.getTodo(id as string);

  return (
    <Layout>
      {todo ? (
        <ul style={{ marginTop: "2em" }}>
          <li>
            <b>Description: </b>
            <span>{todo.description}</span>
          </li>
          <li>
            <b>Category: </b>
            <span>{todo.category}</span>
          </li>
          <li>
            <b>Content: </b>
            <span>{todo.content}</span>
          </li>
        </ul>
      ) : (
        <p>this is todo Detail Page, to Id is {id}</p>
      )}
      <Button onClick={() => router.back()} style={{ margin: "2em" }}>
        back
      </Button>
    </Layout>
  );
}

export default TodoDetail;
