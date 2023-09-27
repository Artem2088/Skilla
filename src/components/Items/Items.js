import "./Items.scss";
import Item from "../Item/Item";
import { SUBHEADER_ITEMS } from "../../utils/Constant";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Items = ({ getRecord, record }) => {
  const [lists, setLists] = useState([]);
  const calls = useSelector((state) => state.lists.lists);
  const loading = useSelector((state) => state.lists.status);

  useEffect(() => {
    for (let key of calls) {
      setLists(key.results);
    }
  }, [calls]);

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
          {loading == "resolved" ? (
            lists &&
            lists.map((each, index) => (
              <Item
                key={index}
                element={each}
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
