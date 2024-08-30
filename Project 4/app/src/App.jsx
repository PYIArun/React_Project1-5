import Navbar from "./Component/Navbar/Navbar";
import './App.css'
import FoodCardContainer from "./Component/FoodContainer/FoodCardContainer";
import { useEffect, useState } from "react";

export const BASE_URL = 'http://localhost:9000';



const App = () => {



  const [filteredData, setfilteredData] = useState(null);
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const [selectedBtn, setselectedBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async ()=>{


      setloading(true);
  
      try {
        const response = await fetch(BASE_URL);
  
        const json = await response.json();
    
        setdata(json);
        setfilteredData(json);
        setloading(false);
        console.log(data);
  
      } catch (error) {
        seterror("Unable to fetch data. Error Occured: ", error);
      }
  
  
    }
  
    fetchFoodData();
  }, []);


  const searchFood = (e)=>{

    console.log(data);
    const searchValue = e.target.value;
    console.log(searchValue);
    if(searchValue === ""){
      setfilteredData(data);
      return;
      
    }

    const filter = data?.filter((food)=>{
      return food.name.toLowerCase().includes(searchValue.toLowerCase());
    })

    console.log(filter);
    setfilteredData(filter);
  };


  const filteredFood = (type)=>{

    if(type=="all"){
      setfilteredData(data);
      setselectedBtn("all");
      return;
    }

    const filter = data?.filter((food)=>{
      return food.type.toLowerCase().includes(type.toLowerCase());
    })

    setfilteredData(filter);
    setselectedBtn(type);
  }

  if (error) return <div> {error}</div>
  if (loading) return <div> Loading... </div>

  return (
    <>
      <Navbar isSelected={selectedBtn} filteredFood={filteredFood} searchFood={searchFood} data = {data}/>
      <FoodCardContainer data={filteredData} />
    </>
  );
};

export default App;
