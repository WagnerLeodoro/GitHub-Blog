import { NavLink } from "react-router-dom";
import { IPosts } from "../../../contexts/BlogContext";
import {
  PostCardContainer,
  PostCardContent,
  PostCardHeader,
  PostContent,
} from "./styles";

interface PostProps {
  post: IPosts;
}

export function PostCard({ post }: PostProps) {
  return (
    <PostCardContainer>
      <NavLink to={`/post/${post.number}`} title={`${post.title}`}>
        <PostCardContent>
          <PostCardHeader>
            <h1>{post.title}</h1>
            <span>{post.created_at}</span>
          </PostCardHeader>
          <PostContent>
            <p>{post.body}</p>
          </PostContent>
        </PostCardContent>
      </NavLink>
    </PostCardContainer>
  );
}
