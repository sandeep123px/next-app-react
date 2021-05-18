import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Box } from "reflexbox";

const Posts = ({ data, numberOfPosts }) => {
  const [posts, setPosts] = useState(data);
  const [hasMore, setHasMore] = useState(true);
  const getMorePosts = async () => {
    const response = await fetch(
      `https://stapi-next-app.herokuapp.com/posts?_start=${posts.length}&_limit=10`
    );
    const res = await response.json();
    setPosts((posts) => [...posts, ...res]);
  };
  useEffect(() => {
    setHasMore(numberOfPosts > posts.length ? true : false);
  }, [posts]);
  return (
    <>
      <Box as="h2" style={{marginLeft:"100px"}}>
        Posts
      </Box>
      <InfiniteScroll
        dataLength={posts.length}
        next={getMorePosts}
        hasMore={hasMore}
        loader={<h4>Loading....</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>yay! you have seen it all</b>
          </p>
        }
      >
        {posts.map((x, i) => {
          return (
            <div
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <div
                style={{
                  height: "50px",
                  width: "700px",
                  textAlign: "center",
                  fontWeight: "bold",
                  background: "#D3D3D3",
                  borderRadius: "3px",
                }}
              >
                {x.Title}
              </div>
            </div>
          );
        })}
      </InfiniteScroll>
    </>
  );
};
export const getServerSideProps = async () => {
  const posts = await fetch(`https://stapi-next-app.herokuapp.com/posts?_limit=10`);
  const responsePosts = await posts.json();
  const numberOfPosts = await fetch(`https://stapi-next-app.herokuapp.com/posts/count`);
  const responseNumberOfPosts = await numberOfPosts.json();
  return {
    props: {
      data: responsePosts,
      numberOfPosts: +responseNumberOfPosts,
    },
  };
};
export default Posts;
