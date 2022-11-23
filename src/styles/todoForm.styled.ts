import { styled } from "@mui/material";

export const TodoFormWrap = styled("div")`
  width: 30%;
  height: 280px;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  
  .task-title {
    width: 100%;
    height: 57px;
    margin-bottom: 30px;
    line-height: 57px;
    text-align: center;
    border-radius: 10px;
    background-color: #eee;
  }

  .task-input-box {
  }

  .task-input-box div {
    width: 100%;
    margin-bottom: 10px;
  }

  .task-input-box div input {
    text-align: center;
    height: 30px;
  }

  .task-input-box div:nth-child(3) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .task-input-box div:nth-child(3) button {
    width: 100%;
  }
`;
