import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import { PostContentContainer } from "./styles";

interface PostContentProps {
  content: string;
}

export default function PostContent({ content }: PostContentProps) {
  return (
    <PostContentContainer>
      <ReactMarkdown children={content} />
    </PostContentContainer>
  );
}
