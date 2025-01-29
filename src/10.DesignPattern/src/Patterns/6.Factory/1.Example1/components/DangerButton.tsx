
const DangerButton = ({label}: {label: string}) => {

    return <button className="bg-red-400 p-4 btn-danger hover:bg-red-500">
        {label}
    </button>
}

export default DangerButton;

// const DangerButton = (label: string) => {

//     return <button className="bg-green-400 p-4 btn-danger">
//         {label}
//     </button>
// }

// export default DangerButton;