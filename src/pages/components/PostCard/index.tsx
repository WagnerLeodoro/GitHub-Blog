import { IPosts } from "../../../contexts/BlogContext";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { PostCardContainer } from "./styles";

interface PostProps {
  post: IPosts;
}

export function PostCard({ post }: PostProps) {
  return (
    <PostCardContainer to={`/post/${post.number}`} title={`${post.title}`}>
      <div>
        <strong>{post.title}</strong>
        <span>
          {formatDistanceToNow(new Date(post.created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </div>
      <p>{post.body}</p>
    </PostCardContainer>
  );
}
