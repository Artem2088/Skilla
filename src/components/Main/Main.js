import Filter from "../Filter/Filter";
import Items from "../Items/Items";
import "./Main.scss";

const Main = ({calls, loading}) => {
  return (
    <main className='main'>
      <Filter />
      <Items calls={calls} loading={loading}/>
    </main>
  );
};

export default Main;
