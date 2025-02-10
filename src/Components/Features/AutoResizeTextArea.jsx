import React, { useRef } from "react";

function AutoResizeTextarea({ ...props }) {
  const textareaRef = useRef(null);

  const handleInput = (e) => {
    const textarea = textareaRef.current;

    // Adjust height dynamically
    textarea.style.height = "auto"; // Reset height to auto to shrink if needed
    textarea.style.height = `${textarea.scrollHeight}px`; // Set height based on content

    // Call the onChange handler if passed
    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <textarea
      {...props} // Spread all passed props onto the textarea
      ref={textareaRef}
      onInput={handleInput} // Add the dynamic resizing logic
      style={{
        width: "100%", // Full width
        minHeight: "40px", // Minimum height
        maxHeight: "300px", // Maximum height
        resize: "none", // Disable manual resizing
        borderRadius: "4px",
        ...props.style, // Merge any custom styles passed via props
      }}
    ></textarea>
  );
}

export default AutoResizeTextarea;
