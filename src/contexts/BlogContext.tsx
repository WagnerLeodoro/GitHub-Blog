import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useCallback,
} from "react";
import { api } from "../lib/axios";

interface userProfileInfo {
  id: number;
  login: string;
  name: string;
  bio: string;
  company: string;
  followers: number;
  avatar_url: string;
  html_url: string;
}

export interface IPosts {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

interface BlogContextType {
  userInformations: userProfileInfo;
  posts: IPosts[];
  loadUserData: () => Promise<void>;
  loadPosts: (query?: string) => Promise<void>;
}

interface BlogProviderProps {
  children: ReactNode;
}

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export const BlogContext = createContext({} as BlogContextType);

export function BlogProvider({ children }: BlogProviderProps) {
  const [userInformations, setUserInformations] = useState<userProfileInfo>(
    {} as userProfileInfo
  );
  const [posts, setPosts] = useState<IPosts[]>([]);

  async function loadUserData() {
    const response = await api.get(`users/${username}`);
    console.log(response.data);
    setUserInformations(response.data);
  }

  const loadPosts = useCallback(
    async (query: string = "") => {
      const response = await api.get(
        `search/issues?q=${query}%20repo:${username}/${repoName}`
      );

      console.log(response.data);
      setPosts(response.data.items);
    },
    [posts]
  );

  useEffect(() => {
    loadUserData();
    loadPosts();
  }, []);

  return (
    <BlogContext.Provider
      value={{ userInformations, loadUserData, posts, loadPosts }}
    >
      {children}
    </BlogContext.Provider>
  );
}
