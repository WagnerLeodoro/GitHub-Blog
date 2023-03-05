import styled from "styled-components";

export const BlogContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 8rem;
`;

export const Posts = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  margin-top: 3rem;
`;
