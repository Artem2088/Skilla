import "./Filter.scss";
import plusFilter from "../../utils/icons/plus-filter.svg";
import arrow from "../../utils/icons/keyboard_arrow.svg";
import calendar from "../../utils/icons/icon-calendar.svg";
import search from "../../utils/icons/search.svg";
import arrowDwn from "../../utils/icons/keyboard_arrow_down.svg";

const Filter = () => {
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
            <button className='filter__arrow'>
              <img
                src={arrow}
                alt='стрелка влево'
                className='filter__arrow-img'
              />
            </button>
            <img src={calendar} alt='календарь' className='filter__calendar' />
            <span className='filter__date-text'>3 дня</span>
            <button className='filter__arrow filter__arrow-rigth'>
              <img
                src={arrow}
                alt='стрелка влево'
                className='filter__arrow-img'
              />
            </button>
          </div>
        </div>
        <div className='filter__sort-box'>
          <img src={search} alt='поиск' className='filter__input-img' />
          <input
            type='text'
            className='filter__input'
            placeholder='Поиск по звонкам'
          />
          <button type='button' className='filter__sort-btn'>
            Все типы
            <img
              src={arrowDwn}
              alt='стрелка вниз'
              className='filter__sort-img'
            />
          </button>
          <button type='button' className='filter__sort-btn'>
            Все сотрудники
            <img
              src={arrowDwn}
              alt='стрелка вниз'
              className='filter__sort-img'
            />
          </button>
          <button type='button' className='filter__sort-btn'>
            Все звонки
            <img
              src={arrowDwn}
              alt='стрелка вниз'
              className='filter__sort-img'
            />
          </button>
          <button type='button' className='filter__sort-btn'>
            Все источники
            <img
              src={arrowDwn}
              alt='стрелка вниз'
              className='filter__sort-img'
            />
          </button>
          <button type='button' className='filter__sort-btn'>
            Все оценки
            <img
              src={arrowDwn}
              alt='стрелка вниз'
              className='filter__sort-img'
            />
          </button>
          <button type='button' className='filter__sort-btn'>
            Все ошибки
            <img
              src={arrowDwn}
              alt='стрелка вниз'
              className='filter__sort-img'
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Filter;
