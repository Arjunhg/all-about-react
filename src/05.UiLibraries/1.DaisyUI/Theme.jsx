import React from 'react'

const Theme = () => {
  return (
    // <section className='flex flex-col gap-y-4'>
    //     <div className="form-control">
    //         <label className="label cursor-pointer gap-4">
    //             <span className="label-text">Default</span>
    //             <input type="radio" name="theme-radios" className="radio theme-controller" value="default" />
    //         </label>
    //         </div>
    //         <div className="form-control">
    //         <label className="label cursor-pointer gap-4">
    //             <span className="label-text">Retro</span>
    //             <input type="radio" name="theme-radios" className="radio theme-controller" value="retro" />
    //         </label>
    //         </div>
    //         <div className="form-control">
    //         <label className="label cursor-pointer gap-4">
    //             <span className="label-text">Cyberpunk</span>
    //             <input type="radio" name="theme-radios" className="radio theme-controller" value="cyberpunk" />
    //         </label>
    //         </div>
    //         <div className="form-control">
    //         <label className="label cursor-pointer gap-4">
    //             <span className="label-text">Valentine</span>
    //             <input type="radio" name="theme-radios" className="radio theme-controller" value="valentine" />
    //         </label>
    //         </div>
    //         <div className="form-control">
    //         <label className="label cursor-pointer gap-4">
    //             <span className="label-text">Aqua</span>
    //             <input type="radio" name="theme-radios" className="radio theme-controller" value="aqua" />
    //         </label>
    //     </div>
    // </section>

    // 
    <div className="join join-vertical">
        <input
            type="radio"
            name="theme-buttons"
            className="btn theme-controller join-item"
            aria-label="Default"
            value="default" />
        <input
            type="radio"
            name="theme-buttons"
            className="btn theme-controller join-item"
            aria-label="Retro"
            value="retro" />
        <input
            type="radio"
            name="theme-buttons"
            className="btn theme-controller join-item"
            aria-label="Cyberpunk"
            value="cyberpunk" />
        <input
            type="radio"
            name="theme-buttons"
            className="btn theme-controller join-item"
            aria-label="Valentine"
            value="valentine" />
        <input
            type="radio"
            name="theme-buttons"
            className="btn theme-controller join-item"
            aria-label="Aqua"
            value="aqua" />
    </div>
  )
}

export default Theme
