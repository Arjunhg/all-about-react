import Card from "./components/Card"

const Main = () => {

    return(
        <Card>
            {/* Reduces import  */}
            <Card.Title>Card Title</Card.Title> 
            <Card.Content>Card Description</Card.Content>
            <Card.Footer>Card Footer</Card.Footer>
        </Card>
    )
}

export default Main;