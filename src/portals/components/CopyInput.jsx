import React from 'react'
import PopupContent from './PopupContent';

/**
 * CopyInput component allows users to input text and copy it to the clipboard.
 * It provides feedback when the text has been successfully copied.
 */
const CopyInput = () => {

    const [inputValue, setInputValue] = React.useState("");
    const [copied, setCopied] = React.useState(false);

    /**
     * Handles the copy action by writing the input value to the clipboard.
     * Sets the copied state to true for 2 seconds to provide feedback.
     */
    const handleCopy = () => {
        navigator.clipboard.writeText(inputValue).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        })
    }

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        aria-label="Input field to copy text from"
      />
      <button onClick={handleCopy}>Copy</button>
      <PopupContent copied={copied} />
    </div>
  )
}

export default CopyInput
