const { default: styled } = require("styled-components");

export const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 10px;

  .logout-btn {
    min-width: 80px;
  }
`;
