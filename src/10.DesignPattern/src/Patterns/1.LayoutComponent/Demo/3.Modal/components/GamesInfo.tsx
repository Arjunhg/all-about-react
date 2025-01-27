type Game = {
    gameName: string;
    gameRating: number;
    gameGenre: string;
    gameLanguages: string[];
}

type GamesInfoProps = {
    data: Game[];
}

const GamesInfo = (  { data }: GamesInfoProps ) => {

    // const { gameName, gameRating, gameGenre, gameLanguages } = data[0];

    return(
        <div>
            {
                data.map((item, i) => {
                    const { gameName, gameRating, gameGenre, gameLanguages } = item;

                    return(
                        <div key={i}>
                            <h2>{gameName}</h2>
                            <p>Rating: {gameRating}</p>
                            <p>Genre: {gameGenre}</p>
                            
                            <ul>
                                Languages:
                                {
                                    gameLanguages.map((language, i) => (
                                        <li key={i}>{language}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default GamesInfo;