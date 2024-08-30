import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import { db } from "../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import Modal from "./Modal";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclouse from "../hooks/useDisclouse";
import { toast } from "react-toastify";

const ContactCard = ({contact}) => {

const  {isOpen, onClose, onOpen} = useDisclouse();

  const deleteContact = async (id)=>{

    try {

        await deleteDoc(doc(db, "contacts", id));
        toast.success("Contact Deleted Successfully!")
    } catch (error) {
        console.log(error);   
    }

  }

  return (
    <div
    key={contact.id}
    className="mt-3 flex border justify-between bg-yellow p-3 rounded-md items-center"
  >

    <div className="flex gap-2 items-center">

      <HiOutlineUserCircle className="text-4xl text-orange" />

      <div className="names_email">
        <h2 className="font-medium text-[18px]">{contact.name}</h2>
        <p className="text-sm">{contact.email}</p>
      </div>

    </div>


    <div className="icons flex gap-1 text-3xl">
      <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
      <IoMdTrash onClick={()=>deleteContact(contact.id)} className="text-orange cursor-pointer" />
    </div>


    <AddAndUpdateContact contact={contact} isUpdate={true} isOpen={isOpen} onClose={onClose} />
  </div>
  )
}

export default ContactCard