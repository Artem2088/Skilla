import "./Header.scss";
import search from "../../utils/icons/search.svg";
import arrowDown from "../../utils/icons/keyboard_arrow_down.svg";
import avatar from "../../utils/icons/avatar.svg";
import { DATE, MONTHS } from "../../utils/Constant";
import { useEffect, useState } from "react";

const Header = () => {
  const [date, setDate] = useState(0);
  const [months, setMonths] = useState(0);
  const [weekday, setWeekday] = useState(0);

  useEffect(()=> {
    let current = new Date;
    let currentMonths = current.getMonth();
    let currentDate = current.getDate();
    let currentData = current.getDay();
    for (let key in DATE) {
      if((currentData - 1) == key){
        setWeekday(DATE[key])
      }
    }
    setDate(currentDate)
    for(let key in MONTHS) {
      if(currentMonths == key){
        setMonths(MONTHS[key])
      }
    }
  }, [])



  return (
    <header className='header'>
      <div className='header__container'>
        <span className='header__date'>{weekday}, {date} {months}</span>
        <ul className='header__analytics-box'>
          <li className='header__new-call'>
            <div className='header__quantity-text'>
              Новые звонки
              <span className='header__quantity-text_new'>20</span>
              <span className='header__quantity-text_span'>из</span>
              <span className='header__quantity-text_all'>30 шт</span>
            </div>
            <div className='header__progress-box'>
              <span className='header__progress-green'></span>
              <span className='header__progress'></span>
            </div>
          </li>
          <li className='header__new-call header__quality'>
            <div className='header__quantity-text'>
              Качество разговоров
              <span className='header__quantity-percent'>40%</span>
            </div>
            <div className='header__progress-box'>
              <span className='header__progress-yellow'></span>
              <span className='header__progress'></span>
            </div>
          </li>
          <li className='header__new-call header__conversion'>
            <div className='header__quantity-text'>
              Конверсия в заказ
              <span className='header__conversion-qty'>67%</span>
            </div>
            <div className='header__progress-box'>
              <span className='header__progress-red'></span>
              <span className='header__progress'></span>
            </div>
          </li>
        </ul>
        <button className='header__search-btn'>
          <img src={search} alt='поиск' className='header__search-img' />
        </button>
        <div className='header__users'>
          <button type='button' className='header__user-client'>
            ИП Сидорова Александра Михайловна
            <img
              src={arrowDown}
              alt='стрелка вниз'
              className='header__arrow-btn'
            />
          </button>
          <button type='button' className='header__user-operator'>
            <img src={avatar} alt='аватар' className='header__avatar' />
            <img
              src={arrowDown}
              alt='стрелка вниз'
              className='header__arrow-btn'
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
