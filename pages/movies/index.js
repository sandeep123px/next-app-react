import { useRouter } from "next/router";
import { Flex } from "reflexbox";

const Movies = ({ movies, page }) => {
  const router = useRouter();
  return (
    <>
      <ul>
        {movies.map((x, i) => {
          return (
            <li>
              <h3>{x.movie_title}</h3>
            </li>
          );
        })}
      </ul>
      <Flex mt={40} pl={20} justifyContent="space-between" maxWidth={300}>
        <button
          onClick={() => router.push(`/movies?page=${page - 1}`)}
          disabled={page <= 1}
        >
          previous
        </button>
        <button onClick={() => router.push(`/movies?page=${page + 1}`)}>
          Next
        </button>
      </Flex>
    </>
  );
};

export async function getServerSideProps({ query: { page = 1 } }) {
  const start = +page === 1 ? 0 : (+page - 1) * 3;
  const moviesCount = await fetch(`https://stapi-next-app.herokuapp.com/movies/count`);
  const numberOfMovies = await moviesCount.json();
  const res = await fetch(
    `https://stapi-next-app.herokuapp.com/movies?_limit=3&_start=${start}`
  );
  const data = await res.json();
  return {
    props: {
      movies: data,
      page: parseInt(page),
    },
  };
}

export default Movies;
