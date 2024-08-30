import Navbar from "./components/Navbar";
import { IoSearch } from "react-icons/io5";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot, snapshotEqual } from "firebase/firestore";
import { db } from "./config/firebase";

import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclouse";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFoundContact from "./components/NotFoundContact";



const App = () => {

  const [contacts, setContactList] = useState([]);
  
  const {isOpen, onClose, onOpen} = useDisclouse();
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) =>{
          
        const contactLists = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        setContactList(contactLists);
        return contactLists
        })

      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);


  const filterContacts = (e) =>{
    const value = e.target.value;
    console.log(value);
            const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) =>{
          
        const contactLists = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        const filteredContacts = contactLists.filter(contact =>

          contact.name.toLowerCase().includes(value.toLowerCase())

        )
        setContactList(filteredContacts);
        return filteredContacts
        })


  }
  return (

    <>
    <div className="max-w-[370px] mx-auto px-4">
      <Navbar />

      <div className="flex items-center gap-2">
        <div className="flex relative items-center flex-grow">
          <IoSearch className="text-white text-4xl absolute pl-3" />
          <input
          onChange={filterContacts}
            type="text"
            className="border border-white bg-transparent 
      h-10 rounded-md  text-white pl-10 flex-grow"
          ></input>
        </div>

        <div>
          <AiOutlinePlusCircle onClick={onOpen} className="text-5xl text-white cursor-pointer " />
        </div>
      </div>

      <div className="mt-4">
        {
          contacts.length <= 0 ?

          <NotFoundContact/>
        :
        
        contacts.map((contact) => {
          return (
              <ContactCard contact ={contact} />
          );
        })
        
        }
      </div>


    </div>

      <AddAndUpdateContact isOpen={isOpen} onClose={onClose}/>
      <ToastContainer position="bottom-center"/>

    </>
  );
};

export default App;
