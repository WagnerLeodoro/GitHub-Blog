import styled from "styled-components";

export const PostCardContainer = styled.div`
  width: 100%;
  height: 260px;
  a {
    text-decoration: none;
  }
`;

export const PostCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.25rem;
`;

export const PostCardContent = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors["base-post"]};
  border-radius: 10px;
  padding: 2rem;
  height: 260px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 1rem;
  }

  h1 {
    margin-top: 1rem;
    font-size: ${({ theme }) => theme.fontSizes["xl"]};
    color: ${({ theme }) => theme.colors["base-title"]};
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes["sm"]};
    color: ${({ theme }) => theme.colors["base-span"]};
  }
`;

export const PostContent = styled.div`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  p {
    width: 283px;
    color: ${({ theme }) => theme.colors["base-text"]};
  }
`;
