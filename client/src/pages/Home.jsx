import Card from "../components/Card";
import { posts } from "../data";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
  
    <div>
        <Navbar/>
      <div className="home">
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
