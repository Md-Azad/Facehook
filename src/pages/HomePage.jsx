import { useReducer, useEffect } from "react";

import { postReducer, initialState } from "../reducers/PostReducer";

import useAxios from "../hooks/useAxios";
import PostList from "../components/posts/PostList";
import { actions } from "../action";

const HomePage = () => {
  const [state, dispatch] = useReducer(postReducer, initialState);
  const { api } = useAxios();

  useEffect(() => {
    dispatch({ type: actions.post.DATA_FETCHING });

    const fetchPost = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts`
        );

        if (response.status === 200) {
          dispatch({ type: actions.post.DATA_FETCHED, data: response.data });
        }
      } catch (error) {
        console.error(error);
        dispatch({ type: actions.post.DATA_FETCH_ERROR, error: error.message });
      }
    };

    fetchPost();
  }, [api]);

  if (state?.loading) {
    return <div>we are working...</div>;
  }
  if (state?.error) {
    return <div>Error in fetching posts..{state?.error?.message}</div>;
  }

  return (
    <div>
      <PostList posts={state?.posts} />
    </div>
  );
};

export default HomePage;
