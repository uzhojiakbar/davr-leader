import styled from "styled-components";

const LoginPage = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .card-box {
    width: 35%;
    min-width: 300px;
    margin: 0 auto;
  }
  .card {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    > .inputs {
      display: flex;
      flex-direction: column;
      gap: 20px;
      > .input {
        padding: 10px 5px;
        font-size: 16px;
        min-width: 200px;
      }
    }
  }
`;

export { LoginPage };
