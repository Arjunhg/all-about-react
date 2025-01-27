
type MovieInfo = {
    movies: {
        movieTitle: string;
        moviePrice: string;
        movieDescription: string;
        movieRating: number;
    }
}

const MoviesInfo = ({ movies }: MovieInfo) => {

    const { movieTitle, movieRating, movieDescription, moviePrice } = movies;

    return (
        <div>
            <h1> Movie Name: {movieTitle}</h1>
            <p> Movie Rating: {movieRating}</p>
            <p> Movie Genre: {movieDescription}</p>
            <p> Movie Price: {moviePrice}</p>
        </div>
    )

}

export default MoviesInfo;