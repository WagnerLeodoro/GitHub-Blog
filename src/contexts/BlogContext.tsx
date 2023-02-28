import { createContext, ReactNode, useEffect, useState } from "react";
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

interface BlogContextType {
  userInformations: userProfileInfo;
  fetchData: (query?: string) => Promise<void>;
}

interface BlogProviderProps {
  children: ReactNode;
}

export const BlogContext = createContext({} as BlogContextType);

export function BlogProvider({ children }: BlogProviderProps) {
  const [userInformations, setUserInformations] = useState<userProfileInfo>(
    {} as userProfileInfo
  );

  async function fetchData(query?: string) {
    const response = await api.get("users/WagnerLeodoro", {
      params: {
        q: query,
      },
    });
    setUserInformations(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BlogContext.Provider value={{ userInformations, fetchData }}>
      {children}
    </BlogContext.Provider>
  );
}
