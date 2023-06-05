import { useEffect, useState } from "react";
import { PostType } from "./types";

const Instagram = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const getPosts = () => {
    fetch("http://localhost:3000/instagram")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);
};

return (
  <div className="container">
    <h1>Instagram</h1>
    <hr />
  </div>
);

export default Instagram;
