import "./Items.scss";

const Items = () => {
  return (
    <section className='items'>
      <div className='items__container'>
        <ul className='items__header'>
          <li className='items__header-point'>Тип</li>
          <li className='items__header-point'>Время</li>
          <li className='items__header-point'>Сотрудник</li>
          <li className='items__header-point'>Звонок</li>
          <li className='items__header-point'>Источник</li>
          <li className='items__header-point'>Оценка</li>
          <li className='items__header-point'>Длительность</li>
        </ul>
      </div>
    </section>
  );
};
export default Items;
