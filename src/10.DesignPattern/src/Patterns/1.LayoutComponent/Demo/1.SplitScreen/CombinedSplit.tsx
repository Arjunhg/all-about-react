import Left from "./components/Left"
import Right from "./components/Right"
import SplitScreen from "./components/SplitScreen"


export const CombinedSplit = () => {

    return(
        <SplitScreen leftWidth={25} rightWidth={80}>
            <Left/>
            <Right/>
        </SplitScreen>
    )
}

export default CombinedSplit;