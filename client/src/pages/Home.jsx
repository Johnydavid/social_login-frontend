import Card from "../components/Card";
import { posts } from "../data";

const Home = () => {
  return (
    <div>
      <div className="home">
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
