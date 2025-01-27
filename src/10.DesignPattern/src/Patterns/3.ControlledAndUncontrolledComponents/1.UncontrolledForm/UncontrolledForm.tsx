import { FormEvent, useRef } from "react";

const UncontrolledForm = () => {

    const nameInput = useRef<HTMLInputElement>(null);
    const ageInput = useRef<HTMLInputElement>(null);
    const hairColorInput = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) : void => {
        e.preventDefault();

        if(nameInput.current && ageInput.current && hairColorInput.current) {
            console.log(nameInput.current.value);
            console.log(ageInput.current.value);
            console.log(hairColorInput.current.value);
        }
    }

    return(
        <form onSubmit={handleSubmit} >
            <input 
                type="text" 
                // value={nam}
                className="border"
                name="name"
                placeholder="name"
                ref={nameInput}
            />
            <input 
                type="number" 
                // value={nam}
                className="border"
                name="age"
                placeholder="Age"
                ref={ageInput}
            />
            <input 
                type="text" 
                // value={nam}
                className="border"
                name="hairColor"
                placeholder="Hair Color"
                ref={hairColorInput}
            />
            <input type="submit" name="submit" placeholder="Submit"/>
        </form>
    )

}

export default UncontrolledForm;