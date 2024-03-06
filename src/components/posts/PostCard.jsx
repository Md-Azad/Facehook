import { useAvatar } from "../../hooks/useAvatar";
import PostAction from "./PostAction";
import PostBody from "./PostBody";
import PostComment from "./PostComment";
import PostHeader from "./PostHeader";

const PostCard = ({ post }) => {
    const {avatarURL} = useAvatar(post);
    console.log(avatarURL)
  return (
    <article className="card mt-6 lg:mt-8">
      <PostHeader post={post} />
      <PostBody poster = {post?.image} content = {post?.content} />
      <PostAction />
      <PostComment />
    </article>
  );
};

export default PostCard;
