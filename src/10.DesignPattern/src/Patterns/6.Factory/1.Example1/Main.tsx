import ButtonFactory from "./shared/ButtonFactory";

const Main = () => {

    const buttonType = 'danger';
    const buttonLabel = 'click me'

    return <div>{ButtonFactory(buttonType, buttonLabel)}</div>
}

export default Main;