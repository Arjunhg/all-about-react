import { useState, useEffect } from "react";

const ControlledForm = () => {

    const [name, setName] = useState<string>('');
    const [age, setAge] = useState<number>(0);
    const [hairColor, setHairColor] = useState<string>('');
    const [nameInputError, setNameInputError] = useState<string>('');

    useEffect(() => {
        if(name.length<2){
            setNameInputError('Name must be at least 2 characters long');
        }else{
            setNameInputError('');
        }
    }, [name]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) : void => {
        e.preventDefault();
        console.log(name);
        console.log(age);
        console.log(hairColor);
    }

    return(
        <form onSubmit={handleSubmit}>
            {
                nameInputError && <p className="text-red-500">{nameInputError}</p>
            }
            <input  
                type="text" 
                className="border m-2 p-2"
                name="name"
                value={name}
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
            />
            <input  
                type="number" 
                className="border m-2 p-2"
                name="age"
                value={age}
                placeholder="Age"
                onChange={(e) => setAge(Number(e.target.value))}
            />
            <input  
                type="text" 
                className="border m-2 p-2"
                name="hairColor"
                value={hairColor}
                placeholder="Hair Color"
                onChange={(e) => setHairColor(e.target.value)}
            />

            <button type="submit">Submit</button>
        </form>
    )
}

export default ControlledForm;