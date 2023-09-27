import "./Filter.scss";
import plusFilter from "../../images/icons/plus-filter.svg";
import CustomModal from "../CustomModal/CustomModal";
import { FILTER_ITEMS, DATE_ITEMS, TYPE_ITEMS } from "../../utils/Constant";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleChange, removeFilter } from "../../store/listsSlice";

const Filter = () => {
  const [modalTitle, setModalTitle] = useState("");
  const [modalArray, setModalArray] = useState([]);
  const [visible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const each = useSelector((state) => state.lists.each);
  const title = useSelector((state) => state.lists.title);

  useEffect(() => {
    if (title) {
      switch (title) {
        case "3 дня":
          setModalTitle(title);
          setModalArray(DATE_ITEMS);
          break;
        case "Все типы":
          setModalTitle(title);
          setModalArray(TYPE_ITEMS);
          break;
        default:
          return;
      }
    }
    return;
  }, [title]);

  useEffect(() => {
    if (!each) {
      return;
    }
    toggle();
  }, [each]);

  const toggle = () => setIsVisible(!visible);

  const handleClick = async () => {
    dispatch(removeFilter());
    toggle();
  };

  return (
    <section className='filter'>
      <div className='filter__container'>
        <div className='filter__info'>
          <div className='filter__balance'>
            <span className='filter__span-balance'>Баланс:</span>
            <span className='filter__span-rub'>272 ₽ </span>
            <button type='button' className='filter__button'>
              <img
                src={plusFilter}
                alt='добавить'
                className='filter__button-img'
              />
            </button>
          </div>
          <div className='filter__date'>
            <button className='filter__arrow-left' type='button' />
            <button
              className='filter__calendar-button'
              type='button'
              onClick={(e) => dispatch(handleChange(e.currentTarget.dataset))}
              data-id='calendar'
              data-value={"3 дня"}
            >
              <span className='filter__calendar' />
              <span className='filter__date-text'>3 дня</span>
            </button>
            <button
              className='filter__arrow-left filter__arrow-rigth'
              type='button'
            />
          </div>
        </div>
        <div className='filter__sort-box'>
          <input
            type='text'
            className='filter__input'
            placeholder='Поиск по звонкам'
          />
          {visible ? (
            <button className='filter__sort-close' onClick={handleClick}>
              Сбросить фильтры
            </button>
          ) : (
            ""
          )}
          <ul className='filter__lists'>
            {FILTER_ITEMS.map((item, index) => (
              <li key={index} className='filter__item'>
                <button
                  type='button'
                  className='filter__sort-btn'
                  onClick={(e) =>
                    dispatch(handleChange(e.currentTarget.dataset))
                  }
                  data-id={item}
                  data-value={item}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <CustomModal title={modalTitle} array={modalArray} />
    </section>
  );
};

export default Filter;
