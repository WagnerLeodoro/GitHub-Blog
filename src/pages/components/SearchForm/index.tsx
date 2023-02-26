import { FormWrapper, PubicationsInfo, SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <FormWrapper>
      <PubicationsInfo>
        <p>Publicações</p>
        <span>6 publicações</span>
      </PubicationsInfo>
      <SearchFormContainer action="">
        <input type="text" placeholder="Buscar publicações" />
      </SearchFormContainer>
    </FormWrapper>
  );
}
