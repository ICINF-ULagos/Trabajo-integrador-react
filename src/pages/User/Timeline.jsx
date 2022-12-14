import { useState } from "react";
import { useEffect } from "react";
import { Spinner, Center } from "@chakra-ui/react";

import usePost from "../../hooks/usePosts";
import Article from "../../components/Article";

const Timeline = () => {
  const { getAllPosts, isLoading } = usePost();
  const [posts, setPosts] = useState([]);

  const handlePost = async () => {
    const data = await getAllPosts();
    setPosts(data);
  };

  useEffect(() => {
    handlePost();
  }, []);

  return (
    <section>
      {isLoading ? (
        <Center>
          <Spinner mt="5rem" color="#F64315" size="xl" thickness="5px" />
        </Center>
      ) : (
        posts.map((item) => (
          <Article
            key={item.id}
            title={item.title}
            body={item.body}
            userId={item.user_id}
            createAt={item.created_at}
            updateAt={item.updated_at}
          />
        ))
      )}
    </section>
  );
};
export default Timeline;
