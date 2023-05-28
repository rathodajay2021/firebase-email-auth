import { responsive } from "Styles/Constants";
import styled from "styled-components";

export const SignUpWrapper = styled.div`
  height: 100vh;
  border: 1px solid red;

  .form-card {
    box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.15);
    width: 30%;
    height: fit-content;
    padding: 20px;
    text-align: center;
    gap: 15px;

    ${responsive.TABLET`
        width: 50%;
    `}

    ${responsive.PHABLET`
        width: 70%;
    `}

    ${responsive.MOBILE`
        width: 80%;
    `}

    .title {
      text-align: center;
      font-size: 22px;
      font-weight: 700;
      text-transform: capitalize;
    }
  }
`;
