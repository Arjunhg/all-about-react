import { useState } from "react";

/**
 * Switcher component allows users to toggle between "Dark" and "Light" modes.
 * It demonstrates the use of the `key` attribute to forcefully remount the input element.
 */
const Switcher = () => {
    const [switcher, setSwitcher] = useState(false);

    return (
        <div>
            {
                switcher ? (
                    <span className="bg-black text-white p-5 rounded m-2">Dark</span>
                ) : (
                    <span className="bg-slate-300 text-black p-5 rounded m-2">Light</span>
                )
            }
            <br/>
            {/**
              * The `key` attribute is used to forcefully remount the input element when the `switcher` state changes.
              * This ensures that the input field is reset when switching between modes.
              * If the `key` attribute is not used, the input field will retain its value even after switching modes.
              */}
            <input type="text" className="border-4 rounded" key={switcher ? "dark" : "light"}/>
            <button onClick={() => setSwitcher((s) => !s)}>Switch</button>
        </div>
    )
}

export default Switcher