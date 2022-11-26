import { useState } from "react";
import FoodOption from "./components/FoodOption";
import "./App.css";
import DetailsPopup from "./components/DetailsPopup";

function App() {
  const foods = [
    {
      img: "/assets/apple.jpg",
      title: "apple",
      price: 6,
      second_img: "/assets/apple.jpg",
      shop: "super1",
      description: "Red apple",
    },
    {
      img: "/assets/banana.jpg",
      title: "bannana",
      price: 5,
      second_img: "/assets/banana.jpg",
      shop: "super2",
      description: "Yellow banana",
    },
    {
      img: "/assets/watermelon.jpg",
      title: "watermelon",
      price: 24,
      second_img: "/assets/watermelon.jpg",
      shop: "super3",
      description: "Green and red watermelon",
    },
    {
      img: "/assets/orange.jpg",
      title: "orange",
      price: 2,
      second_img: "/assets/orange.jpg",
      shop: "super1",
      description: "Orange orange",
    },

    {
      img: "/assets/strawberry.jpg",
      title: "strawberry",
      price: 3,
      second_img: "/assets/strawberry.jpg",
      shop: "super5",
      description: "Red strawberry",
    },
    {
      img: "/assets/pear.jpg",
      title: "pear",
      price: 9,
      second_img: "/assets/pear.jpg",
      shop: "super1",
      description: "Sweet pear",
    },
    {
      img: "/assets/cucumber1.jpg",
      title: "cucumber",
      price: 12,
      second_img: "/assets/cucumber.jpg",
      shop: "super3",
      description: "Green cucumber",
    },
    {
      img: "/assets/tomato.jpg",
      title: "tomato",
      price: 13,
      second_img: "/assets/tomato.jpg",
      shop: "super7",
      description: "Red tomato",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <div className="app-list">
      <h2>Food Options</h2>
      <div className="list-container">
        {foods.map((food, i) => {
          return (
            <FoodOption
              key={i}
              title={food.title}
              img={food.img}
              price={food.price}
              onClick={() => {
                setSelected(food);
                setIsOpen(true);
              }}
            />
          );
        })}
      </div>
      <DetailsPopup
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        selected={selected}
      />
    </div>
  );
}

export default App;
