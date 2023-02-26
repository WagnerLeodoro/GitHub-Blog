import styled from "styled-components";

export const SummaryContainer = styled.section`
  display: flex;
  justify-content: center;
  max-width: 1120px;
  margin: 0 auto;
  margin-top: -10rem;
`;

export const SummaryProfileCard = styled.div`
  display: flex;
  width: 864px;
  background: ${({ theme }) => theme.colors["base-profile"]};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  padding: 2rem;

  img {
    width: 148px;
  }
`;

export const SummaryPostCard = styled.div`
  width: 864px;
  background: ${({ theme }) => theme.colors["base-profile"]};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  padding: 2rem;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  gap: 0.5rem;

  p {
    color: ${({ theme }) => theme.colors["base-text"]};
    font-size: ${({ theme }) => theme.fontSizes["md"]};
  }

  a {
    text-decoration: none;
  }
`;

export const TitleContent = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    color: ${({ theme }) => theme.colors["base-title"]};
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  }
`;

export const Links = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 1.25rem;

  a {
    text-decoration: none;
  }
`;

export const ExternalLink = styled.span`
  display: flex;
  line-height: 0;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors["blue"]};
  font-size: ${({ theme }) => theme.fontSizes["xs"]};
  cursor: pointer;
`;

export const MoreInfo = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1.5rem;
  gap: 1.5rem;
`;

export const InfoContent = styled.div`
  display: flex;
  gap: 0.5rem;
`;
