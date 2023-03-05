import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BlogContext } from "../../../contexts/BlogContext";

import { FormWrapper, PubicationsInfo, SearchFormContainer } from "./styles";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { posts, loadPosts } = useContext(BlogContext);

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchPosts(data: SearchFormInputs) {
    await loadPosts(data.query);
  }
  return (
    <FormWrapper>
      <PubicationsInfo>
        <p>Publicações</p>
        <span>{posts.length} publicações</span>
      </PubicationsInfo>
      <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
        <input
          type="text"
          placeholder="Buscar publicações"
          {...register("query")}
        />
      </SearchFormContainer>
    </FormWrapper>
  );
}
