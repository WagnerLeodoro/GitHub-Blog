import { NavLink } from "react-router-dom";

import {
  CardContent,
  ExternalLink,
  InfoContent,
  MoreInfo,
  SummaryProfileCard,
  SummaryContainer,
  TitleContent,
} from "./styles";

import Avatar from "../../../assets/avatar.png";

import {
  FaBuilding,
  FaExternalLinkAlt,
  FaGithub,
  FaUserFriends,
} from "react-icons/fa";

export function ProfileInfo() {
  return (
    <SummaryContainer>
      <SummaryProfileCard>
        <img src={Avatar} />
        <CardContent>
          <TitleContent>
            <h1>Cameron Williamson</h1>
            <NavLink to="https://github.com/WagnerLeodoro">
              <ExternalLink>
                GITHUB
                <FaExternalLinkAlt />
              </ExternalLink>
            </NavLink>
          </TitleContent>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <MoreInfo>
            <InfoContent>
              <FaGithub size={18} />
              <p>CameronWil</p>
            </InfoContent>
            <InfoContent>
              <FaBuilding size={18} />
              <p>RocketSeat</p>
            </InfoContent>
            <InfoContent>
              <FaUserFriends size={18} />
              <p>32 Seguidores</p>
            </InfoContent>
          </MoreInfo>
        </CardContent>
      </SummaryProfileCard>
    </SummaryContainer>
  );
}
