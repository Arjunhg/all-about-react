import useWindowSize from "../../hooks/7.CustomHooks/WindowSize/useWindowSize";

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const Test = () => {

  const { width, height } = useWindowSize();

  return (
    <div className="min-h-screen flex flex-col" >

       <div className="lg:flex flex lg:gap-x-12 gap-x-4 underline">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900 ">
                {item.name}
              </a>
            ))}
        </div>

        <div className="flex-grow border border-red-700 flex flex-col gap-y-3" data-theme="retro">

          <button className="btn self-start" data-theme="dracula">Button</button>

          <button className="btn self-start">Button</button>

          <button className="btn btn-success self-start">Button</button>

          <button className="btn btn-lg btn-outline self-start">Button</button>

          <button className="btn btn-xs btn-outline self-start">Button</button>

          <button className="btn btn-outline btn-wide">Wide</button>

          <button className="btn btn-square btn-outline">
            <span className="loading loading-spinner"></span>
          </button>
        </div>

      <footer className="mt-auto bg-gray-100 border border-green-700 p-4 text-center">
        <p>Width: {width} | Height: {height}</p>
      </footer>
    </div>
  )
}

export default Test;