import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors["base-profile"]};
  width: 100%;
  height: 296px;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;

  img:first-child {
    padding-top: 70px;
  }
  img:last-child {
    padding-top: 30px;
  }
`;
