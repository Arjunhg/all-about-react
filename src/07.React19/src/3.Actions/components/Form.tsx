
const Form = () => {

    const formAction = (formData: any) => {
        const userData = {
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password")
        }

        console.log(userData);
    }

  return (
    <form className="flex flex-col min-h-screen items-center justify-center" action={formAction}>

      <label htmlFor="name" className="hover:cursor-pointer">Name: </label>
      <input type="text" id="name" name="name" className="border-2 border-black rounded"/>{ " " }
      <br/>

      <label htmlFor="email" className="hover:cursor-pointer">Email: </label>
      <input type="email" id="email" name="email" className="border-2 border-black rounded"/>{ " " }
      <br/>

      <label htmlFor="password" className="hover:cursor-pointer">Password: </label>
      <input type="password" id="password" name="password" className="border-2 border-black rounded"/>{ " " }
      <br/>

      <button type="submit" className="bg-black rounded text-white px-4 py-2 mt-3">Submit</button>
    </form>
  )
}

export default Form
