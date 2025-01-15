import FormButton from "./FormButton";

export default function Form(){

    const myAction = async(formData: any) => {
        await new Promise((res) => setTimeout(res, 2000));
        const userData = {
            name: formData.get("name"),
            email: formData.get("email"),
        }
        console.log(userData);
    }

    return(
        <form action={myAction} className="flex flex-col min-h-screen items-center justify-center">
            <div>
                <label htmlFor="name" className="hover:cursor-pointer">Name: </label>
                <input type="text" className="border-2 border-black" id="name" name="name" required/>
            </div>

            <div>
                <label htmlFor="email" className="hover:cursor-pointer">Email: </label>
                <input type="email" className="border-2 border-black" id="email" name="email" required/>
            </div>

            <FormButton/>
        </form>
    )
}