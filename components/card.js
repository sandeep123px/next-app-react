import Link from "next/link";

const Card = ({ movie }) => {
  return (
    <div className={`card`}>
      <div className="poster">
        <img
          src={movie.poster_path.name}
          style={{ height: "300px", width: "400px" }}
          alt=""
        />
      </div>
      <div className="body">
        <h3>{movie.movie_title}</h3>
        <p dangerouslySetInnerHTML={{ __html: movie.movie_overview }}></p>
        <br />
        <Link href="movies/[id]" as={`/movies/${movie.id}`}>
          More about this movie
        </Link>
      </div>
    </div>
  );
};

//  const CardStyled = styled.div`
//  `
export default Card;
