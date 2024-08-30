import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isOpen, onClose, children }) => {
  return createPortal(
    <>
      {isOpen && (

        <div className="grid place-items-center h-screen w-screen backdrop-blur top-0 z-40 absolute ">
        
        <div className="px-4 rounded-lg m-auto relative z-50  min-h-[300px] min-w-[450px] bg-white">
          <div className="flex justify-end p-4">
            <AiOutlineClose onClick={onClose} className="cursor-pointer hover:text-red text-2xl" />
          </div>

          {children}
        </div>
        
      </div>
      )}
    </>
  , document.getElementById('modal-root'));
};

export default Modal;
