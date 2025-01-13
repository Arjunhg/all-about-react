import React from 'react'

const ShoppingList = () => {

    const [item, setItem] = React.useState([]);
    const [name, setName] = React.useState("");
    const [quantity, setQuantity] = React.useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name || !quantity){
            alert("Enter both the name and quantity");
            return;
        }

        const newItem = {
            name,
            quantity: parseInt(quantity)
        }

        setItem([...item, newItem]);

        setName("");
        setQuantity("");
    }

  return (
    <div>
      <h1>Add Now Items</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
            Name: <input type="text" value={name} placeholder='Enter Name' onChange={(e) => setName(e.target.value)}/>
        </label> 
        <br/>
        <label htmlFor="quantity">
            Quantity: <input type="number" value={quantity} placeholder='Enter Quantity' onChange={(e) => setQuantity(e.target.value)}/>
        </label>

        <button type='submit'>Add</button>
      </form>

      <ul>
        {item.map((item, index) => (
            <li key={index}>
                <span>{item.name}</span> - <span>{item.quantity}</span>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList
