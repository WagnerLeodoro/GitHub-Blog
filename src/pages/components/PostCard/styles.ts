import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const PostCardContainer = styled(NavLink)`
  height: 16.25rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors["base-post"]};
  border: 2px solid ${({ theme }) => theme.colors["base-post"]};
  padding: 2rem;
  transition: 0.4s;

  &:hover {
    border-color: ${({ theme }) => theme.colors["base-label"]};
  }

  div {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;

    strong {
      flex: 1;
      font-size: ${({ theme }) => theme.fontSizes["md"]};
      color: ${({ theme }) => theme.colors["base-title"]};
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    span {
      width: max-content;
      font-size: ${({ theme }) => theme.fontSizes["sm"]};
      color: ${({ theme }) => theme.colors["base-span"]};
    }
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`;
