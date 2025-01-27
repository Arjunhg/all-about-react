import GameInfo from "./components/GameInfo";
import MoviesInfo from "./components/MoviesInfo";
import RenderList from "./components/RenderList";
import { games, movies } from './data/data'

const List = () => {

    return(
        /* Without RenderList
        <div className="flex">
            <div className="w-1/2 border border-black p-4">
                {
                    games.map(game => (
                        <GameInfo key={game.gameName} games={game}/>
                    ))
                }
            </div>

            <div className="w-1/2 border border-black p-4">
                {
                    movies.map(movie => (
                        <MoviesInfo key={movie.movieTitle} movies={movie}/>
                    ))
                }
            </div>

        </div>
        */

        // With RenderList
        <div className="flex gap-1">
            <div className="w-1/3 border border-black p-4">
                <RenderList data={games} resourceItem="games" dataToRender={GameInfo}/>
            </div>
            <div className="flex-1 border border-red-800 p-4">
                <RenderList data={movies} resourceItem="movies" dataToRender={MoviesInfo}/>
            </div>
        </div>
    )
}

export default List;