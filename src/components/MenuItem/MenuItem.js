import { useState } from "react";
import "./MenuItem.scss";
import { useEffect } from "react";

const MenuItem = ({ item, image }) => {
  const [activ, setIsActiv] = useState(false);

  useEffect(() => {
    if (item == "Звонки") {
      setIsActiv(true);
    }
  }, []);
  return (
    <li className={activ ? "menuItem menuItem__activ" : "menuItem"}>
      <button className='menuItem__button'>
        <img src={image} alt={item} className='menuItem__img' />
        <span className='menuItem__span'>{item}</span>
      </button>
    </li>
  );
};

export default MenuItem;
