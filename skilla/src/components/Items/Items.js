import "./Items.scss";
import Item from "../Item/Item";

const Items = () => {
  return (
    <section className='items'>
      <div className='items__container'>
        <ul className='items__header'>
          <li className='items__header-point items__point-tip'>Тип</li>
          <li className='items__header-point items__point-time'>Время</li>
          <li className='items__header-point items__point-member'>Сотрудник</li>
          <li className='items__header-point items__point-call'>Звонок</li>
          <li className='items__header-point items__point-source'>Источник</li>
          <li className='items__header-point items__point-evaluation'>Оценка</li>
          <li className='items__header-point items__point-duration'>Длительность</li>
        </ul>
        <Item />
      </div>
    </section>
  );
};
export default Items;
