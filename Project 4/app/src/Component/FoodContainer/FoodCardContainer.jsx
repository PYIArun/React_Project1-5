import { BASE_URL } from '../../App';
import styles from './FoodCardContainer.module.css';

const FoodCardContainer = ({data: foods}) => {
  return (
    <section>

    <div className={styles.food_cards}> 
    
    {
        foods?.map((food)=>{

            return(
            <div key={food.name} className={styles.food_card}>
                <div className={styles.food_image}>
                    <img src={BASE_URL + food.image}></img>
                </div>

                <div className={styles.food_info}>
                    <div className={styles.info}>
                        <h3>{food.name}</h3>
                        <p>{food.text}</p>
                    </div>
                    <button className={styles.btn}>${food.price.toFixed(2)}</button>

                </div>
            </div>
            )

        })
    }

    </div>


    </section>
  )
}

export default FoodCardContainer