import "./Sidebar.scss";
import MenuItem from "../MenuItem/MenuItem.js";
import { MENU_ITEM } from "../../utils/Constant";
import logo from "../../images/icons/logo.svg";
import plus from "../../images/icons/plus.svg";
import alert from "../../images/icons/alert.svg";

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <div className='sidebar__container'>
        <div className='sidebar__logo-box'>
          <img src={logo} alt='логотип' className='sidebar__logo' />
        </div>
        <ul className='sidebar__nav'>
          {MENU_ITEM[0].map((item, index) => (
            <MenuItem item={item} key={index} image={MENU_ITEM[1][index]} />
          ))}
        </ul>
        <button className='sidebar__button-plus' type='button'>
          <span className='sidebar__button-span'>Добавить заказ</span>
          <img src={plus} alt='плюс' className='sidebar__img-plus' />
        </button>
        <button
          className='sidebar__button-plus sidebar__button-alert'
          type='button'
        >
          <span className='sidebar__button-span'>Оплата</span>
          <img src={alert} alt='оплата' className='sidebar__img-alert' />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
