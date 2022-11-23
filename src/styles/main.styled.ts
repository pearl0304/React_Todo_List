import { styled } from "@mui/material";

export const MainWrapper = styled("div")`
  .main-box {
    width: 80%;
    margin-left: 50%;
    transform: translateX(-50%);
  }

  .doc-title {
    display: flex;
    background-color: #eee;
    flex-direction: column;
    margin: 50px 0px;
  }

  .doc-title > div {
    padding: 10px;
  }

  .todo-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
