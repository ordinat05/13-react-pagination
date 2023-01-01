import React, { useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const messageRef = useRef();

  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(3);

  function showMoreFood() {
    setVisible((item) => (item += 3));
  }
  // 🔻🔻🔻 Son elemente scroll yaptırıyor. START
  const el = useRef(null);
  useEffect(() => {
    el.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
  });
  // 🔺🔺🔺 Son elemente scroll yaptırıyor. END

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=british")
      .then((res) => res.json())
      .then((data) => setItems(data.meals));
  }, []);

  return (
    <div className="App">
      <h1 className="header">
        British Meals
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/2560px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png"
          alt=""
        />

      </h1>

      <div className="container" >
        {items.slice(0, visible).map((item, index) => (
          <div key={index} className="card">
            <div className="image">
              <img src={item.strMealThumb} alt="" />
            </div>
            <p>{item.strMeal}</p>
          </div>
        ))}
        <div className="alttakal">
          <button onClick={showMoreFood}>Click for More Meals</button>
          <button onClick={() => setVisible(0)}>Listeyi SIFIRLA</button>
        </div>
      </div>
      {/* 🔻🔻🔻 Son elemente scroll yaptırıyor. START */}
      <div id={'el'} ref={el}></div>
      {/* 🔺🔺🔺 Son elemente scroll yaptırıyor. START */}
    </div >
  );
}

export default App
