import { IPosts } from "../../contexts/BlogContext";
import { PostInfo } from "../components/SummaryInfo/PostInfo";
import { PostContainer, PostContent } from "./styles";
import { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";

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
      console.log(response.data);
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
      <PostContent>
        <p>{postData.body}</p>
      </PostContent>
    </PostContainer>
  );
}
