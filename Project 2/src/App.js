import React, { useState} from "react";
import './App.css'
import Navigation from "./Components/Navigation/Navigation";
import ContactHeader from "./Components/ContactHeader/ContactHeader";
import ContactForm from "./Components/ContactForm/ContactForm";

const App = () => {


  return (
    <>
    <Navigation/>
    <div className="main_container">
      <ContactHeader/>
      <ContactForm />
    </div>
    </>
  );
};

export default App;