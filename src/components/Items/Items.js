import "./Items.scss";
import Item from "../Item/Item";
import { SUBHEADER_ITEMS } from "../../utils/Constant";

const Items = ({ calls, loading, getRecord, record }) => {
  return (
    <section className='items'>
      <div className='items__container'>
        <ul className='items__header'>
          {SUBHEADER_ITEMS.map((item, index) => (
            <li className='items__header-point' key={index}>
              {item}
            </li>
          ))}
        </ul>
        <ul className='items__lists'>
          {loading ? (
            calls.map((each, index) => (
              <Item
                key={index}
                each={each}
                getRecord={getRecord}
                record={record}
              />
            ))
          ) : (
            <h1 className='items__loader'>Идет загрузка....</h1>
          )}
        </ul>
      </div>
    </section>
  );
};
export default Items;
