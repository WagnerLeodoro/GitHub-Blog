import { useContext } from "react";
import { BlogContext } from "../../../contexts/BlogContext";
import { FormWrapper, PubicationsInfo, SearchFormContainer } from "./styles";

export function SearchForm() {
  const { posts } = useContext(BlogContext);
  return (
    <FormWrapper>
      <PubicationsInfo>
        <p>Publicações</p>
        <span>{posts.length} publicações</span>
      </PubicationsInfo>
      <SearchFormContainer action="">
        <input type="text" placeholder="Buscar publicações" />
      </SearchFormContainer>
    </FormWrapper>
  );
}
