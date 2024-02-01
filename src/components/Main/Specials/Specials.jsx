import React from "react";
import { AppWrap } from "../../../wrapper";
import { images } from "../../../constants";
import './Specials.css';
import { MdDeliveryDining } from 'react-icons/md';



const foodItems = [
    {
        name: 'Item A', 
        price: "12.99", 
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab tempora deleniti eum repellat explicabo ratione quisquam fugiat quidem",
        image: images.ac,
    }, 
    {
        name: "Item B",
        price: "5.99",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab tempora deleniti eum repellat explicabo ratione quisquam fugiat quidem",
        image: images.ad,
    }, 
    {
        name: "Item C",
        price: "5.00",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab tempora deleniti eum repellat explicabo ratione quisquam fugiat quidem",
        image : images.ac,
    },
    {
        name: "Item D",
        price: "5.00",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab tempora deleniti eum repellat explicabo ratione quisquam fugiat quidem",
        image : images.ad,
    },
      
]

const FoodCard = ({props}) => {
return (
        <div className="app__specials-item">
            <div
                className="app__spcecials-image"
                style={{backgroundImage: `url(${props.image})`}}>
                {/* <img className="" src={props.image} alt={props.name} /> */}
            </div>
          <div className="app_specials-details">
            <div className="app__specials-name-price">
                <h3 className="app_specials-name">{props.name}</h3>
                <p className="app_specials-price">{props.price}</p>
            </div>
            <p className="app_specials-description">{props.description}</p>
            <button className="app__specials-order">
                 Order
                 
             </button>
          </div>
        </div>
);
}
const Specials = () => {
    return (
        <div
            className="app__specials"
        >
           <div className="app__specials-title-and-btn">
             <h1 className="app__specials-title">Specials</h1>
             {/* <button className="app__specials-btn-menu">
                Online Menu
            </button> */}
           </div>
            <div
                className="app__specials-food-card-holder">
                <div
                    className="app__specials-food"
                >
                        {
                            foodItems.map((item) => {
                                return (
                                        <FoodCard props={item} />
                                );
                            })
                        }
                </div>
            </div>
        </div>
    );
}

export default AppWrap(Specials, 'Menu', 'app__specials');
