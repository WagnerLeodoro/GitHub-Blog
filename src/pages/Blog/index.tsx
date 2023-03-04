import { useContext } from "react";
import { BlogContext } from "../../contexts/BlogContext";
import { PostCard } from "../components/PostCard";
import { SearchForm } from "../components/SearchForm";
import { ProfileInfo } from "../components/SummaryInfo/ProfileInfo";
import { BlogContainer, Posts } from "./styles";

export function Blog() {
  const { posts } = useContext(BlogContext);

  return (
    <BlogContainer>
      <ProfileInfo />
      <SearchForm />
      <Posts>
        {posts.map((post) => {
          return <PostCard key={post.number} post={post} />;
        })}
      </Posts>
    </BlogContainer>
  );
}
