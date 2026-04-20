import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
    //children is a prop the represents the content , can be accessed using props.children 
    // or destructure {children}
    const elRef = useRef(null);
    if (!elRef.current) {
        elRef.current = document.createElement('div');
    }

    useEffect(() => {
    const Modal = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
    // every rerender will add on to elRef.current, so need to clean up by using removeChild
    // without cleaning up it can lead to crash 
}, []);

return createPortal(<div> {children} </div>, elRef.current)
}

export default Modal;

// modal is a way to create a portal to render children in a different DOM tree i.e side nav
// useRef helps create mutable reference 
// can only use '.current' to the erefs which prevent triggering a render of components
// createPortal is a function that allows render child component 