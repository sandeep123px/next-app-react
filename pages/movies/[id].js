import { Box } from "reflexbox";
import { NextSeo } from "next-seo";
const Movie = ({ movie }) => {
  const SEO = {
    title: `Next Movies |${movie.movie_title}`,
    description: movie.movie_overview,
    openGraph: {
      title: `Next Movies |${movie.movie_title}`,
      description: movie.movie_overview,
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <Box variant="container">
        <Box as="h2" my={40}>
          {movie.movie_title}
        </Box>
        <Box maxWidth={600}>
          <p dangerouslySetInnerHTML={{ __html: movie.movie_overview }}></p>
        </Box>
      </Box>
    </>
  );
};
export async function getServerSideProps(context) {
  const { id } = context.query;
  const response = await fetch(`http://localhost:1337/movies/${id}`);
  const data = await response.json();
  return {
    props: { movie: data },
  };
}
export default Movie;
