import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 4rem;
`;

export const PubicationsInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 0.75rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${({ theme }) => theme.colors["base-input"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    padding: 1rem;

    &&::placeholder {
      color: ${({ theme }) => theme.colors["base-label"]};
    }
  }
`;
