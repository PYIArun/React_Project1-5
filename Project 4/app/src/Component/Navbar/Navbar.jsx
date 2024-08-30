import styles from './Navbar.module.css';

const Navbar = (props) => {
  
  const filterBtns = [
    {
      name: "All",
      type: "all",
    },    
    {
      name: "Breakfast",
      type: "breakfast",
    },    
    {
      name: "Lunch",
      type: "lunch",
    },    
    {
      name: "Dinner",
      type: "dinner",
    },
    
  ]


  return (
    <>

    <div className={styles.container}>

    <div className={styles.top_container}>
      <div className={styles.logo}>
      <img src='./FoodyZone.svg'></img>
      </div>

      <div className={styles.search}>
      <input onChange={props.searchFood} type="text" placeholder='Search Food...' />
      </div>
    </div>

    <div className={styles.filter_container}>


    {

      filterBtns?.map((btn)=>{

        return <button key={btn.name} onClick={()=>props.filteredFood(btn.type)} className={props.isSelected===btn.type?styles.btns2 :styles.btns}>{btn.name}</button>


      })
    }
    {/* <button onClick={()=>props.filteredFood("all")} className={styles.btns}>All</button>
    <button onClick={()=>props.filteredFood("breakfast")} className={styles.btns}>Breakfast</button>
    <button onClick={()=>props.filteredFood("lunch")} className={styles.btns}>Lunch</button>
    <button onClick={()=>props.filteredFood("dinner")} className={styles.btns}>Dinner</button> */}

    </div>


    </div>
    
    </>
  )
}

export default Navbar