import styled from "styled-components";

export const MainWrapper = styled.div`
  .main-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    text-align: center;
    position: relative;
  }
  
  .doc-title {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    margin-bottom: 50px;
  }
  
  .doc-title > div {
    padding: 10px;
  }
  
  .todo-submit {
    position: fixed;
    bottom: 0px;
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-around;
  }



`;
