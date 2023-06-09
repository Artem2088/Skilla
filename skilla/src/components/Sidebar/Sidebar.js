import "./Sidebar.scss";
import logo from "../../utils/icons/logo.svg";
import result from "../../utils/icons/chart-timeline-variant.svg";
import orders from "../../utils/icons/orders-24px.svg";
import messages from "../../utils/icons/mail_outline-24px.svg";
import calls from "../../utils/icons/calls-24px.svg";
import counterparties from "../../utils/icons/people-24px.svg";
import documents from "../../utils/icons/documents-24px.svg";
import performers from "../../utils/icons/perm_identity_black_24dp.svg";
import reports from "../../utils/icons/briefcase-outline.svg";
import knowledge from "../../utils/icons/local_library_black_24dp.svg";
import settings from "../../utils/icons/settings-24px.svg";
import plus from "../../utils/icons/plus.svg";
import alert from "../../utils/icons/alert.svg";

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <div className='sidebar__container'>
        <img src={logo} alt='логотип' className='sidebar__logo' />
        <ul className='sidebar__nav'>
          <li className='sidebar__box'>
            <img src={result} alt='Итоги' className='sidebar__img' />
            <span className='sidebar__span'>Итоги</span>
          </li>
          <li className='sidebar__box'>
            <img src={orders} alt='Заказы' className='sidebar__img' />
            <span className='sidebar__span'>Заказы</span>
          </li>
          <li className='sidebar__box'>
            <img src={messages} alt='Сообщения' className='sidebar__img' />
            <span className='sidebar__span'>Сообщения</span>
          </li>
          <li className='sidebar__box'>
            <img src={calls} alt='Звонки' className='sidebar__img' />
            <span className='sidebar__span'>Звонки</span>
          </li>
          <li className='sidebar__box'>
            <img
              src={counterparties}
              alt='Контрагенты'
              className='sidebar__img'
            />
            <span className='sidebar__span'>Контрагенты</span>
          </li>
          <li className='sidebar__box'>
            <img src={documents} alt='Документы' className='sidebar__img' />
            <span className='sidebar__span'>Документы</span>
          </li>
          <li className='sidebar__box'>
            <img src={performers} alt='Исполнители' className='sidebar__img' />
            <span className='sidebar__span'>Исполнители</span>
          </li>
          <li className='sidebar__box'>
            <img src={reports} alt='Отчеты' className='sidebar__img' />
            <span className='sidebar__span'>Отчеты</span>
          </li>
          <li className='sidebar__box'>
            <img src={knowledge} alt='База знаний' className='sidebar__img' />
            <span className='sidebar__span'>База знаний</span>
          </li>
          <li className='sidebar__box'>
            <img src={settings} alt='Настройки' className='sidebar__img' />
            <span className='sidebar__span'>Настройки</span>
          </li>
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
