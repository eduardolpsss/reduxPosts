import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import './styles.css';
import { Post } from "./components/Post";
import { AddPost } from "./components/AddPost";
import { addPost, deletePost } from "./store/actionCreators";
import { Dispatch } from "redux";

const App: React.FC = () => {
  const posts: readonly IPost[] = useSelector(
    (state: PostState) => state.posts,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const savePost = React.useCallback(
    (post: IPost) => dispatch(addPost(post)),
    [dispatch]
  );

  const removePost = React.useCallback(
    (post: IPost) => dispatch(deletePost(post)),
    [dispatch]
  );

  return (
    <main>
      <h1>Posts</h1>
      <AddPost savePost={savePost} />
      {posts.map((post: IPost) => (
        <Post key={post.id} post={post} removePost={removePost} />
      ))}
    </main>
  );
};

export default App;
