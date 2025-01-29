import MouseTracker from "./MouseTracker";

const Main = () => {

    return(
        <MouseTracker
            render={(position: any) => {
                return(
                    <p>
                        The current mouse position is ({position.x}, {position.y})
                    </p>
                )
            }}
        />
    )
}

export default Main;