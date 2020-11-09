import { Button, Divider, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import Link from "next/link";
import React, { ReactText, useState } from "react";
import api from "../service/api";
import { TodoValues } from "./Todo-form";

export type TodoValuesWithKeyProp = TodoValues & { key: ReactText };

export interface TodoListProps {
  todos: TodoValuesWithKeyProp[];
  remove: (keys: ReactText[]) => void;
}

export function TodoList(props: TodoListProps): JSX.Element {
  const [selected, setSelected] = useState<ReactText[]>([]);
  const columns: ColumnsType<TodoValuesWithKeyProp> = [
    {
      title: "Description",
      dataIndex: "description",
      render: (text, record) => <Link href={`/todo/${record.key}`}>{text}</Link>,
    },
    { title: "Category", dataIndex: "category" },
    {
      title: "Operate",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <Button
          onClick={() => {
            setSelected(selected.filter(key => key !== record.key));
            props.remove([record.key]);
            api.removeTodos([record.key]);
          }}
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <>
      <Button
        onClick={() => {
          setSelected([]);
          props.remove(selected);
          api.removeTodos(selected);
        }}
      >
        Delete Selected
      </Button>

      <Divider />

      <Table
        rowSelection={{
          type: "checkbox",
          onChange: (selectedRowKeys, _) => {
            setSelected(selectedRowKeys);
          },
        }}
        columns={columns}
        dataSource={props.todos}
        onRow={(_, index) => ({
          style: { backgroundColor: index !== void 0 && index % 2 === 0 ? "transparent" : "#e6f7ff" },
        })}
      />
    </>
  );
}

export default TodoList;
