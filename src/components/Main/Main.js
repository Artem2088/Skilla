import Filter from "../Filter/Filter";
import Items from "../Items/Items";
import "./Main.scss";

const Main = ({ getRecord, record }) => {
  return (
    <main className='main'>
      <Filter />
      <Items getRecord={getRecord} record={record} />
    </main>
  );
};

export default Main;
