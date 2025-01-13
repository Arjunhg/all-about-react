import { createPortal } from "react-dom"

/**
 * PopupContent component displays a popup message indicating that the text has been copied to the clipboard.
 * It uses React Portals to render the popup in a different part of the DOM.
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.copied - Boolean indicating whether the text has been copied
 */
const PopupContent = ( { copied } ) => {
  return (
    createPortal(
        <section>
            {
                copied && (
                    <div style={{position: "absolute", bottom:"3"}}>
                        Copied To Clipboard
                    </div>
                )
            }
        </section>,
        document.querySelector("#portal-popup")
    )
)
}

export default PopupContent

// const PopupContent = ({copied}) => {
//     return (
//         <section>
//             {
//                 copied && (
//                     <div style={{position: "absolute", bottom:"3"}}>
//                         Copied To Clipboard
//                     </div>
//                 )

//             }
//         </section>
//     )
// }
