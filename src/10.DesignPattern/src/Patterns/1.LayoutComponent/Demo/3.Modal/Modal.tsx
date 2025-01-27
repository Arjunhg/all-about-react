import Main from "./components/Main"
import GamesInfo from "./components/GamesInfo"
import { games } from "./data/data"


const Modal = () => {
  return (
    <div>
        <Main>
            <GamesInfo data={games}/>
        </Main>
    </div>
  )
}

export default Modal
