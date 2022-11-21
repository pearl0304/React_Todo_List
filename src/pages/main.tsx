import React from "react";

// CSS
import { MainWrapper } from "../styles/main.styled";
import { UserForm } from "../styles/userForm.styled";

// INTERFACE
import { UserInterface } from "../interfaces/user.interface";
import {
  TodoInterface,
  TodoInputInterface,
} from "../interfaces/todo.interface";
import { Input } from "@mui/material";
import {TodoForm} from "../Components/todoform";

export const Main = ({ userInfo }: any) => {
  return (
    <MainWrapper>
      <div className={'main-box'}>
        <div className={"doc-title"}>
          <div>
            <span>TODO LIST</span>
          </div>
          <div>
            <span>{userInfo.displayName}</span>
          </div>
        </div>
        <TodoForm />
      </div>
    </MainWrapper>
  );
};
