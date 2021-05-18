import { useEffect } from "react";
import { Box } from "reflexbox";
import { useRouter } from "next/router";
const PayedArticles = ({ articles }) => {
  const token = localStorage.getItem("jwt");
  const router = useRouter();
  useEffect(() => {
    if (token === undefined || token === null || token === "") {
      router.push("/login");
    }
  });
  login;
  return (
    <>
      {token && (
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
      )}
    </>
  );
};
export const getServerSideProps = async () => {
  const res = await fetch(
    `https://stapi-next-app.herokuapp.com/payed-articles`
  );
  const data = await res.json();
  return {
    props: {
      articles: data,
    },
  };
};
export default PayedArticles;
