import { useEffect } from "react";
import { Box } from "reflexbox";
import { useRouter } from "next/router";
const PayedArticles = ({ articles }) => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token !== undefined && token !== "" && token !== null) {
      router.push("/Articles");
    } else {
      router.push("/login");
    }
  });
  return (
    <>
      <Box variant="container">
        <Box as="h2" my={40}>
          {articles.map((x, i) => {
            return (
              <>
                <h3>{x.payed_article_1}</h3>
                <p dangerouslySetInnerHTML={{ __html: x.Content }}></p>
              </>
            );
          })}
        </Box>
        <button
          onClick={() => {
            localStorage.removeItem("jwt");
            router.push("/login");
          }}
        >
          Logout
        </button>
      </Box>
    </>
  );
};
export const getServerSideProps = async () => {
  const res = await fetch(`http://localhost:1337/payed-articles`);
  const data = await res.json();
  return {
    props: {
      articles: data,
    },
  };
};
export default PayedArticles;