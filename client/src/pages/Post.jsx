import { useLocation } from "react-router";
import { posts } from "../data";
// import LogoutBar from "../components/LogoutBar";

const Post = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const post = posts.find((p) => p.id.toString() === path);

  console.log(location);
  return (
    <div>
   {/* <LogoutBar /> */}
      <div className="post">
        <img src={post.img} alt="" className="postImg" />
        <h1 className="postTitle">{post.title}</h1>
        <p className="postDesc">{post.desc}</p>
        <p className="postLongDesc">{post.longDesc}</p>
      </div>
    </div>
  );
};

export default Post;
