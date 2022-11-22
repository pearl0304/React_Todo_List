import React, { ChangeEvent, useState } from "react";
import moment from "moment";
// COMPONENT
import { TodoList } from "../Components/todoList";

// FIREBASE
import { fireStoreJob } from "../initFirebase";
import { collection, addDoc } from "firebase/firestore";

// INTERFACE
import { TodoInputInterface } from "../interfaces/todo.interface";

// CSS
import { Button, Input } from "@mui/material";
import { MainWrapper } from "../styles/main.styled";

export const Main = ({ userInfo }: any) => {
  const firestore_path = "tasks";
  const [inputs, setInputs] = useState<TodoInputInterface>({
    task: "",
    date: "",
  });

  const { task, date } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInputs({ ...inputs, [name]: value });
  };

  const onClick = async (e: any) => {
    if (task === "") {
      alert("Please write task");
      return false;
    }

    await addDoc(collection(fireStoreJob, firestore_path), {
      uid: userInfo.uid,
      task: task,
      status: "READY",
      date: date,
      date_created: moment().utc().format(),
    });
    setInputs({ task: "", date: "" });
  };

  return (
    <MainWrapper>
      <div className={"main-box"}>
        <div className={"doc-title"}>
          <div>
            <span>TODO LIST</span>
          </div>
          <div>
            <span>{userInfo.displayName}</span>
          </div>
        </div>
        <TodoList userInfo={userInfo} />
        <div className={"todo-submit"}>
          <div>
            <Input
              onChange={onChange}
              value={task}
              name={"task"}
              placeholder={"What is your task"}
              type={"text"}
            />
          </div>
          <div>
            <Input
              onChange={onChange}
              value={date}
              name={"date"}
              placeholder={"Dead Line"}
              type={"date"}
            />
          </div>
          <div>
            <Button onClick={onClick} type={"button"} variant={"contained"}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};
