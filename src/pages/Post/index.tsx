import { IPosts } from "../../contexts/BlogContext";
import { PostInfo } from "../components/SummaryInfo/PostInfo";
import { PostContainer } from "./styles";
import { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import PostContent from "../components/PostContent";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export function Post() {
  const [postData, setPostData] = useState<IPosts>({} as IPosts);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const loadPostData = useCallback(async () => {
    try {
      setLoading(true);

      const response = await api.get(
        `repos/${username}/${repoName}/issues/${id}}`
      );
      setPostData(response.data);
    } finally {
      setLoading(false);
    }
  }, [postData]);

  useEffect(() => {
    loadPostData();
  }, []);

  return (
    <PostContainer>
      <PostInfo postData={postData} isLoading={loading} />
      {!loading && <PostContent content={postData.body} />}
    </PostContainer>
  );
}
