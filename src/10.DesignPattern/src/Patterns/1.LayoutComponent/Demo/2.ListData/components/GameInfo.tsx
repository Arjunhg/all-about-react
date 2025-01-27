
type GameInfo = {
    games: {
        gameName: string;
        gameRating: number;
        gameGenre: string;
        gameLanguages: string[];
    }
}

const GameInfo = ( {games}: GameInfo ) => {

    const { gameName, gameRating, gameGenre, gameLanguages } = games;

    return(
        <div>
            <h1> Game Name: {gameName}</h1>
            <p> Game Rating: {gameRating}</p>
            <p> Game Genre: {gameGenre}</p>

            <ul>
                Languages:
                {gameLanguages.map((language) => (
                    <li key={language}>{language}</li>
                ))}
            </ul>
        </div>
    )
}

export default GameInfo;