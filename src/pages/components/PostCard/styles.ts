import styled from "styled-components";

export const PostCardContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;

  margin-top: 3rem;
`;

export const PostCardContent = styled.div`
  background: ${({ theme }) => theme.colors["base-post"]};
  border-radius: 10px;
  padding: 2rem;
  height: 260px;
  overflow: hidden;
  text-overflow: ellipsis;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 1rem;
  }

  h1 {
    margin-top: 1rem;
    width: 280px;
    font-size: ${({ theme }) => theme.fontSizes["xl"]};
    color: ${({ theme }) => theme.colors["base-title"]};
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes["sm"]};
    color: ${({ theme }) => theme.colors["base-span"]};
  }
`;

export const PostContent = styled.div`
  width: 100%;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  p {
    color: ${({ theme }) => theme.colors["base-text"]};
  }
`;
