import { NavLink } from "react-router-dom";
import { PostCardContainer, PostCardContent, PostContent } from "./styles";

export default function PostCard() {
  return (
    <PostCardContainer>
      <NavLink to="/post" title="postTitle">
        <PostCardContent>
          <header>
            <h1>JavaScript data types and data structures</h1>
            <span>Há 1 dia</span>
          </header>
          <PostContent>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn.
            </p>
          </PostContent>
        </PostCardContent>
      </NavLink>
      <NavLink to="/post" title="postTitle">
        <PostCardContent>
          <header>
            <h1>JavaScript data types and data structures</h1>
            <span>Há 1 dia</span>
          </header>
          <PostContent>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn.
            </p>
          </PostContent>
        </PostCardContent>
      </NavLink>
      <NavLink to="/post" title="postTitle">
        <PostCardContent>
          <header>
            <h1>JavaScript data types and data structures</h1>
            <span>Há 1 dia</span>
          </header>
          <PostContent>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn.
            </p>
          </PostContent>
        </PostCardContent>
      </NavLink>
      <NavLink to="/post" title="postTitle">
        <PostCardContent>
          <header>
            <h1>JavaScript data types and data structures</h1>
            <span>Há 1 dia</span>
          </header>
          <PostContent>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn.
            </p>
          </PostContent>
        </PostCardContent>
      </NavLink>
    </PostCardContainer>
  );
}
