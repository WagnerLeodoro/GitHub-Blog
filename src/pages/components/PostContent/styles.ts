import styled from "styled-components";

export const PostContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem;
  gap: 1rem;
  margin-bottom: 8rem;

  > div {
    padding: 0 !important;
    margin: 0 !important;
  }

  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.colors.blue};
  }

  img {
    width: 100%;
  }

  pre {
    background: ${({ theme }) => theme.colors["base-post"]};
    padding: 1rem;
  }

  code {
    font-family: "Fira Code", monospace !important;
    line-height: 160% !important;
  }
`;
