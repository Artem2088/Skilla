import Filter from "../Filter/Filter";
import Items from "../Items/Items";
import "./Main.scss";

const Main = () => {
  return (
    <main className='main'>
      <Filter />
      <Items />
    </main>
  );
};

export default Main;
