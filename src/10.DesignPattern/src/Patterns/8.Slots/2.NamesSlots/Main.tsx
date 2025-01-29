import Card from "./Card";

const Main = () => (
    <div>
        <Card
            cardTitle={<h1>Card Title</h1>}
            cardContent={<p>Card Content</p>}
            cardButton={<button>Card Button</button>}
        />
    </div>
)

export default Main;