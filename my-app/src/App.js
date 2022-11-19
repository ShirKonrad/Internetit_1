
import { useState } from "react";
import FoodOption from "./components/FoodOption";
import "./App.css"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function App() {
  const foods = [
    {
      img: '/assets/apple.jpg',
      title: 'apple',
      price: 6,
      second_img: '/assets/apple.jpg',
      shop: 'super1',
      description: 'Red apple'
    },
    {
      img: '/assets/banana.jpg',
      title: 'bannana',
      price: 5,
      second_img: '/assets/banana.jpg',
      shop: 'super2',
      description: 'Yellow banana'
    },
    {
      img: '/assets/watermelon.jpg',
      title: 'watermelon',
      price: 24,
      second_img: '/assets/watermelon.jpg',
      shop: 'super3',
      description: 'Green and red watermelon'
    },
    {
      img: '/assets/orange.jpg',
      title: 'orange',
      price: 2,
      second_img: '/assets/orange.jpg',
      shop: 'super1',
      description: 'Orange orange'
    },

    {
      img: '/assets/apple.jpg',
      title: 'apple',
      price: 6,
      second_img: '/assets/apple.jpg',
      shop: 'super5',
      description: 'Red apple'
    },
    {
      img: '/assets/banana.jpg',
      title: 'bannana',
      price: 5,
      second_img: '/assets/banana.jpg',
      shop: 'super1',
      description: 'Yellow banana'
    },
    {
      img: '/assets/watermelon.jpg',
      title: 'watermelon',
      price: 24,
      second_img: '/assets/watermelon.jpg',
      shop: 'super3',
      description: 'Green and red watermelon'
    },
    {
      img: '/assets/orange.jpg',
      title: 'orange',
      price: 2,
      second_img: '/assets/orange.jpg',
      shop: 'super7',
      description: 'Orange orange'
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <div className="app-list">
      <h2>
        Food Options
      </h2>
      {
        foods.map((food, i) => {
          return (
            <FoodOption
              key={i}
              title={food.title}
              img={food.img}
              price={food.price}
              onClick={() => {
                setSelected(food);
                setIsOpen(true);
              }} />)
        })
      }
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          {`More details on ${selected ? selected.title : 'food'}`}
        </DialogTitle>
        <DialogContent>
          <p>Where to buy: {selected && selected.shop}</p>
          <img src={selected && selected.second_img} />
          <p>Description: {selected && selected.description}</p>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose}>Close</button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
