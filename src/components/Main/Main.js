import Filter from "../Filter/Filter";
import Items from "../Items/Items";
import "./Main.scss";

const Main = ({
  calls,
  loading,
  handleChange,
  title,
  each,
  getRecord,
  record,
  removeFilter,
}) => {
  return (
    <main className='main'>
      <Filter
        handleChange={handleChange}
        title={title}
        each={each}
        removeFilter={removeFilter}
      />
      <Items
        calls={calls}
        loading={loading}
        getRecord={getRecord}
        record={record}
      />
    </main>
  );
};

export default Main;
