import { Header } from "../../components/Header";
import PostCard from "../components/PostCard";
import { SearchForm } from "../components/SearchForm";
import { ProfileInfo } from "../components/SummaryInfo/ProfileInfo";
import { BlogContainer } from "./styles";

export function Blog() {
  return (
    <BlogContainer>
      <ProfileInfo />
      <SearchForm />
      <PostCard />
    </BlogContainer>
  );
}
