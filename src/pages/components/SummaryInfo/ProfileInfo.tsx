import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BlogContext } from "../../../contexts/BlogContext";

import {
  CardContent,
  ExternalLink,
  InfoContent,
  MoreInfo,
  SummaryProfileCard,
  SummaryContainer,
  TitleContent,
} from "./styles";

import {
  FaBuilding,
  FaExternalLinkAlt,
  FaGithub,
  FaUserFriends,
} from "react-icons/fa";

export function ProfileInfo() {
  const { userInformations } = useContext(BlogContext);

  return (
    <SummaryContainer>
      <SummaryProfileCard>
        <img src={userInformations.avatar_url} />
        <CardContent>
          <TitleContent>
            <h1>{userInformations.name}</h1>
            <NavLink to={userInformations.html_url}>
              <ExternalLink>
                GITHUB
                <FaExternalLinkAlt />
              </ExternalLink>
            </NavLink>
          </TitleContent>
          <p>{userInformations.bio}</p>
          <MoreInfo>
            <InfoContent>
              <FaGithub size={18} />
              <p>{userInformations.login}</p>
            </InfoContent>
            <InfoContent>
              <FaBuilding size={18} />
              <p>{userInformations.company}</p>
            </InfoContent>
            <InfoContent>
              <FaUserFriends size={18} />
              <p>{userInformations.followers} Seguidores</p>
            </InfoContent>
          </MoreInfo>
        </CardContent>
      </SummaryProfileCard>
    </SummaryContainer>
  );
}
