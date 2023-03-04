import { NavLink } from "react-router-dom";
import { IPosts } from "../../../contexts/BlogContext";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

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
import { Spinner } from "../../../components/Spinner";

interface PostHeaderProps {
  postData: IPosts;
  isLoading: boolean;
}

export function PostInfo({ postData, isLoading }: PostHeaderProps) {
  return (
    <SummaryContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <SummaryPostCard>
          <CardContent>
            <Links>
              <NavLink to="/" title="Blog">
                <ExternalLink>
                  <FaChevronLeft />
                  VOLTAR
                </ExternalLink>
              </NavLink>
              <NavLink to={postData.html_url}>
                <ExternalLink>
                  VER NO GITHUB
                  <FaExternalLinkAlt />
                </ExternalLink>
              </NavLink>
            </Links>
            <TitleContent>
              <h1>{postData.title}</h1>
            </TitleContent>
            <MoreInfo>
              <InfoContent>
                <FaGithub size={18} />
                <p>{postData.user.login}</p>
              </InfoContent>
              <InfoContent>
                <FaCalendar size={18} />
                <p>
                  {formatDistanceToNow(new Date(postData.created_at), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </p>
              </InfoContent>
              <InfoContent>
                <FaComment size={18} />
                <p>{postData.comments} Comentários</p>
              </InfoContent>
            </MoreInfo>
          </CardContent>
        </SummaryPostCard>
      )}
    </SummaryContainer>
  );
}
