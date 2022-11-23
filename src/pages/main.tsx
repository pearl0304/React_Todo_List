import React from "react";

// COMPONENT
import { TodoList } from "../Components/todoList";

import { MainWrapper } from "../styles/main.styled";
import { TodoForm } from "../Components/todoForm";

export const Main = ({ userInfo }: any) => {
  return (
    <MainWrapper>
      <div className={"main-box"}>
        <div className={"doc-title"}>
          <div>
            <h1>TODO LIST</h1>
          </div>
          <div>
            <span>Hello <strong>{userInfo.displayName}</strong></span>
          </div>
        </div>
        <div className={'todo-box'}>
          <TodoList userInfo={userInfo} />
          <TodoForm userInfo={userInfo} />
        </div>
      </div>
    </MainWrapper>
  );
};
