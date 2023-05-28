import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  .card {
    width: 30%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-shadow: 5px 5px 16px rgba(0, 0, 0, 0.5);

    @media (max-width: 960px) {
      width: 40%;
    }

    @media (max-width: 600px) {
      width: 60%;
    }

    @media (max-width: 450px) {
      width: 70%;
    }

    .title {
      font-size: 22px;
      font-weight: 700;
      text-align: center;
    }

    .form-wrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .submit-btn {
      width: 100%;
    }
  }

  .sign-up-msg {
    margin: 10px 0 0 0;
  }

  .forgot-password {
    text-align: end;
  }
`;
