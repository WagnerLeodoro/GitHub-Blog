import {
  FaCalendar,
  FaChevronLeft,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import {
  CardContent,
  ExternalLink,
  InfoContent,
  Links,
  MoreInfo,
  SummaryPostCard,
  SummaryContainer,
  TitleContent,
} from "./styles";

export function PostInfo() {
  return (
    <SummaryContainer>
      <SummaryPostCard>
        <CardContent>
          <Links>
            <ExternalLink>
              <FaChevronLeft />
              VOLTAR
            </ExternalLink>
            <ExternalLink>
              VER NO GITHUB
              <FaExternalLinkAlt />
            </ExternalLink>
          </Links>
          <TitleContent>
            <h1>JavaScript data types and data structures</h1>
          </TitleContent>
          <MoreInfo>
            <InfoContent>
              <FaGithub size={18} />
              <p>cameronwil</p>
            </InfoContent>
            <InfoContent>
              <FaCalendar size={18} />
              <p>Há 1 dia</p>
            </InfoContent>
            <InfoContent>
              <FaComment size={18} />
              <p>5 Comentários</p>
            </InfoContent>
          </MoreInfo>
        </CardContent>
      </SummaryPostCard>
    </SummaryContainer>
  );
}
